from flask import  request, jsonify,json
from datetime import datetime
from flask import current_app as app
from db import db
from model.user import Users

from model.coastal import Rainfall
from auth import encode_auth_token, auth
import psycopg2
from config import Config
import numpy as np
from flask_cors import CORS
from pyproj import Proj, transform
from sqlalchemy import func



@app.route('/api/index', methods=['GET'])
def get_index():
    data = db.session.query(DistrictCoastalUrban).all()
    state_data = DistrictCoastalUrban.get_all(data)
    state = {}
    year = set()
    for row in state_data:
        year.add(row["year"])
        if row["state"] in state:
            state[row["state"]].append(row["district"])
        else:
            state[row["state"]] = [row["district"]]
    states = {}
    for key, value in state.items():
        states[key] = list(set(value))
    return {"year": list(year), "states": states}

@app.route('/api/analytics', methods=['GET'])
def get_analytics_data():
    state = request.args.get('state')
    district = request.args.get('district')
    query = db.session.query(
        DistrictCoastalUrban.year,
        func.sum(DistrictCoastalUrban.area).label('area'))
    if (state != None):
        query = query.filter(DistrictCoastalUrban.state == state)
        if (district != None):
            query = query.filter(DistrictCoastalUrban.district == district)

    data = query.group_by(DistrictCoastalUrban.year).order_by(DistrictCoastalUrban.year.asc()).all()

    line_data = []
    value = 0
    for row in data:
        value = value + int(row[1])
        line_data.append({
            "year": row[0],
            "area": value
        })
    return line_data


@app.route('/api/analytics/bar', methods=['GET'])
def get_analytics_bar_data():
    state = request.args.get('state')
    bar_query = db.session.query(
        DistrictCoastalUrban.state,
        func.sum(DistrictCoastalUrban.area).label('area')).group_by(DistrictCoastalUrban.state).order_by(DistrictCoastalUrban.state.asc())
    if state:
        bar_query = db.session.query(
        DistrictCoastalUrban.district,
        func.sum(DistrictCoastalUrban.area).label('area')).filter(DistrictCoastalUrban.state == state).group_by(DistrictCoastalUrban.district).order_by(DistrictCoastalUrban.district.asc())

    data = bar_query.all()

    bar_data = []
    for row in data:
        bar_data.append({
            "name": row[0],
            "area": int(row[1])
        })
    return bar_data

@app.route('/api/projection', methods=['POST'])
def get_projection():
    legend_value = []
    inProj = Proj(init='epsg:3857')
    outProj = Proj(init='epsg:4326')
    extent_value = request.json.get("extent_value")
    year = request.json.get("year")
    print(extent_value)
    if len(extent_value) != 4:
        return jsonify({'message': 'extent value is missing !'}), 400
    x1, y1 = transform(inProj, outProj, extent_value[0], extent_value[1])
    x2, y2 = transform(inProj, outProj, extent_value[2], extent_value[3])
    print(x1, y1, x2, y2)
    data = get_state_extent("p_"+str(year), str(x1), str(y1), str(x2), str(y2))
    return jsonify({"legend_value": data})



def get_state_extent(year, x1, y1, x2, y2):
    conn = psycopg2.connect(
        database=Config.DB_NAME,
        user=Config.DB_USERNAME,
        password=Config.DB_PASSWORD,
        host=Config.DB_HOST,
        port=Config.DB_PORT
    )
    conn.autocommit = True
    cursor = conn.cursor()
    sql = 'select ' + year + ' from district_coastal_urban where geom && ST_MakeEnvelope(%(x1)s,%(y1)s,%(x2)s,%(y2)s) order by ' + year
    cursor.execute(sql, {'x1': x1, 'y1': y1, 'x2': x2, 'y2': y2})
    data = cursor.fetchall()
    np_array = [int(x[0]) for x in data]
    total = len(data)
    min = int(data[0][0])
    max = int(data[-1][0])
    legend_value = []
    legend_value.append(min)
    legend_value.append(int(np.quantile(np_array, .20)))
    legend_value.append(int(np.quantile(np_array, .40)))
    legend_value.append(int(np.quantile(np_array, .60)))
    legend_value.append(int(np.quantile(np_array, .80)))
    legend_value.append(max)
    print(legend_value)
    conn.commit()
    conn.close()
    return legend_value






@app.route('/api/login',methods = ['POST'])
def login():
    username = request.json.get('username')
    password = request.json.get('password')
    user = db.session.query(Users).filter_by(username=username).filter_by(password=password).first()
    if user:
        token = encode_auth_token(user.id)
        user.last_logged_in = datetime.now()
        db.session.commit()
        # return redirect(url_for('main_page'))
        return jsonify({"status": "success", "token": token, "message": "Successfully Logged In"})
    else:
        return jsonify({"status": "failed", "message": "Login Failed"})


@app.route('/api/profile',methods = ['GET'])
@auth
def getprofile(token_data):
    return jsonify({"status": "success"})


@app.route('/api/logout',methods = ['GET'])
@auth
def logout():
    token = request.headers.get("Authorization")
    return jsonify({"status": "success"})

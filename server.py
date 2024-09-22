
from flask import Flask, send_from_directory, render_template, jsonify, request
import os, json
from db import db
from config import Config
from model.coastal import Rainfall
from flask_cors import CORS
import psycopg2
import sqlite3 










app = Flask(__name__, static_folder="static")

    
app.config["SQLALCHEMY_DATABASE_URI"] = Config.SQLALCHEMY_DATABASE_URI
db.init_app(app)

with app.app_context():
   # db.create_all()
    from routes import main


root = os.path.join(os.path.dirname(os.path.abspath(__file__)), "static")

@app.route('/<path:path>', methods=['GET'])
def static_files(path):
    return send_from_directory(root, path)



@app.route('/', methods=['GET'])
def index():
    return send_from_directory(root, 'index.html')

@app.route('/charts', methods=['GET'])
def get_charts():
    return send_from_directory(root, 'charts.html')

@app.route('/table', methods=['GET'])
def get_table():
    return send_from_directory(root,'table.html')

@app.route('/plotly', methods=['GET'])
def get_plotly():
    return send_from_directory(root, 'plotly.html')

@app.route('/chartjs', methods=['GET'])
def get_chartjs():
    return send_from_directory(root, 'chartjs.html')

@app.route('/map', methods=['GET'])
def get_map():
    return send_from_directory(root, 'map.html')


    
   #
# # Route for the main index page
# @app.route('/', methods=['GET'])
# def index():
#
#     return render_template('index.html')
#


# @app.route('/dashboard', methods=['GET'])
# def main_page():
#     print(root)
#     return send_from_directory(root, "sidebar.html") 
    
    
    
  


@app.after_request
def adding_header_content(head):
    head.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    head.headers["Pragma"] = "no-cache"
    head.headers["Expires"] = "0"
    head.headers['Cache-Control'] = 'public, max-age=0'
    return head

if __name__ == "__main__":
    app.run(host=Config.HOST, port=Config.PORT, debug=True, threaded=True)






      


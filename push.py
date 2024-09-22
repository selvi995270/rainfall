import geopandas as gpd
from sqlalchemy import create_engine
import psycopg2
import numpy as np 
import psycopg2.extras as extras 
import pandas as pd 

# Read AutoCAD shapefile into GeoDataFrame using gpd.read_file
gdf = gpd.read_file('C:\\Users\\ASUS\\thazhal\\push\\rainfallen.csv')

# Define PostgreSQL connection parameters
db_connection_url = "postgresql://postgres:postgres@localhost:5000/postgres"

# Create a SQLAlchemy engine
engine = create_engine(db_connection_url)

# Push GeoDataFrame to PostgreSQL
gdf.to_postgis(name='Rainfall', con=engine, if_exists='replace', index=False)

def execute_values(conn, df, table): 
    tuples = [tuple(x) for x in df.to_numpy()] 
    cols = ','.join(list(df.columns)) 

    # SQL query to execute 
    query = f"INSERT INTO {table} ({cols}) VALUES %s"
    
    cursor = conn.cursor() 
    try: 
        extras.execute_values(cursor, query, tuples) 
        conn.commit() 
    except (Exception, psycopg2.DatabaseError) as error: 
        print(f"Error: {error}") 
        conn.rollback() 
        cursor.close() 
        return 1
    print("The dataframe is inserted From rainfallen") 
    cursor.close() 


conn = psycopg2.connect( 
    database="postgres", user='postgres', password='5432', host='localhost', port='5000'
) 

df = pd.read_csv('C:\\Users\\ASUS\\thazhal\\IISC\\static\\js\\rainfallen.csv') 

execute_values(conn, df, 'rainfallen') 


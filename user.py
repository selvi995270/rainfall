from db import db
import datetime

class Users(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), unique=True, nullable=False)
    password = db.Column(db.String(255), nullable=False)
    last_logged_in = db.Column(db.DateTime, nullable=True)
    created_date = db.Column(db.DateTime, default=datetime.datetime.utcnow)

    def __init__(self, username, password, last_logged_in):
        self.username = username
        self.password = password
        self.last_logged_in = last_logged_in
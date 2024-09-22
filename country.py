from db import db


class Country(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    code = db.Column(db.String(50), nullable=False)
    name = db.Column(db.String(50), nullable=False)
    display_name = db.Column(db.String(255), nullable=False)

    def __init__(self, id, name, code, display_name):
        self.id = id
        self.name = name
        self.code = code
        self.display_name = display_name

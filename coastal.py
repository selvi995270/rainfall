from db import db

class Rainfall(db.Model):
    year= db.Column(db.Integer, primary_key=True)
    jan = db.Column(db.Integer, nullable=False)
    feb = db.Column(db.Integer, nullable=False)
    mar = db.Column(db.Integer, nullable=False)
    may = db.Column(db.Integer, nullable=False)
    jun = db.Column(db.Integer, nullable=False)
    jul = db.Column(db.Integer, nullable=False)
    aug = db.Column(db.Integer, nullable=False)
    sep = db.Column(db.Integer, nullable=False)
    oct = db.Column(db.Integer, nullable=False)
    nov = db.Column(db.Integer, nullable=False)
    dec = db.Column(db.Integer, nullable=False)
    ann = db.Column(db.Integer, nullable=False)
    
    
    
    
    
    def __init__(self, year,jan,feb,mar,apr,may,jun,jul,aug,sep,oct,nov,dec,ann ):
        self.year = year
        self.jan = jan
        self.feb=feb
        self.mar=mar
        self.apr=apr
        self.may=may
        self.jun=jun
        self.jul=jul
        self.aug=aug
        self.sep=sep
        self.oct=oct
        self.nov=nov
        self.dec=dec
        self.ann=ann

    def get(self):
        return {
            "year": self.year,
            "jan": self.jan,
            "feb": self.feb,
            "mar": self.mar,
            "apr": self.apr,
            "may": self.may,
            "jun": self.jun,
            "jul": self.jul,
            "aug": self.aug,
            "sep": self.sep,
            "oct": self.oct,
            "nov": self.nov,
            "dec": self.dec,
            "ann": self.ann

        }
    
    @staticmethod
    def get_all(data):
        return [x.get() for x in data]
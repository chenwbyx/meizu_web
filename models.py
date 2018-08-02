from exts import db
import datetime


class Phone(db.Model):
    __tablename__ = "phone"
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(15), nullable=False)
    price = db.Column(db.Integer, nullable=False)
    color = db.Column(db.String(10), nullable=True)
    picture_path = db.Column(db.String(50), nullable=False)
    brand = db.Column(db.String(15), nullable=True) #品牌
    introduction = db.Column(db.String(30), nullable=False)
    is_hot = db.Column(db.Boolean,nullable=False)


class Parts(db.Model):
    __tablename__ = "parts"
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(20), nullable=False)
    price = db.Column(db.Integer, nullable=False)
    picture_path = db.Column(db.String(50), nullable=False)
    introduction = db.Column(db.String(30), nullable=True)
    is_hot = db.Column(db.Boolean, nullable=False)


class Hardware(db.Model):
    __tablename__ = "hardware"
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(20), nullable=False)
    price = db.Column(db.Integer, nullable=False)
    picture_path = db.Column(db.String(50), nullable=False)
    introduction = db.Column(db.String(30), nullable=True)


#手机周边
class Periphery(db.Model):
    __tablename__ = "periphery"
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(20), nullable=False)
    price = db.Column(db.Integer, nullable=False)
    picture_path = db.Column(db.String(50), nullable=False)
    introduction = db.Column(db.String(30), nullable=True)

from flask import Flask,render_template,url_for,session,request,g,redirect,jsonify,Response
from flask_sqlalchemy import SQLAlchemy
from models import Parts,Phone,Hardware,Periphery
from exts import db
import json,urllib,operator,pymysql,config,os
from werkzeug.utils import secure_filename
from sqlalchemy import or_,func

app = Flask(__name__)
app.config.from_object(config)
db = SQLAlchemy(app)
pymysql.install_as_MySQLdb()


@app.route('/')
def index():
    get_information = {
        'get_phone_information': Phone.query.limit(10),
        'get_parts_information': Parts.query.limit(10),
        'get_hardware_information': Hardware.query.limit(10),
        'get_periphery_information': Periphery.query.limit(10),
    }
    return render_template('index.html', **get_information)


if __name__ == '__main__':
    app.run()

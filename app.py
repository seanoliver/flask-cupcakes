"""Flask app for Cupcakes"""
from flask import Flask
from flask_debugtoolbar import DebugToolbarExtension
from models import connect_db, db, Cupcake

import os

app = Flask(__name__)
app.config['SECRET_KEY'] = "oh-so-secret"
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get(
    "DATABASE_URL", "postgresql:///cupcakes")

debug = DebugToolbarExtension(app)

connect_db(app)
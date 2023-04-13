from flask import Flask, send_from_directory
from service import ClientService
import settings
import os

from flask_cors import CORS
  
#Initializing app
app = Flask(__name__)
CORS(app)

#Initializing client service library from ./service.py file. 
# Defining url, username and password parameters. Parameters are imported from settings.py
s = ClientService(
    url=settings.BASEURL,
    username=settings.USERNAME,
    password=settings.PASSWORD)

# Index route for app. 
# <localhost:port>/ or i.e www.examplesite.com/

# Method is sending a template html page from ./static/index.html location
@app.route('/')
def index():
    return send_from_directory('static', 'index.html')

# Patient route for app. 
# <localhost:port>/api/patients or i.e www.examplesite.com/api/patients

# Method is calling Service class all_users method, which fetches all users from external server
@app.route('/api/patients')
def getUsers():
    return s.all_users()


# Single patient route for app. 
# <localhost:port>/api/patients/<patient-id> or i.e www.examplesite.com/api/patients/12345

# getUserById is receiving a <id> parameter directly from the url.
# getUserById method is passing id by calling Service class filter_by_id method
@app.route('/api/patients/<id>')
def getUserById(id):
    return s.filter_by_id(id)


# TODO and TOBEDEFINED
@app.route('/api/diagnoses')
def getDiagnoses():
    return ''

# TODO and TOBEDEFINED
@app.route('/api/diagnoses/:id')
def getDiagnoseById(id):
    return ''
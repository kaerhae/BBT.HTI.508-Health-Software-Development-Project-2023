# BBT.HTI.508-Health-Software-Development-Project-2023
Tampere university Health software development project in 2023


## Get started

To ease up usage and development, create a virtual environment in terminal:

```bash
python -m venv venv
\venv\Scripts\activate
```

After virtual environment is created, install dependencies and requirements to project:

```
pip install -r requirements.txt
```

Create a .flaskenv file inside a flaskr folder. Add at least following parameters to .flaskenv file

```
DEBUG = True
FLASK_ENV = 'development'
FLASK_APP = 'app'
FHIR_BASEURL = 'example.com'
FHIR_USERNAME= 'username'
FHIR_PASSWORD= 'notagoodpassword'
```

After setting environment variables, run ```flask run``` to run flask server. 
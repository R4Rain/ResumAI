from flask import Flask

app = Flask(__name__)

app.config['FILE_UPLOADS'] = 'uploads'
app.config['FILE_NAME'] = '1.pdf'
# API ROUTES
from app import routes


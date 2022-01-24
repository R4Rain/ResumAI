import os
import json
from flask import request, redirect, flash
from werkzeug.utils import secure_filename
from app import app

from app import text_extract
from app import ResumeParser
from app import train_model

ALLOWED_EXTENSIONS = {'pdf'}

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route("/upload-file", methods=['POST', 'GET'])
def upload_file():
    if request.method == 'POST':
        if 'file' not in request.files:
            return {'message': 'No file!'}

        file = request.files['file']
        if file.filename == '':
            return {'message': 'No selected file!'}
        if file and allowed_file(file.filename):
            # Initial Name
            filename = "1.pdf"

            app.config['FILE_NAME'] = filename
            absolutepath = os.path.abspath(__file__)
            fileDirectory = os.path.dirname(os.path.dirname(absolutepath))
            os.chdir(fileDirectory)

            file.save(os.path.join(app.config['FILE_UPLOADS'], filename))
            return {'message': 'File uploaded!'}
        return {'message': 'Error'}
    else:
        filename = app.config['FILE_NAME']
        print(filename)
        if filename:
            text = text_extract.extract_pdf(filename)
            cleaned_text = train_model.preprocess(text)
            # phone = ResumeParser.getPhone(cleaned_text)
            # email = ResumeParser.getEmail(cleaned_text)
            skills = ResumeParser.getSkills(cleaned_text)
            print(skills)
            
            response = {}
            if skills:
                skills_text = ' '.join(skills)
                df_result = train_model.job_matching(skills_text)
                print('Training complete')
                # print(df_result)
                title = [title for title in df_result['Title']]
                score = [round(float(score),3) for score in df_result['Score']]

                response['message'] = 'True'
                response['skill'] = json.dumps(skills)
                response['title'] = json.dumps(title)
                response['score'] = json.dumps(score)

                # print(response)
                return response
            else:
                response['message'] = 'False'
                return response
        else:
            return {'message': 'False'}
        


    
    


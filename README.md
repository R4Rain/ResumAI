## Brief Description
ResumAI is a website that able to recommend a job based on candidate skills or experiences that contain in their resume.

## Features
- Job Recommender.
- Login, Signup, Logout with Firebase Auth.
- Cloud Storage with Firebase Storage to store user resumes.

## How our A.I works
- Extract Skills or experiences on their resume by using spacy NLP NER (Named Entity Recognition).
- Convert bunch of skills to TF-IDF vector.
- Use KNN algorithm to do similarity matching with the provided datasets.
- Recommend and display the jobs based on the KNN result.

## Run Project
- Install react
- Config Firebase in firebase.js
- Install all python packages in requirement.txt

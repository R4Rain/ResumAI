import os
import fitz

def extract_pdf(filepath):
    absolutepath = os.path.abspath(__file__)
    fileDirectory = os.path.dirname(os.path.dirname(absolutepath))
    path = os.path.join(fileDirectory, 'uploads')

    os.chdir(path)
    text = ''
    with fitz.open(filepath) as doc:
        for page in doc:
            text += page.get_text()
    # print(text)
    return text






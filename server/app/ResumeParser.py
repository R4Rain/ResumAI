import nltk, re
import os

# nltk.download('wordnet')
# nltk.download('stopwords')
# nltk.download('punkt')
# nltk.download('averaged_perceptron_tagger')
# nltk.download('maxent_ne_chunker')
# nltk.download('words')

from nltk.corpus import stopwords
import spacy
from spacy.matcher import Matcher

stop = stopwords.words('english')

nlp = spacy.load("en_core_web_sm")
absolutepath = os.path.abspath(__file__)
fileDirectory = os.path.dirname(os.path.dirname(absolutepath))
file_path = os.path.join(fileDirectory, 'datasets')
os.chdir(file_path)

skill_pattern_path = "jz_skill_patterns.jsonl"

ruler = nlp.add_pipe("entity_ruler")
ruler.from_disk(skill_pattern_path)

def getEmail(text):
    email = None
    try:
        pattern = re.compile(r'\S*@\S*')
        matches = pattern.findall(text)
        email = matches
    except Exception as e:
        print('error ', e)

    return email


def getPhone(text):
    number = None
    try:
        pattern = re.compile(r'([+(]?\d+[)\-]?[ \t\r\f\v]*[(]?\d{2,}[()\-]?[ \t\r\f\v]*\d{2,}[()\-]?[ \t\r\f\v]*\d*[ \t\r\f\v]*\d*[ \t\r\f\v]*)')

        match = pattern.findall(text)
        match = [re.sub(r'[,.]', '', element) for element in match if len(re.sub(r'[()\-.,\s+]', '', element))>6]
        match = [re.sub(r'\D$', '', element).strip() for element in match]
        match = [element for element in match if len(re.sub(r'\D','',element)) <= 15]

        try:
            for element in list(match):
                if len(element.split('-')) > 3: continue 
                for x in element.split('-'):
                    try:
                        if x.strip()[-4:].isdigit():
                            if int(x.strip()[-4:]) in range(1900, 2100):
                                match.remove(element)
                    except:
                        pass
        except:
            pass
        number = match
    except:
        pass
    return number

def getName(text):
    text = ' '.join([i for i in text.split() if i not in stop])
    sentences = nltk.sent_tokenize(text)
    sentences = [nltk.word_tokenize(i) for i in sentences]
    sentences = [nltk.pos_tag(i) for i in sentences]

    names = []
    for tagged_sentence in sentences:
        for chunk in nltk.ne_chunk(tagged_sentence):
            if type(chunk) == nltk.tree.Tree:
                if chunk.label() == 'PERSON':
                    names.append(' '.join([c[0] for c in chunk]))
    return names
            


def getSkills(text):
    doc = nlp(text)
    skills = []
    for ent in doc.ents:
        if ent.label_ == "SKILL":
            skills.append(ent.text.lower())

    skills = list(set(skills))
    return skills
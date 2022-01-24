import os
import pandas as pd

from nltk.corpus import stopwords
import re
import string
from nltk.stem import WordNetLemmatizer
from nltk import word_tokenize
from nltk.corpus import stopwords

stop = stopwords.words('english')
stop_words = set(stopwords.words('english'))
wn = WordNetLemmatizer()

from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.neighbors import NearestNeighbors

absolutepath = os.path.abspath(__file__)
fileDirectory = os.path.dirname(os.path.dirname(absolutepath))
path = os.path.join(fileDirectory, 'datasets')
os.chdir(path)



df_all = pd.read_csv('joblist.csv')
df_all['text']=df_all['text'].fillna(df_all['Title'])

tfidf_vectorizer = TfidfVectorizer()
tfidf_jobid = tfidf_vectorizer.fit_transform((df_all['text']))

KNN = NearestNeighbors(n_neighbors=11, p =2)

def text_valid(token):
  return token not in stop_words and token not in list(string.punctuation) and len(token) > 2

def preprocess(text):
  result1 = []
  result2 = []
  text = re.sub("'", "",text)
  text = re.sub("(\\d|\\W)+"," ",text)
  result1 = [wn.lemmatize(word, pos="v") for word in word_tokenize(text.lower()) if text_valid(word)]
  result2 = [word for word in result1 if text_valid(word)]
 
  return " ".join(result2)

def get_recommendation(top, list_scores):
  recommendation = pd.DataFrame(columns = ['Title', 'Score'])
  count = 0
  for i in top:
      recommendation.at[count, 'Title'] = df_all['Title'][i]
      recommendation.at[count, 'Score'] =  list_scores[count]
      count += 1
  return recommendation

def job_matching(text):
    user = pd.DataFrame([text], columns=['text'])
    
    user_tfidf = tfidf_vectorizer.transform(user['text'])

    KNN.fit(tfidf_jobid)
    NNs = KNN.kneighbors(user_tfidf, return_distance=True)
    top = NNs[1][0][1:]
    index_scores = NNs[0][0][1:]

    return get_recommendation(top, index_scores)

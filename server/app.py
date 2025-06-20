from flask.wrappers import Request
from models.load import load_models
from flask import Flask, json, jsonify, request
from flask_cors import CORS


#import pyspark
#from pyspark.sql import SQLContext
import numpy as np

app = Flask(__name__)

app.config['CORS_HEADERS'] = 'Content-Type'
app = Flask(__name__)
CORS(app)
app.run(host='0.0.0.0')

#sc = pyspark.SparkContext(appName="AJMR")
#sqlContext = SQLContext(sc)
#df = sqlContext.read.option("header",True).csv('@app.route('/data')

models = load_models()

@app.route('/')
def hello_world():
    return "working"

@app.route('/data/all-age')
def age_range():
    model = models[request.args.get('model')]
    race = request.args.get('race')
    sex = sex_param[request.args.get('sex')]
    res = [build_response(sex, race, age, model) for age in age_param]
    res = jsonify([{"id": str(race_labels[race]) + str(sex),
    'data' : res}])
    res.headers.add('Access-Control-Allow-Origin', '*')
    return res



sex_param = {
    'male': 1,
    'female': 2,
}

race_param = {
    'wn' : 1, #'White, Non-Hispanic'
    'hl' : 2, #'Hispanic/Latino'
    'bn' : 3, #'Black, Non-Hispanic'
    'an' : 4, #'Asian, Non-Hispanic'
    'mo' : 5, #'Multiple/Other, Non-Hispanic'
    'hn' : 6, #'Native Hawaiian/Other Pacific Islander, Non-Hispanic'
    'nn' : 7, #'American Indian/Alaska Native, Non-Hispanic'
}

race_labels = {
    'wn' : 'White, Non-Hispanic',
    'hl' : 'Hispanic/Latino',
    'bn' : 'Black, Non-Hispanic',
    'an' : 'Asian, Non-Hispanic',
    'mo' : 'Multiple/Other, Non-Hispanic',
    'hn' : 'Native Hawaiian/Other Pacific Islander, Non-Hispanic',
    'nn' : 'American Indian/Alaska Native, Non-Hispanic',
}

age_labels = {
    '20' : '20-29',
    '30' : '30-39',
    '40' : '40-49',
    '50' : '50-59',
    '60' : '60 -69',
    '70' : '70-79',
    '80' : '80+'
}

age_param = {
    '20' : 3,
    '30' : 4,
    '40' : 5,
    '50' : 6,
    '60' : 7,
    '70' : 8,
    '80' : 9
}

def build_response(sex, race, age, model):
    prob = model(np.array([[sex,age_param[age],race_param[race]]]))
    res = {
        'pdeath' : prob[0][1],
        'plife' : prob[0][0],
        'sex' : sex,
        'race' : race,
        'age' : age_param[age],
        'y' : prob[0][1]*100,
        'x' : age_labels[age],
    }
    return res
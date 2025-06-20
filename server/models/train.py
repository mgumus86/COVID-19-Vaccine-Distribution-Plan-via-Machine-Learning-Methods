
import pandas as pd
from scipy.sparse.construct import random
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from joblib import dump
from sklearn.naive_bayes import GaussianNB
from sklearn.linear_model import LogisticRegression

def random_forest(X_train, y_train):
    print("Training random forest",)
    clf = RandomForestClassifier(n_estimators=200)
    clf.fit(X_train,y_train)
    dump(clf, 'RandomForest')
    print("Complete")


def naive_bayes(X_train, y_train):
    print("Training naive_bayes")
    gnb = GaussianNB()
    gnb.fit(X_train, y_train)
    dump(gnb, 'NaiveBayes')
    print("Complete")


def logistic_regressoin(X_train, y_train):
    print("Training logistic regression", flush=True)
    lr = LogisticRegression(random_state = 0)
    lr.fit(X_train,y_train)
    dump(lr, 'LogisticRegression')   
    print("Complete")

print('Loading data...')
url = "https://data.cdc.gov/resource/vbim-akqf.json?$query=select%20sex,%20age_group,%20race_ethnicity_combined,death_yn%20WHERE%20(sex=%27Male%27%20OR%20sex=%27Female%27)%20AND%20(age_group%20!=%20%27Missing%27%20AND%20age_group%20!=%20%27NA%27)%20AND%20(race_ethnicity_combined%20%3C%3E%20%27Unknown%27%20AND%20race_ethnicity_combined%20%3C%3E%20%27NA%27%20AND%20race_ethnicity_combined%20%3C%3E%20%27Missing%27)%20AND%20(death_yn%20%3C%3E%20%22Missing%22%20AND%20death_yn%20%3C%3E%20%22Unknown%22)%20LIMIT%2030000000"
df = pd.read_json(url)
print('Loading complete')
df2 = df.copy()
df2.replace(to_replace = ['Male', 'Female'], value = [1,2], inplace = True)
age_group = ['0 - 9 Years', '10 - 19 Years', '20 - 29 Years', '30 - 39 Years', '40 - 49 Years','50 - 59 Years','60 - 69 Years', '70 - 79 Years', '80+ Years']
age_number = [1,2,3,4,5,6,7,8,9]
df2.replace(to_replace = age_group, value = age_number, inplace = True)
race_ethinicity = ['White, Non-Hispanic', 'Hispanic/Latino', 'Black, Non-Hispanic', 'Asian, Non-Hispanic', 'Multiple/Other, Non-Hispanic','Native Hawaiian/Other Pacific Islander, Non-Hispanic','American Indian/Alaska Native, Non-Hispanic']
race_number = [1,2,3,4,5,6,7]
df2.replace(to_replace = race_ethinicity, value = race_number, inplace = True)
df2.replace(to_replace = ['No', 'Yes'], value = [0,1], inplace = True)
X = df2.iloc[:, 0:3].values
y = df2.iloc[:, 3].values
X_train_val, X_test, y_train_val, y_test = train_test_split(X, y, test_size=0.2, random_state=0)
X_train, X_val, y_train, y_val = train_test_split(X_train_val, y_train_val, test_size=0.25, random_state=0)
random_forest(X_train, y_train)
naive_bayes(X_train, y_train)
logistic_regressoin(X_train, y_train)



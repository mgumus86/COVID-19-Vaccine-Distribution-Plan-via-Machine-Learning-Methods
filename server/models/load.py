from joblib import load


def load_models():
    rf_clf = load('./models/RandomForest')
    nb_gnb = load('./models/NaiveBayes')
    lr = load('./models/LogisticRegression')
    return {
        'random-forest' : rf_clf.predict_proba,
        'naive-bayes': nb_gnb.predict_proba,
        'logistic-regression': lr.predict_proba,
    }
# Optimizing COVID-19 Vaccine Distribution in the U.S. (Based on 2021 - 2022)

This project presents a data-driven approach to optimize vaccine allocation across U.S. states to minimize COVID-19 mortality. By leveraging demographic data (age, sex, ethnicity) and historical death rates, we build a machine learning model that proposes a more effective vaccine distribution strategy than existing guidelines.

Developed as a final project for ISyE 6740 (Computational Data Analytics) at Georgia Tech.

---

## 🎯 Objectives

- Estimate COVID-19 death probability per demographic group using CDC data.
- Compute each U.S. state’s cumulative death risk by combining demographic risk and population.
- Compare the proposed optimized allocation with the real-world allocation using a random forest model.
- Demonstrate the effectiveness of data-informed distribution strategies.

---

## 🧠 Methodology

### Step 1: Predict Death Probability by Demographics
- Cleaned and processed >600k entries from CDC Surveillance data.
- Applied:
  - Random Forest (AUC = 0.9185, Accuracy = 95.51%)
  - Logistic Regression
  - Naive Bayes
- Selected Random Forest for best performance.

### Step 2: Rank States by Risk
- Used U.S. Census 2019 population data.
- Estimated expected deaths for each demographic group in each state.
- Ranked states by cumulative risk (assuming no mitigation).

### Step 3: Simulate and Compare Allocation Strategies
- Built Random Forest model to estimate death outcomes based on vaccine allocation per state.
- Compared actual CDC-guided plan vs. our risk-prioritized proposal using weekly death counts.

---

## 📊 Results

- **Projected deaths avoided:** ~3,017 fewer deaths (2.7% improvement).
- **High-risk group:** Hispanic/Latino males, 80+ (55% death probability).
- **Top high-risk state:** Florida, with ~6.98% projected mortality if unvaccinated.


## 🚀 Getting Started

This section provides a step-by-step guide to set up the project locally, train machine learning models, and launch the full web dashboard.

---

### 🔧 Prerequisites

Make sure you have the following installed:

- Python 3.x  
- pip (Python package manager)  
- Node.js and npm (for the frontend)  
- Git (for cloning the repository)  

You can install them on macOS using:

```bash
brew install python node git
```

---

## 📁 Clone the Repository

```bash
git clone https://github.com/mgumus86/COVID-19-Vaccine-Distribution-Plan-via-Machine-Learning-Methods.git
cd COVID-19-Vaccine-Distribution-Plan-via-Machine-Learning-Methods
```

---



## 🧠 Step 1: Train the Machine Learning Models
Navigate to the model training directory:

```bash
cd server/models
python train.py
```

This script will train three models: Random Forest, Naive Bayes, and Logistic Regression

Save them as .sav files for use by the backend

---


## 🔁 Step 2: Start the Flask Backend
After training is complete, start the backend:

```bash
cd ..
export FLASK_APP=app.py      # Use 'set FLASK_APP=app.py' on Windows
flask run
```

The backend will be available at:

http://127.0.0.1:5000/
✅ Test it in your browser:

http://127.0.0.1:5000/data/all-age?model=naive-bayes&sex=male&race=bn
You should see a JSON response.

---


🌐 Step 3: Start the React Frontend
In a new terminal window:

```bash
cd frontend/ajmr
npm install      # Only needed the first time
npm start
```

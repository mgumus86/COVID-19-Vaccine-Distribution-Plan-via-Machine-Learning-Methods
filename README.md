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






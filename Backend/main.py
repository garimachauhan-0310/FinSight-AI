from fastapi import FastAPI
from Logic.recommender import recommend_portfolio
from Logic.explainability import explain
app = FastAPI()
@app.post("/recommend")
def recommend(profile: dict):
    allocation = recommend_portfolio(profile)
    explanation = explain(profile, allocation)
    return {
        "allocation": allocation,
        "explanation": explanation,
        "confidence_score": 92
    }
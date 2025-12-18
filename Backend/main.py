from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from schemas import RecommendationRequest
from Logic.recommender import get_portfolio_recommendation

app = FastAPI(title="FinSight AI Backend")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/health")
def health():
    return {"status": "ok"}

@app.post("/recommend")
def recommend(data: RecommendationRequest):
    return get_portfolio_recommendation(
        data.age,
        data.risk_score,
        data.time_horizon
    )

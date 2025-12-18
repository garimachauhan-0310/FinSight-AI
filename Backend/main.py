from database import engine
from models import Base
from simulations import monte_carlo_simulation

Base.metadata.create_all(bind=engine)

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from schemas import RecommendationRequest, RecommendationResponse
from Logic.recommender import get_portfolio_recommendation
from Logic.explainability import explain

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

from database import SessionLocal
from models import Recommendation

@app.post("/recommend", response_model=RecommendationResponse)
def recommend(data: RecommendationRequest):

    result = get_portfolio_recommendation(
        data.age,
        data.risk_score,
        data.time_horizon
    )

    simulation = monte_carlo_simulation(
    initial_investment=100000,  # ₹1L default
    expected_return=result["expected_return"],
    volatility=result["volatility"],
    years=data.time_horizon
    )


    explanation = explain(
        data.age,
        data.risk_score,
        data.time_horizon,
        result["equity"]
    )

    db = SessionLocal()

    record = Recommendation(
        age=data.age,
        risk_score=data.risk_score,
        time_horizon=data.time_horizon,
        equity=result["equity"],
        debt=result["debt"],
        cash=result["cash"],
        expected_return=result["expected_return"],
        volatility=result["volatility"],
        risk_level=result["risk_level"]
    )

    db.add(record)
    db.commit()
    db.refresh(record)
    db.close()

    return {
        "allocation": {
            "equity": result["equity"],
            "debt": result["debt"],
            "cash": result["cash"],
        },
        "expected_return": result["expected_return"],
        "volatility": result["volatility"],
        "risk_level": result["risk_level"],
        "explanation": explanation,
        "simulation": simulation
    }
@app.get("/history")
def get_history():
    db = SessionLocal()
    records = db.query(Recommendation).all()
    db.close()
    return records

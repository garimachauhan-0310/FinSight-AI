from pydantic import BaseModel

class RecommendationRequest(BaseModel):
    age: int
    risk_score: int
    time_horizon: int

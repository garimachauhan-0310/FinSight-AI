from pydantic import BaseModel

class RecommendationRequest(BaseModel):
    age: int
    risk_score: int  # 1–10
    time_horizon: int  # years


class PortfolioAllocation(BaseModel):
    equity: int
    debt: int
    cash: int


class RecommendationResponse(BaseModel):
    allocation: PortfolioAllocation
    expected_return: float
    volatility: float
    risk_level: str
    explanation: str

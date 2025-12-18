from pydantic import BaseModel

class RecommendationRequest(BaseModel):
    age: int
    risk_score: int  # 1–10
    time_horizon: int  # years


class PortfolioAllocation(BaseModel):
    equity: int
    debt: int
    cash: int

class SimulationResult(BaseModel):
    median: float
    best_case: float
    worst_case: float
    probability_of_loss: float

class RecommendationResponse(BaseModel):
    allocation: PortfolioAllocation
    expected_return: float
    volatility: float
    risk_level: str
    explanation: str
    simulation: SimulationResult

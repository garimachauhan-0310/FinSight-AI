from sqlalchemy import Column, Integer, Float, String, DateTime
from datetime import datetime
from database import Base

class Recommendation(Base):
    __tablename__ = "recommendations"

    id = Column(Integer, primary_key=True, index=True)

    age = Column(Integer)
    risk_score = Column(Integer)
    time_horizon = Column(Integer)

    equity = Column(Integer)
    debt = Column(Integer)
    cash = Column(Integer)

    expected_return = Column(Float)
    volatility = Column(Float)
    risk_level = Column(String)

    created_at = Column(DateTime, default=datetime.utcnow)

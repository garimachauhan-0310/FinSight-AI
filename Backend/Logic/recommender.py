# backend/logic/recommendation.py

def get_portfolio_recommendation(age: int, risk_score: int, time_horizon: int):
    """
    Rule-based, explainable portfolio recommendation logic.
    """

    # Equity allocation logic
    equity = min(70, max(30, risk_score * 6 + time_horizon))

    # Adjust for short time horizon
    if time_horizon < 3:
        equity -= 10

    equity = max(20, min(equity, 80))

    debt = max(15, 100 - equity - 10)
    cash = 100 - equity - debt

    # Risk metrics (simple assumptions)
    expected_return = (equity * 0.11 + debt * 0.06 + cash * 0.03) / 100
    volatility = 5 + risk_score * 0.9

    risk_level = (
        "Low" if risk_score <= 3
        else "Moderate" if risk_score <= 6
        else "High"
    )

    return {
        "equity": equity,
        "debt": debt,
        "cash": cash,
        "expected_return": expected_return,
        "volatility": volatility,
        "risk_level": risk_level,
    }

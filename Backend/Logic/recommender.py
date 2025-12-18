from market_data import get_equity_metrics

def get_portfolio_recommendation(age: int, risk_score: int, time_horizon: int):

    if not (1 <= risk_score <= 10):
        raise ValueError("Risk score must be between 1 and 10")

    equity = min(70, max(30, risk_score * 6 + time_horizon))

    if time_horizon < 3:
        equity -= 10

    equity = max(20, min(equity, 80))

    debt = max(15, 100 - equity - 10)
    cash = 100 - equity - debt

    # 🔥 Real market data
    equity_return, equity_vol = get_equity_metrics()

    expected_return = (
        equity * equity_return +
        debt * 0.06 +
        cash * 0.03
    ) / 100

    volatility = equity_vol * (equity / 100)

    risk_level = (
        "Low" if risk_score <= 3
        else "Moderate" if risk_score <= 6
        else "High"
    )

    return {
        "equity": equity,
        "debt": debt,
        "cash": cash,
        "expected_return": round(expected_return, 4),
        "volatility": round(volatility, 4),
        "risk_level": risk_level,
    }

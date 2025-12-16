def recommend_portfolio(profile):
    risk = profile["risk"]
    time = profile["time_horizon"]
    equity = 60 if risk == "moderate" else 30 if risk == "low" else 80
    if time < 3:
        equity -= 10
    return {
        "equity": equity,
        "debt": 100 - equity - 10,
        "cash": 10
    }
def explain(age, risk_score, time_horizon, equity):
    return (
        f"Based on your age ({age}), investment horizon ({time_horizon} years), "
        f"and risk score ({risk_score}/10), we allocated {equity}% to equity "
        f"to balance growth potential with risk."
    )

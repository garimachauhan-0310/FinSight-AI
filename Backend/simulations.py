import numpy as np

def monte_carlo_simulation(
    initial_investment: float,
    expected_return: float,
    volatility: float,
    years: int,
    simulations: int = 1000
):
    """
    Monte Carlo simulation using Geometric Brownian Motion
    """

    results = []

    for _ in range(simulations):
        value = initial_investment
        for _ in range(years):
            annual_return = np.random.normal(expected_return, volatility)
            value *= (1 + annual_return)
        results.append(value)

    results = np.array(results)

    return {
        "median": round(np.percentile(results, 50), 2),
        "best_case": round(np.percentile(results, 90), 2),
        "worst_case": round(np.percentile(results, 10), 2),
        "probability_of_loss": round(
            float(np.mean(results < initial_investment)), 2
        )
    }

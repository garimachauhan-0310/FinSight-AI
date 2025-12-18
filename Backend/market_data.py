import yfinance as yf
import numpy as np

def get_equity_metrics(ticker="^NSEI", period="5y"):
    """
    Fetch historical data and compute return & volatility.
    Default: NIFTY 50 (India-friendly)
    """
    try:
        data = yf.download(ticker, period=period, progress=False)

        data["returns"] = data["Adj Close"].pct_change()

        mean_return = data["returns"].mean() * 252
        volatility = data["returns"].std() * np.sqrt(252)

        return round(mean_return, 4), round(volatility, 4)
    except Exception:
        # Fallback values
        return 0.11, 0.18

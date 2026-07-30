from dataclasses import dataclass
from typing import Dict


@dataclass
class PortfolioAnalysis:
    ai_exposure: float
    risk_level: str
    dominant_theme: str


def analyze_portfolio(holdings: Dict[str, float]) -> PortfolioAnalysis:
    ai_exposure = min(sum(holdings.values()) * 100, 100)
    risk_level = "High" if len(holdings) < 3 else "Medium"

    return PortfolioAnalysis(
        ai_exposure=round(ai_exposure, 2),
        risk_level=risk_level,
        dominant_theme="AI Infrastructure",
    )

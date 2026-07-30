"""Finaily Theme Intelligence Engine.

Focuses on discovering investment themes instead of providing real-time prices.
"""

from dataclasses import dataclass
from typing import List


@dataclass
class ThemeSignal:
    name: str
    opportunity: str
    companies: List[str]
    thesis: List[str]


def analyze_theme(theme: str) -> ThemeSignal:
    themes = {
        "ai-semiconductor": ThemeSignal(
            name="AI Semiconductor",
            opportunity="High",
            companies=["NVDA", "TSM", "ASML", "AMD"],
            thesis=[
                "AI compute demand continues to expand",
                "Advanced chips remain strategic infrastructure"
            ],
        ),
        "cloud-ai": ThemeSignal(
            name="Cloud AI",
            opportunity="High",
            companies=["MSFT", "GOOGL", "AMZN"],
            thesis=[
                "AI workloads are moving to cloud platforms"
            ],
        ),
    }

    return themes.get(
        theme,
        ThemeSignal(theme, "Research Needed", [], [])
    )

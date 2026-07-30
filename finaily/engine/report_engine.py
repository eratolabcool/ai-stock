"""
Finaily Research Report Engine

Transforms company intelligence, themes and scores into structured research reports.
"""

from dataclasses import dataclass
from typing import List, Dict


@dataclass
class ResearchReport:
    title: str
    summary: str
    themes: List[str]
    companies: List[str]
    risks: List[str]


def generate_company_report(company: Dict) -> ResearchReport:
    return ResearchReport(
        title=f"{company.get('name')} AI Investment Research",
        summary="AI-powered analysis generated from Finaily intelligence data.",
        themes=[company.get("theme", "AI")],
        companies=[company.get("symbol", "")],
        risks=company.get("risks", []),
    )


def generate_theme_report(theme: Dict) -> ResearchReport:
    return ResearchReport(
        title=f"{theme.get('name')} Market Outlook",
        summary=theme.get("description", "AI market theme analysis."),
        themes=[theme.get("slug", "")],
        companies=theme.get("companies", []),
        risks=theme.get("risks", []),
    )

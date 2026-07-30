"""Finaily news ingestion pipeline placeholder.

The production version will connect news providers, classify AI finance signals,
and store normalized market intelligence records.
"""

from dataclasses import dataclass


@dataclass
class NewsSignal:
    title: str
    theme: str
    impact: str


def classify_news(title: str) -> NewsSignal:
    return NewsSignal(
        title=title,
        theme="AI Infrastructure",
        impact="medium",
    )


if __name__ == "__main__":
    print(classify_news("AI semiconductor market update"))

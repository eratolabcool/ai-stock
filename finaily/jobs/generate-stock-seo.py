"""
Finaily Stock SEO Generator

Transforms company intelligence records into SEO-ready research page data.
"""

import json
from pathlib import Path

BASE = Path(__file__).resolve().parents[1]


def load_companies():
    path = BASE / "database" / "companies.json"
    if not path.exists():
        return []
    return json.loads(path.read_text())


def generate_stock_page(company):
    symbol = company.get("symbol", "").lower()
    return {
        "slug": f"{symbol}-ai-stock",
        "title": f"{company.get('name')} AI Stock Research | Finaily",
        "symbol": company.get("symbol"),
        "theme": company.get("theme"),
        "score": company.get("finailyScore"),
        "thesis": company.get("thesis", []),
        "risks": company.get("risks", []),
    }


if __name__ == "__main__":
    pages = [generate_stock_page(c) for c in load_companies()]
    output = BASE / "database" / "generated-stock-pages.json"
    output.write_text(json.dumps(pages, indent=2))
    print(f"Generated {len(pages)} stock SEO pages")

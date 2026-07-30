"""
Finaily Theme SEO Generator

Creates SEO page metadata from investment theme intelligence.
"""

import json
from pathlib import Path

BASE = Path(__file__).resolve().parents[1]


def load_themes():
    path = BASE / "database" / "themes.json"
    if not path.exists():
        return []
    return json.loads(path.read_text())


def generate_theme_page(theme):
    slug = theme.get("slug") or theme.get("name", "theme").lower().replace(" ", "-")
    return {
        "slug": slug,
        "title": f"{theme.get('name')} Investment Theme | Finaily",
        "companies": theme.get("companies", []),
        "opportunity": theme.get("opportunity"),
        "thesis": theme.get("thesis", []),
        "risks": theme.get("risks", []),
    }


if __name__ == "__main__":
    pages = [generate_theme_page(t) for t in load_themes()]
    output = BASE / "database" / "generated-theme-pages.json"
    output.write_text(json.dumps(pages, indent=2))
    print(f"Generated {len(pages)} theme SEO pages")

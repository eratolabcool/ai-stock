"""Generate SEO stock research page payloads for Finaily."""

from pathlib import Path
import json

stocks = [
    {"symbol": "NVDA", "slug": "nvidia-ai-stock", "title": "NVIDIA AI Stock Research"},
    {"symbol": "MSFT", "slug": "microsoft-ai-stock", "title": "Microsoft AI Stock Research"},
    {"symbol": "TSM", "slug": "tsmc-ai-stock", "title": "TSMC AI Semiconductor Research"},
]

output = Path("generated-stock-pages.json")
output.write_text(json.dumps(stocks, indent=2), encoding="utf-8")

print(f"Generated {len(stocks)} Finaily SEO stock pages")

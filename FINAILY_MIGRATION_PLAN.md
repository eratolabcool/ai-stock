# Finaily V1 Migration Plan

## Vision

Transform ai-stock-pool into Finaily: an AI-powered investing intelligence platform.

## Preserve

- discovery_engine.py
- policy_engine.py
- stock-pool.csv
- existing API data logic

## New Architecture

Frontend:
- Next.js 16 App Router
- React Server Components
- Tailwind CSS
- next-intl multilingual SEO

Backend:
- PostgreSQL
- Prisma ORM
- scheduled data ingestion

Automation:
- daily stock update
- news crawling
- AI market summaries
- SEO page generation

## Product Modules

1. AI Stock Research Pages
2. AI Theme Tracker
3. Daily Market Intelligence
4. Portfolio Analyzer
5. Finance Tools

## Migration Strategy

Phase 1: create Next.js application shell while keeping original research engines untouched.

Phase 2: migrate CSV and API data into PostgreSQL.

Phase 3: build SEO pages and AI content pipeline.

Phase 4: launch finaily.net.

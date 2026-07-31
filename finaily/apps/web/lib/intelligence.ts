import companies from '../../../database/companies.json';

export type CompanyIntelligence = {
  symbol: string;
  name: string;
  theme: string;
  finailyScore: number;
  thesis: string[];
  risks: string[];
};

export function getCompanies(): CompanyIntelligence[] {
  return (companies as CompanyIntelligence[]).sort(
    (a, b) => b.finailyScore - a.finailyScore
  );
}

export function getCompanyBySymbol(symbol: string) {
  return getCompanies().find(
    (company) => company.symbol.toLowerCase() === symbol.toLowerCase()
  );
}

export function getTopCompanies(limit = 5) {
  return getCompanies().slice(0, limit);
}

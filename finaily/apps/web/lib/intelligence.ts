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
  return companies as CompanyIntelligence[];
}

export function getCompanyBySymbol(symbol: string) {
  return getCompanies().find(
    (company) => company.symbol.toLowerCase() === symbol.toLowerCase()
  );
}

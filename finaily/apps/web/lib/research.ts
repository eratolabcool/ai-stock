import companies from "../../../database/companies.json";
import themes from "../../../database/themes.json";
import reports from "../../../database/reports.json";

export function getCompanies() {
  return companies;
}

export function getCompany(symbol: string) {
  return companies.find(
    (company) => company.symbol.toLowerCase() === symbol.toLowerCase()
  );
}

export const getCompanyBySymbol = getCompany;

export function getThemes() {
  return themes;
}

export function getReports() {
  return reports;
}

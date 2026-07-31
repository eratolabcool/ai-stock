import { getCompanies } from "./research";

export function getRankedStocks() {
  return [...getCompanies()].sort((a, b) => {
    return (b.score ?? 0) - (a.score ?? 0);
  });
}

export function getStockBySymbol(symbol: string) {
  return getCompanies().find(
    (company) => company.symbol.toLowerCase() === symbol.toLowerCase()
  );
}

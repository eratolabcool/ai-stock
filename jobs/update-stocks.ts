/**
 * Daily stock synchronization job.
 *
 * Planned flow:
 * market data provider
 * -> normalize symbols
 * -> update PostgreSQL stocks table
 * -> refresh Finaily research pages
 */

export async function updateStocks() {
  console.log('Updating Finaily stock database...')
}

if (require.main === module) {
  updateStocks()
}

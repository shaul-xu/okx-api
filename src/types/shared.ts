export interface APICredentials {
  apiKey: string;
  apiSecret: string;
  apiPass: string;
}

/**
 * The API Market represents the OKX Domain that you have signed up for. At this time, there are 3 supported domain groups:
 *
 * - GLOBAL, OKX Global (REST: openapi.okx.com; www.okx.com also works).
 * - EEA, otherwise known as "my.okx.com".
 * - US, otherwise known as "app.okx.com".
 */
export type APIMarket =
  | 'prod' // same as GLOBAL. Kept for some backwards compatibility
  // OKX Global REST: https://openapi.okx.com (recommended). www.okx.com remains supported.
  | 'GLOBAL'
  // also known as "my.okx.com" https://my.okx.com/docs-v5/en/#overview-production-trading-services
  | 'EEA'
  // also known as "app.okx.com" https://app.okx.com/docs-v5/en/#overview-production-trading-services
  | 'US';

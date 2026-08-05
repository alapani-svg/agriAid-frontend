/** Platform roles — single source for app shell. */
export const PLATFORM_ROLES = [
  "farmer",
  "warehouse",
  "lender",
  "buyer",
  "government",
  "admin",
] as const;

export type PlatformRole = (typeof PLATFORM_ROLES)[number];

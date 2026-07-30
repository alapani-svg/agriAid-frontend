export type PlatformRole =
  | "farmer"
  | "lender"
  | "warehouse"
  | "buyer"
  | "government";

export const ROLE_OPTIONS: { value: PlatformRole; label: string; needsCode: boolean }[] = [
  { value: "farmer", label: "Farmer / CIG", needsCode: false },
  { value: "lender", label: "Financing institution", needsCode: true },
  { value: "warehouse", label: "Warehouse manager", needsCode: true },
  { value: "buyer", label: "Buyer / trader", needsCode: false },
  { value: "government", label: "Government body", needsCode: true },
];

export const REGION_OPTIONS = [
  "Adamawa",
  "Centre",
  "East",
  "Far North",
  "Littoral",
  "North",
  "North-West",
  "South",
  "South-West",
  "West",
] as const;

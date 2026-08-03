import type { AuthUser } from "../api/authApi";

export type AppRole =
  | "farmer"
  | "warehouse"
  | "lender"
  | "buyer"
  | "government"
  | "admin";

const ROLE_HOME: Record<string, string> = {
  farmer: "/operations",
  warehouse: "/dashboard/warehouse",
  lender: "/dashboard/lender",
  buyer: "/dashboard/buyer",
  government: "/dashboard/government",
  admin: "/dashboard/admin",
};

/** Normalize role string from API / localStorage. */
export function normalizeRole(role?: string | null): AppRole {
  const r = (role || "farmer").toLowerCase().trim();
  if (r in ROLE_HOME) return r as AppRole;
  return "farmer";
}

export function homePathForRole(role?: string | null): string {
  return ROLE_HOME[normalizeRole(role)];
}

export function homePathForUser(user: Pick<AuthUser, "role"> | null | undefined): string {
  return homePathForRole(user?.role);
}

export const ROLE_DASHBOARD_META: Record<
  string,
  { title: string; subtitle: string; modules: string[] }
> = {
  farmer: {
    title: "Farmer operations",
    subtitle: "Document harvests, track stock, build credibility.",
    modules: ["Profile", "Harvests", "Stock ledger", "Credibility score (soon)"],
  },
  warehouse: {
    title: "Warehouse console",
    subtitle: "Deposits, capacity, and digital receipts.",
    modules: [
      "Warehouse registration",
      "Incoming / outgoing inventory",
      "Digital QR receipts",
      "Capacity alerts",
    ],
  },
  lender: {
    title: "Financing institution",
    subtitle: "Review scores, collateral receipts, and loan dossiers.",
    modules: [
      "Loan review queue",
      "Credibility score lookup",
      "Receipt collateral check",
      "Repayment tracking",
    ],
  },
  buyer: {
    title: "Buyer & trader portal",
    subtitle: "Browse verified produce and manage purchase orders.",
    modules: [
      "Marketplace browse",
      "Purchase orders",
      "Delivery status",
      "Regional prices",
    ],
  },
  government: {
    title: "Government analytics",
    subtitle: "Regional production, storage, and financing overview.",
    modules: [
      "Regional food-security reports",
      "Storage capacity map",
      "Financing coverage",
      "Audit summaries",
    ],
  },
  admin: {
    title: "System admin",
    subtitle: "Users, roles, and platform health.",
    modules: [
      "User management",
      "Role access codes",
      "System logs",
      "Deploy health",
    ],
  },
};

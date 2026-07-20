import type { LucideIcon } from "lucide-react";
import {
  FileText,
  Warehouse,
  Gauge,
  Coins,
  ShoppingBag,
  CloudRain,
  Sprout,
  Building2,
  ShoppingCart,
  Landmark,
  TrendingUp,
  ShieldCheck,
  Users,
  ScanLine,
} from "lucide-react";

export interface NavItem {
  name: string;
  to: string;
}

export interface Pillar {
  icon: LucideIcon;
  title: string;
  text: string;
}

export interface Feature {
  icon: LucideIcon;
  title: string;
  text: string;
}

export interface Step {
  icon: LucideIcon;
  title: string;
  text: string;
}

export interface Role {
  icon: LucideIcon;
  name: string;
  text: string;
}

export interface Weight {
  label: string;
  pct: number;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Problem {
  title: string;
  text: string;
}

export const navigation: NavItem[] = [
  { name: "Platform", to: "platform" },
  { name: "Features", to: "features" },
  { name: "How it works", to: "workflow" },
  { name: "Technology", to: "technology" },
  { name: "Contact", to: "footer" },
];

export const partners: string[] = [
  "MINADER",
  "MINEPIA",
  "MINFI",
  "Banks",
  "Microfinance",
  "NGOs",
  "CIGs",
  "Certified warehouses",
];

export const problems: Problem[] = [
  {
    title: "No documented history",
    text: "Harvests, stock and sales happen offline and disappear from the formal economy, leaving no trace of real activity.",
  },
  {
    title: "No acceptable collateral",
    text: "Producers rarely own traditional assets, so banks and microfinance bodies have nothing to secure a loan against.",
  },
  {
    title: "No path to financing",
    text: "Even organised groups (CIGs) stay invisible online, cut off from the capital they need to invest and grow.",
  },
];

export const pillars: Pillar[] = [
  {
    icon: FileText,
    title: "Continuous documentation",
    text: "Every harvest, deposit, withdrawal and sale is recorded, building a movement history that proves real activity over time.",
  },
  {
    icon: Warehouse,
    title: "Certified warehouse receipts",
    text: "Goods stored in certified warehouses become verifiable digital collateral, secured by a unique reference and QR code.",
  },
  {
    icon: Gauge,
    title: "Automated credibility scoring",
    text: "A transparent engine turns that history into a score tied directly to a graduated financing term — up to 20 years.",
  },
];

export const features: Feature[] = [
  {
    icon: FileText,
    title: "Movement documentation",
    text: "Record harvests, stock changes and sales to build a verifiable activity history that grows with every action.",
  },
  {
    icon: Gauge,
    title: "Automated credibility score",
    text: "A 0–100 score computed from consistency, verified movements and repayment — refreshed as you work.",
  },
  {
    icon: Warehouse,
    title: "Certified warehouse receipts",
    text: "Turn stored goods into digital collateral any institution can verify by reference or QR code.",
  },
  {
    icon: Coins,
    title: "Financing up to 20 years",
    text: "Apply for loans against certified stock; institutions review, approve and track repayment in one place.",
  },
  {
    icon: ShoppingBag,
    title: "Marketplace & fair prices",
    text: "List products, receive purchase orders and consult current and historical market prices by city.",
  },
  {
    icon: CloudRain,
    title: "Weather & climate alerts",
    text: "Regional rainfall forecasts and drought or flood warnings help producers plan the season.",
  },
];

export const steps: Step[] = [
  {
    icon: FileText,
    title: "Document your activity",
    text: "Register each harvest, stock update and sale. It takes a moment and works on any connection.",
  },
  {
    icon: Warehouse,
    title: "Store & certify",
    text: "Deposit goods in a certified warehouse and receive a digital receipt — your verifiable collateral.",
  },
  {
    icon: TrendingUp,
    title: "Build credibility",
    text: "AgriAid recalculates your score with every verified movement, unlocking longer financing terms.",
  },
  {
    icon: Coins,
    title: "Access financing",
    text: "Apply to partner institutions against your certified stock and track your loan from review to repayment.",
  },
];

export const roles: Role[] = [
  {
    icon: Sprout,
    name: "Farmers & CIGs",
    text: "Document activity, certify stock, build a score and apply for financing you own and can take anywhere.",
  },
  {
    icon: Building2,
    name: "Financing institutions",
    text: "Review documented profiles, stock evidence and scores before approving, then monitor repayment.",
  },
  {
    icon: Warehouse,
    name: "Warehouse managers",
    text: "Register warehouses, record intake and issue certified digital receipts used as collateral.",
  },
  {
    icon: ShoppingCart,
    name: "Buyers & traders",
    text: "Discover verified products, compare prices by city and place purchase orders directly with producers.",
  },
  {
    icon: Landmark,
    name: "Government bodies",
    text: "Consult aggregated regional production and food-security reports for planning and monitoring.",
  },
];

export const scoreWeights: Weight[] = [
  { label: "Consistency & frequency of movements", pct: 30 },
  { label: "Independently verified movements", pct: 25 },
  { label: "Repayment history on prior loans", pct: 25 },
  { label: "Length & continuity of platform use", pct: 10 },
  { label: "Volume & value of certified stock", pct: 10 },
];

export const stats: Stat[] = [
  { value: "~20%", label: "of Cameroon's non-oil GDP comes from agriculture" },
  { value: "60%", label: "of the active population work in agriculture" },
  { value: "75%", label: "of agricultural workers are women" },
  { value: "<3%", label: "of formal credit reaches agriculture in emerging markets" },
];

export const statsSource =
  "Sources: GAFSP / IFAD (Cameroon) and IFC. Poverty has held near 44% since 2001, worst in the Northern regions AgriAid targets.";

export interface TechItem {
  icon: LucideIcon;
  title: string;
  text: string;
}

export const techItems: TechItem[] = [
  {
    icon: ScanLine,
    title: "Verifiable by design",
    text: "Every receipt carries a unique reference and QR code so any institution can confirm collateral instantly.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & role-based",
    text: "Sanctum-authenticated access means each actor sees only what their role permits — nothing more.",
  },
  {
    icon: CloudRain,
    title: "Built for low bandwidth",
    text: "Lightweight screens and offline-tolerant flows keep AgriAid usable on the connections producers actually have.",
  },
  {
    icon: Users,
    title: "Accessible to everyone",
    text: "Calm, high-contrast interfaces and plain language make the platform usable with limited digital literacy.",
  },
];

export const roleOptions: string[] = [
  "Select your role",
  "Farmer / CIG",
  "Financing institution",
  "Warehouse manager",
  "Buyer / trader",
  "Government body",
];

export const regionOptions: string[] = [
  "Select your region",
  "Far North",
  "North",
  "Adamawa",
  "Centre",
  "South",
  "Other",
];

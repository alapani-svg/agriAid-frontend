import type { LucideIcon } from "lucide-react";
import {
  ClipboardList,
  Warehouse,
  Gauge,
  Banknote,
  Store,
  CloudSun,
  Sprout,
  Landmark,
  Truck,
  Building2,
  ShieldCheck,
  Lock,
  Wifi,
  Accessibility,
} from "lucide-react";

export interface NavItem {
  name: string;
  to: string;
}

export interface Partner {
  name: string;
  full: string;
}

export interface Problem {
  title: string;
  text: string;
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

export interface Tier {
  tier: string;
  range: string;
  term: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface TechItem {
  icon: LucideIcon;
  title: string;
  text: string;
}

export interface Option {
  value: number;
  label: string;
}

export const navigation: NavItem[] = [
  { name: "Platform", to: "platform" },
  { name: "Features", to: "features" },
  { name: "How it works", to: "workflow" },
  { name: "Technology", to: "technology" },
  { name: "Contact", to: "footer" },
];

export const partners: Partner[] = [
  { name: "MINADER", full: "Ministry of Agriculture & Rural Development" },
  { name: "MINEPIA", full: "Ministry of Livestock & Fisheries" },
  { name: "MINFI", full: "Ministry of Finance" },
  { name: "Banks", full: "Commercial lenders" },
  { name: "Microfinance", full: "MFIs & cooperatives" },
  { name: "NGOs", full: "Development partners" },
];

export const problems: Problem[] = [
  {
    title: "No documented history",
    text: "Farmers work for years but keep no verifiable record of harvests, storage, or sales, so lenders have nothing to assess.",
  },
  {
    title: "No acceptable collateral",
    text: "Stock sits in stores with no certification, so it cannot be pledged against a loan or trusted by a financier.",
  },
  {
    title: "No path to financing",
    text: "Without history or collateral, producers are locked out of formal credit and long-term investment.",
  },
];

export const pillars: Pillar[] = [
  {
    icon: ClipboardList,
    title: "Continuous documentation",
    text: "Every harvest, movement and sale is logged, building an objective activity history over time.",
  },
  {
    icon: Warehouse,
    title: "Certified warehouse receipts",
    text: "Deposited stock is inspected and certified into receipts that act as verifiable, pledgeable collateral.",
  },
  {
    icon: Gauge,
    title: "Automated credibility scoring",
    text: "Documented activity and repayment are turned into a transparent score that unlocks graduated financing.",
  },
];

export const features: Feature[] = [
  {
    icon: ClipboardList,
    title: "Movement documentation",
    text: "Record harvests, deposits, withdrawals and sales from any device, building a tamper-evident trail.",
  },
  {
    icon: Gauge,
    title: "Automated credibility score",
    text: "A transparent, weighted score computed from verified activity and repayment history.",
  },
  {
    icon: Warehouse,
    title: "Certified warehouse receipts",
    text: "Turn certified stock into QR-verifiable receipts that institutions accept as collateral.",
  },
  {
    icon: Banknote,
    title: "Financing up to 20 years",
    text: "Graduated terms, from short working capital to 20-year structural loans, matched to your score.",
  },
  {
    icon: Store,
    title: "Marketplace & fair prices",
    text: "List produce, receive purchase orders and see live market prices by city to sell with confidence.",
  },
  {
    icon: CloudSun,
    title: "Weather & climate alerts",
    text: "Regional weather and climate alerts help protect stored stock and plan planting and harvest.",
  },
];

export const steps: Step[] = [
  {
    icon: ClipboardList,
    title: "Document activity",
    text: "Log harvests, movements and sales as they happen, with no paperwork and offline-friendly.",
  },
  {
    icon: Warehouse,
    title: "Store & certify",
    text: "Deposit stock at a certified warehouse; it is inspected and issued as a verifiable receipt.",
  },
  {
    icon: Gauge,
    title: "Build credibility",
    text: "Your documented, verified activity grows an objective credibility score over time.",
  },
  {
    icon: Banknote,
    title: "Access financing",
    text: "Share your score and receipts with financing institutions to unlock loans up to 20 years.",
  },
];

export const roles: Role[] = [
  {
    icon: Sprout,
    name: "Farmers & CIGs",
    text: "Document activity, certify stock and build a credit history that opens the door to financing.",
  },
  {
    icon: Landmark,
    name: "Financing institutions",
    text: "Assess producers with objective scores and receipt-backed collateral before lending.",
  },
  {
    icon: Warehouse,
    name: "Warehouse managers",
    text: "Track deposits and withdrawals and issue certified receipts against stored stock.",
  },
  {
    icon: Truck,
    name: "Buyers & traders",
    text: "Discover verified produce, place purchase orders and transact on fair, transparent prices.",
  },
  {
    icon: Building2,
    name: "Government bodies",
    text: "Access regional reporting on production, storage and financing to guide policy.",
  },
];

export const scoreWeights: Weight[] = [
  { label: "Consistency & frequency of movements", pct: 30 },
  { label: "Independently verified movements", pct: 25 },
  { label: "Repayment history on prior loans", pct: 25 },
  { label: "Length & continuity of platform use", pct: 10 },
  { label: "Volume & value of certified stock", pct: 10 },
];

export const tiers: Tier[] = [
  { tier: "Building", range: "0 to 39", term: "Short-term working capital" },
  { tier: "Established", range: "40 to 69", term: "Up to 5-year loans" },
  { tier: "Strong", range: "70 to 84", term: "Up to 10-year loans" },
  { tier: "High", range: "85 to 100", term: "Up to 20-year financing" },
];

export const stats: Stat[] = [
  { value: "~15%", label: "of Cameroon's GDP comes from agriculture" },
  { value: "~43%", label: "of the active population works in agriculture" },
  { value: "~50%", label: "of agricultural labour is carried out by women" },
  { value: "<5%", label: "of smallholders access formal agricultural credit" },
];

export const statsSource =
  "Indicative figures drawn from national and development-agency estimates; used to illustrate the financing gap AgriAid addresses.";

export const techItems: TechItem[] = [
  {
    icon: ShieldCheck,
    title: "Verifiability",
    text: "Independently confirmed movements and certified receipts make records trustworthy end to end.",
  },
  {
    icon: Lock,
    title: "Role-based security",
    text: "Every role (farmer, warehouse, lender, buyer, government) sees only what it should.",
  },
  {
    icon: Wifi,
    title: "Low-bandwidth ready",
    text: "Built to stay usable on slow, intermittent rural connections.",
  },
  {
    icon: Accessibility,
    title: "Accessible by design",
    text: "Clear language, large targets and simple flows for varied digital literacy.",
  },
];

export const techLabels: string[] = [
  "React",
  "Laravel",
  "MySQL",
  "REST APIs",
  "Sanctum auth",
];

export const roleOptions: Option[] = [
  { value: 1, label: "Farmer / CIG" },
  { value: 2, label: "Financing institution" },
  { value: 3, label: "Warehouse manager" },
  { value: 4, label: "Buyer / trader" },
  { value: 5, label: "Government body" },
];

export const regionOptions: Option[] = [
  { value: 1, label: "Adamawa" },
  { value: 2, label: "Centre" },
  { value: 3, label: "East" },
  { value: 4, label: "Far North" },
  { value: 5, label: "Littoral" },
  { value: 6, label: "North" },
  { value: 7, label: "North-West" },
  { value: 8, label: "South" },
  { value: 9, label: "South-West" },
  { value: 10, label: "West" },
];

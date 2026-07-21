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

export const navTargets: string[] = [
  "platform",
  "features",
  "workflow",
  "technology",
  "footer",
];

export const partnerNames: string[] = [
  "MINADER",
  "MINEPIA",
  "MINFI",
  "Banks",
  "Microfinance",
  "NGOs",
];

export const pillarIcons: LucideIcon[] = [ClipboardList, Warehouse, Gauge];

export const featureIcons: LucideIcon[] = [
  ClipboardList,
  Gauge,
  Warehouse,
  Banknote,
  Store,
  CloudSun,
];

export const stepIcons: LucideIcon[] = [
  ClipboardList,
  Warehouse,
  Gauge,
  Banknote,
];

export const roleIcons: LucideIcon[] = [
  Sprout,
  Landmark,
  Warehouse,
  Truck,
  Building2,
];

export const techIcons: LucideIcon[] = [ShieldCheck, Lock, Wifi, Accessibility];

export const scoreWeightPcts: number[] = [30, 25, 25, 10, 10];

export const tierRanges: string[] = ["0 to 39", "40 to 69", "70 to 84", "85 to 100"];

export const statValues: string[] = ["~15%", "~43%", "~50%", "<5%"];

export const techLabels: string[] = [
  "React",
  "Laravel",
  "MySQL",
  "REST APIs",
  "Sanctum auth",
];

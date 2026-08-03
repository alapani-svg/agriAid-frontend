const API_BASE = (import.meta.env.VITE_API_URL ?? "http://localhost:8000").replace(
  /\/$/,
  "",
);

function authHeaders(): HeadersInit {
  const token = localStorage.getItem("auth_token");
  return {
    Accept: "application/json",
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
}

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  let res: Response;
  try {
    res = await fetch(`${API_BASE}${path}`, {
      ...init,
      headers: { ...authHeaders(), ...(init?.headers ?? {}) },
      credentials: "include",
    });
  } catch {
    throw new Error(
      "Cannot reach the API. Ensure php artisan serve is running on port 8000.",
    );
  }

  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const errors = data.errors as Record<string, string[]> | undefined;
    const first = errors ? Object.values(errors)[0]?.[0] : undefined;
    throw new Error(first || data.message || data.error || `Request failed (${res.status})`);
  }
  return data as T;
}

export type FarmerProfile = {
  id: number;
  user_id: number;
  village: string | null;
  region: string | null;
  farm_size_hectares: number;
  crop_types: string[];
  cig_group: string | null;
  notes: string | null;
};

export type Harvest = {
  id: number;
  crop: string;
  mass_kg: number;
  quality_pct: number;
  price_per_kg: number | null;
  estimated_value: number | null;
  status: string;
  village: string | null;
  region: string | null;
  harvested_on: string | null;
  notes: string | null;
  created_at: string | null;
};

export type StockLine = {
  id: number;
  crop: string;
  quantity_kg: number;
  unit: string;
  location: string | null;
  updated_at: string | null;
};

export function getFarmerMe() {
  return request<{ farmer: FarmerProfile }>("/api/operations/farmer/me");
}

export function updateFarmerMe(body: Partial<{
  village: string;
  region: string;
  farm_size_hectares: number;
  crop_types: string[];
  cig_group: string;
  notes: string;
}>) {
  return request<{ message: string; farmer: FarmerProfile }>("/api/operations/farmer/me", {
    method: "PUT",
    body: JSON.stringify(body),
  });
}

export function listHarvests() {
  return request<{ harvests: Harvest[] }>("/api/operations/harvests");
}

export function recordHarvest(body: {
  crop: string;
  mass_kg: number;
  quality_pct?: number;
  price_per_kg?: number;
  village?: string;
  region?: string;
  harvested_on?: string;
  notes?: string;
}) {
  return request<{ message: string; harvest: Harvest }>("/api/operations/harvests", {
    method: "POST",
    body: JSON.stringify(body),
  });
}

export function listStocks() {
  return request<{ stocks: StockLine[]; totals: { quantity_kg: number; lines: number } }>(
    "/api/operations/stocks",
  );
}

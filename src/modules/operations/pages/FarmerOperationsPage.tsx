import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Leaf,
  LogOut,
  Package,
  Plus,
  RefreshCw,
  Sprout,
  Warehouse,
} from "lucide-react";
import Button from "../../../shared/ui/Button";
import TextField from "../../../shared/ui/TextField";
import {
  getFarmerMe,
  listHarvests,
  listStocks,
  recordHarvest,
  updateFarmerMe,
  type FarmerProfile,
  type Harvest,
  type StockLine,
} from "../api/operationsApi";

const CROP_SUGGESTIONS = [
  "Maize",
  "Sorghum",
  "Rice",
  "Cassava",
  "Groundnut",
  "Cocoa",
  "Coffee",
  "Plantain",
];

export default function FarmerOperationsPage() {
  const navigate = useNavigate();
  const user = useMemo(() => {
    try {
      return JSON.parse(localStorage.getItem("user_data") || "null") as {
        name?: string;
        email?: string;
        role?: string;
        region?: string;
      } | null;
    } catch {
      return null;
    }
  }, []);

  const [loading, setLoading] = useState(true);
  const [savingProfile, setSavingProfile] = useState(false);
  const [recording, setRecording] = useState(false);
  const [error, setError] = useState("");
  const [toast, setToast] = useState("");

  const [farmer, setFarmer] = useState<FarmerProfile | null>(null);
  const [harvests, setHarvests] = useState<Harvest[]>([]);
  const [stocks, setStocks] = useState<StockLine[]>([]);
  const [stockTotalKg, setStockTotalKg] = useState(0);

  const [profileForm, setProfileForm] = useState({
    village: "",
    region: "",
    farm_size_hectares: "",
    cig_group: "",
    crop_types: "",
  });

  const [harvestForm, setHarvestForm] = useState({
    crop: "Maize",
    mass_kg: "",
    quality_pct: "85",
    price_per_kg: "",
    harvested_on: new Date().toISOString().slice(0, 10),
    notes: "",
  });

  const loadAll = useCallback(async () => {
    setError("");
    setLoading(true);
    try {
      const [f, h, s] = await Promise.all([
        getFarmerMe(),
        listHarvests(),
        listStocks(),
      ]);
      setFarmer(f.farmer);
      setHarvests(h.harvests);
      setStocks(s.stocks);
      setStockTotalKg(s.totals.quantity_kg);
      setProfileForm({
        village: f.farmer.village ?? "",
        region: f.farmer.region ?? user?.region ?? "",
        farm_size_hectares: String(f.farmer.farm_size_hectares ?? ""),
        cig_group: f.farmer.cig_group ?? "",
        crop_types: (f.farmer.crop_types ?? []).join(", "),
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load operations data");
    } finally {
      setLoading(false);
    }
  }, [user?.region]);

  useEffect(() => {
    const token = localStorage.getItem("auth_token");
    if (!token) {
      navigate("/login", { replace: true });
      return;
    }
    if (user?.role && user.role !== "farmer" && user.role !== "admin") {
      navigate("/dashboard", { replace: true });
      return;
    }
    void loadAll();
  }, [loadAll, navigate, user?.role]);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(""), 4500);
  };

  const handleSaveProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setSavingProfile(true);
    setError("");
    try {
      const crops = profileForm.crop_types
        .split(",")
        .map((c) => c.trim())
        .filter(Boolean);
      const res = await updateFarmerMe({
        village: profileForm.village.trim() || undefined,
        region: profileForm.region.trim() || undefined,
        farm_size_hectares: profileForm.farm_size_hectares
          ? Number(profileForm.farm_size_hectares)
          : 0,
        cig_group: profileForm.cig_group.trim() || undefined,
        crop_types: crops,
      });
      setFarmer(res.farmer);
      showToast("Profile synchronized");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Profile update failed");
    } finally {
      setSavingProfile(false);
    }
  };

  const handleRecordHarvest = async (e: React.FormEvent) => {
    e.preventDefault();
    setRecording(true);
    setError("");
    try {
      const mass = Number(harvestForm.mass_kg);
      if (!mass || mass <= 0) {
        throw new Error("Enter a valid mass in kg");
      }
      const res = await recordHarvest({
        crop: harvestForm.crop.trim(),
        mass_kg: mass,
        quality_pct: Number(harvestForm.quality_pct) || 80,
        price_per_kg: harvestForm.price_per_kg
          ? Number(harvestForm.price_per_kg)
          : undefined,
        harvested_on: harvestForm.harvested_on || undefined,
        village: profileForm.village || undefined,
        region: profileForm.region || undefined,
        notes: harvestForm.notes.trim() || undefined,
      });
      setHarvests((prev) => [res.harvest, ...prev]);
      setHarvestForm((prev) => ({ ...prev, mass_kg: "", notes: "" }));
      const s = await listStocks();
      setStocks(s.stocks);
      setStockTotalKg(s.totals.quantity_kg);
      showToast(res.message);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not record harvest");
    } finally {
      setRecording(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("auth_token");
    localStorage.removeItem("user_data");
    navigate("/login", { replace: true });
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f0f7f0]">
      {/* ambient liquid orbs */}
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#00e600]/15 blur-3xl orb-drift" />
      <div className="pointer-events-none absolute -right-16 top-40 h-80 w-80 rounded-full bg-emerald-400/20 blur-3xl orb-drift" style={{ animationDelay: "1.2s" }} />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-teal-300/20 blur-3xl" />

      <header className="sticky top-0 z-30 border-b border-white/50 bg-white/55 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#026e00]/10 text-[#026e00] liquid-glass">
              <Sprout className="h-5 w-5" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#026e00]">
                agriAid · Operations
              </p>
              <h1 className="font-headline text-lg font-bold text-gray-900">
                {user?.name ?? "Farmer workspace"}
              </h1>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => void loadAll()}
              className="inline-flex items-center gap-1.5 rounded-xl border border-white/60 bg-white/40 px-3 py-2 text-xs font-semibold text-gray-700 backdrop-blur hover:bg-white/70"
            >
              <RefreshCw className="h-3.5 w-3.5" />
              Refresh
            </button>
            <Button type="button" size="sm" variant="outline" onClick={handleLogout}>
              <span className="inline-flex items-center gap-1.5">
                <LogOut className="h-3.5 w-3.5" />
                Sign out
              </span>
            </Button>
          </div>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-6xl space-y-6 px-4 py-8">
        {toast && (
          <div className="animate-fade-up rounded-2xl border border-emerald-200/80 bg-emerald-50/90 px-4 py-3 text-sm font-medium text-emerald-900 shadow-sm">
            {toast}
          </div>
        )}

        {error && (
          <div className="rounded-2xl border border-red-200 bg-red-50/90 px-4 py-3 text-sm text-red-700">
            {error}
          </div>
        )}

        {/* KPI strip */}
        <section className="grid gap-4 sm:grid-cols-3">
          <div className="liquid-glass glass-shine rounded-3xl p-5 animate-fade-up">
            <div className="flex items-center gap-2 text-[#026e00]">
              <Package className="h-4 w-4" />
              <span className="text-[10px] font-mono-tech font-bold uppercase tracking-wider">
                On-farm stock
              </span>
            </div>
            <p className="mt-2 font-headline text-2xl font-black text-gray-900">
              {stockTotalKg.toLocaleString()} kg
            </p>
            <p className="mt-1 text-xs text-gray-500">{stocks.length} crop lines</p>
          </div>
          <div className="liquid-glass glass-shine rounded-3xl p-5 afd1">
            <div className="flex items-center gap-2 text-[#026e00]">
              <Leaf className="h-4 w-4" />
              <span className="text-[10px] font-mono-tech font-bold uppercase tracking-wider">
                Harvests logged
              </span>
            </div>
            <p className="mt-2 font-headline text-2xl font-black text-gray-900">
              {harvests.length}
            </p>
            <p className="mt-1 text-xs text-gray-500">Module 2 activity trail</p>
          </div>
          <div className="liquid-glass glass-shine rounded-3xl p-5 afd2">
            <div className="flex items-center gap-2 text-[#026e00]">
              <Warehouse className="h-4 w-4" />
              <span className="text-[10px] font-mono-tech font-bold uppercase tracking-wider">
                Farm size
              </span>
            </div>
            <p className="mt-2 font-headline text-2xl font-black text-gray-900">
              {farmer?.farm_size_hectares ?? 0} ha
            </p>
            <p className="mt-1 text-xs text-gray-500">
              {farmer?.region || user?.region || "Region not set"}
            </p>
          </div>
        </section>

        <div className="grid gap-6 lg:grid-cols-12">
          {/* Record harvest */}
          <section className="liquid-glass-emerald glass-shine rounded-3xl p-6 lg:col-span-5 animate-fade-up">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#026e00] text-white shadow-md">
                <Plus className="h-4 w-4" />
              </div>
              <div>
                <h2 className="font-headline text-lg font-bold text-gray-900">
                  Record harvest
                </h2>
                <p className="text-xs text-gray-600">
                  Logs activity and auto-updates stock
                </p>
              </div>
            </div>

            <form onSubmit={handleRecordHarvest} className="space-y-3">
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">
                  Crop
                </label>
                <input
                  list="crop-suggestions"
                  value={harvestForm.crop}
                  onChange={(e) =>
                    setHarvestForm((p) => ({ ...p, crop: e.target.value }))
                  }
                  required
                  className="w-full rounded-xl border border-white/60 bg-white/50 px-4 py-2.5 text-sm outline-none focus:border-[#00e600] focus:ring-2 focus:ring-[#00e600]/20"
                />
                <datalist id="crop-suggestions">
                  {CROP_SUGGESTIONS.map((c) => (
                    <option key={c} value={c} />
                  ))}
                </datalist>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <TextField
                  label="Mass (kg)"
                  type="number"
                  min="0.01"
                  step="0.01"
                  value={harvestForm.mass_kg}
                  onChange={(e) =>
                    setHarvestForm((p) => ({ ...p, mass_kg: e.target.value }))
                  }
                  required
                />
                <TextField
                  label="Quality %"
                  type="number"
                  min="1"
                  max="100"
                  value={harvestForm.quality_pct}
                  onChange={(e) =>
                    setHarvestForm((p) => ({ ...p, quality_pct: e.target.value }))
                  }
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <TextField
                  label="Price / kg (optional)"
                  type="number"
                  min="0"
                  step="1"
                  value={harvestForm.price_per_kg}
                  onChange={(e) =>
                    setHarvestForm((p) => ({ ...p, price_per_kg: e.target.value }))
                  }
                />
                <TextField
                  label="Harvest date"
                  type="date"
                  value={harvestForm.harvested_on}
                  onChange={(e) =>
                    setHarvestForm((p) => ({ ...p, harvested_on: e.target.value }))
                  }
                />
              </div>

              <TextField
                label="Notes"
                value={harvestForm.notes}
                onChange={(e) =>
                  setHarvestForm((p) => ({ ...p, notes: e.target.value }))
                }
                placeholder="Field block, moisture notes…"
              />

              <Button type="submit" className="w-full" disabled={recording || loading}>
                {recording ? "Recording…" : "Save harvest & update stock"}
              </Button>
            </form>
          </section>

          {/* Profile */}
          <section className="liquid-glass glass-shine rounded-3xl p-6 lg:col-span-7 afd1">
            <h2 className="font-headline text-lg font-bold text-gray-900">
              Farmer profile
            </h2>
            <p className="mt-1 text-xs text-gray-500">
              Village, region, farm size and crop focus — used for scoring later.
            </p>

            <form onSubmit={handleSaveProfile} className="mt-4 grid gap-3 sm:grid-cols-2">
              <TextField
                label="Village"
                value={profileForm.village}
                onChange={(e) =>
                  setProfileForm((p) => ({ ...p, village: e.target.value }))
                }
                placeholder="e.g. Mora"
              />
              <TextField
                label="Region"
                value={profileForm.region}
                onChange={(e) =>
                  setProfileForm((p) => ({ ...p, region: e.target.value }))
                }
                placeholder="Far North"
              />
              <TextField
                label="Farm size (hectares)"
                type="number"
                min="0"
                step="0.1"
                value={profileForm.farm_size_hectares}
                onChange={(e) =>
                  setProfileForm((p) => ({
                    ...p,
                    farm_size_hectares: e.target.value,
                  }))
                }
              />
              <TextField
                label="CIG / cooperative"
                value={profileForm.cig_group}
                onChange={(e) =>
                  setProfileForm((p) => ({ ...p, cig_group: e.target.value }))
                }
              />
              <div className="sm:col-span-2">
                <TextField
                  label="Crop types (comma-separated)"
                  value={profileForm.crop_types}
                  onChange={(e) =>
                    setProfileForm((p) => ({ ...p, crop_types: e.target.value }))
                  }
                  placeholder="Maize, Sorghum"
                />
              </div>
              <div className="sm:col-span-2">
                <Button type="submit" disabled={savingProfile}>
                  {savingProfile ? "Saving…" : "Update profile"}
                </Button>
              </div>
            </form>
          </section>
        </div>

        {/* Stock ledger */}
        <section className="liquid-glass glass-shine rounded-3xl p-6 afd2">
          <h2 className="font-headline text-lg font-bold text-gray-900">
            Stock ledger
          </h2>
          <p className="mt-1 text-xs text-gray-500">
            Auto-updated when you record a harvest
          </p>
          {loading ? (
            <p className="mt-4 text-sm text-gray-500">Loading…</p>
          ) : stocks.length === 0 ? (
            <p className="mt-4 text-sm text-gray-500">
              No stock yet. Record your first harvest.
            </p>
          ) : (
            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[480px] text-left text-sm">
                <thead>
                  <tr className="border-b border-emerald-100 text-[10px] font-mono-tech uppercase tracking-wider text-[#026e00]">
                    <th className="py-2 pr-3 font-bold">Crop</th>
                    <th className="py-2 pr-3 font-bold">Quantity</th>
                    <th className="py-2 pr-3 font-bold">Location</th>
                    <th className="py-2 font-bold">Updated</th>
                  </tr>
                </thead>
                <tbody>
                  {stocks.map((s) => (
                    <tr key={s.id} className="border-b border-white/40">
                      <td className="py-3 pr-3 font-semibold text-gray-900">{s.crop}</td>
                      <td className="py-3 pr-3 text-gray-800">
                        {s.quantity_kg.toLocaleString()} {s.unit}
                      </td>
                      <td className="py-3 pr-3 text-gray-600">{s.location || "—"}</td>
                      <td className="py-3 text-xs text-gray-500">
                        {s.updated_at
                          ? new Date(s.updated_at).toLocaleString()
                          : "—"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        {/* Harvest history */}
        <section className="liquid-glass glass-shine rounded-3xl p-6 afd3">
          <h2 className="font-headline text-lg font-bold text-gray-900">
            Harvest history
          </h2>
          {loading ? (
            <p className="mt-4 text-sm text-gray-500">Loading…</p>
          ) : harvests.length === 0 ? (
            <p className="mt-4 text-sm text-gray-500">No harvests recorded yet.</p>
          ) : (
            <ul className="mt-4 space-y-3">
              {harvests.map((h) => (
                <li
                  key={h.id}
                  className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/50 bg-white/40 px-4 py-3"
                >
                  <div>
                    <p className="font-semibold text-gray-900">
                      {h.crop}{" "}
                      <span className="text-xs font-normal text-gray-500">
                        #{h.id}
                      </span>
                    </p>
                    <p className="text-xs text-gray-600">
                      {h.mass_kg.toLocaleString()} kg · quality {h.quality_pct}%
                      {h.harvested_on ? ` · ${h.harvested_on}` : ""}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-[#015d00]">
                      {h.status}
                    </span>
                    {h.estimated_value != null && (
                      <p className="mt-1 text-xs font-semibold text-[#026e00]">
                        ≈ {h.estimated_value.toLocaleString()} FCFA
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>
    </div>
  );
}

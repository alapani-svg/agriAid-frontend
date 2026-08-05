/** Runtime app configuration (Vite env). */
export const appConfig = {
  name: "agriAid",
  apiUrl: (import.meta.env.VITE_API_URL ?? "http://localhost:8000").replace(/\/$/, ""),
  isDev: import.meta.env.DEV,
} as const;

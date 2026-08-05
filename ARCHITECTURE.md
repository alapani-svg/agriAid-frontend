# agriAid Frontend Architecture

Modular / domain-oriented structure (DDD-inspired). **Put feature code only inside its module.** Shared UI lives in `src/shared`.

## Top-level map

| Path | Role | Status |
|------|------|--------|
| `src/app/` | App shell: config, providers, global store | Wired |
| `src/routes/` | Public + protected route trees | Wired |
| `src/layouts/` | Role shells (farmer, warehouse, …) | Wired |
| `src/modules/*` | Feature domains | Partial (identity, landing, operations live) |
| `src/shared/` | Cross-cutting UI, i18n, hooks, utils | Live |
| `src/theme/` | Design tokens (liquid glass, emerald) | Live |
| `src/assets/` | Static images / media | Live |
| `src/hooks/`, `src/lib/`, `src/types/`, `src/utils/` | Global helpers (prefer `shared/` for new code) | Scaffold |
| `src/Identity/` | Legacy DDD slice — prefer `modules/identity` | Deprecated path |

## Module contract (every `src/modules/<name>/`)

```text
modules/<name>/
  components/   # UI specific to this domain
  pages/        # Route-level screens
  routes/       # Optional route fragments
  services/     # API clients for this domain
  hooks/        # Domain hooks
  store/        # Local state (if needed)
  types/        # Domain types
  index.ts      # Public exports
  README.md     # Scope of the module
```

## Active modules

| Module | Purpose |
|--------|---------|
| `Landing` | Marketing / home |
| `identity` | Auth, OTP, role guards, dashboards |
| `operations` | Farmer harvest / stock (Module 2) |
| `farmer` | Farmer profile & estates (Module 2+) |
| `farm`, `crop`, `livestock` | Farm registry domains |
| `marketplace`, `orders`, `payments` | Trade & finance |
| `notifications`, `reporting`, `weather`, `ai` | Support domains |

Empty modules keep the **folder contract** + `README` + `index.ts` so the architecture stays usable without inventing unfinished features.

## Routing rules

1. Declare routes in `src/routes/publicRoutes.tsx` and `protectedRoutes.tsx`.
2. Compose them in `src/routes/index.tsx`.
3. `App.tsx` only mounts the router — **no long route lists**.
4. Role dashboards use `src/layouts/*Layout` wrappers.

## UI rules

- Brand: **agriAid** (exact casing).
- Tokens: `src/theme` + liquid-glass utilities in CSS.
- Shared primitives: `src/shared/ui`.

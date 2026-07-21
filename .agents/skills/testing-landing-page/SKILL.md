---
name: testing-landing-page
description: Test the AgriAid landing page end-to-end (nav scroll-spy, CTA wiring, lead-form validation/success, mobile hamburger). Use when verifying landing-page UI or UX changes.
---

# Testing the AgriAid Landing Page

## Run it locally
- Node 22 is required (Vite 8 / ESLint 10). The blueprint installs it via `setup-node@v4`.
- `npm install` then `npm run dev` → Vite serves at `http://localhost:5173/`.
- Verify before/after code: `npm run typecheck` (`tsc -b`), `npm run lint` (`eslint .`), `npm run build`.

## Where the code lives (current `main` uses `src/modules/Landing`)
- Composition: `src/modules/Landing/pages/LandingPage.tsx`
- Nav (sticky, scroll-spy, mobile hamburger): `src/modules/Landing/components/Navigation/Navigation.tsx` — uses `react-scroll` `spy` with `activeClass="nav-active"`; hamburger toggles an `open` state (button `aria-expanded`).
- Lead form: `src/modules/Landing/components/CTA/CTA.tsx` — validation via an `errors` `useMemo`; `done` boolean drives the success state; submit button label is "Get started free".
- Scroll helper: `src/modules/Landing/utils/scroll.ts` (`scrollToId`).
- Nav underline + smooth scroll CSS: `src/index.css` (`.nav-link` / `.nav-active`).
- Note: an earlier branch used `src/features/landing` — confirm the actual path on the branch under test, as the structure has changed between branches.

## Primary flows to verify (all via native clicks, no devtools)
1. **Nav scroll-spy**: click a nav link (e.g. "How it works") → page smooth-scrolls to that section AND the link shows the green active underline. A broken build would scroll without activating, or not scroll.
2. **CTA wiring**: nav "Get Started" scrolls to the lead form ("Start building your verifiable credit today").
3. **Lead form validation → success**: submit empty → 4 inline red errors ("Please enter your full name.", "Please enter a valid email address.", "Please select your role.", "Please select your region.") with red borders, no success. Then fill name + valid email + role + region and submit → form is replaced by a personalized success state ("You're on the list! Thanks, <FirstName>.").
4. **Mobile hamburger**: at a narrow window width the desktop links hide and a hamburger appears (button `aria-label="Open menu"`). Click it → menu lists all nav links + Sign In + Get Started (`aria-expanded="true"`). Click a link → menu closes (`aria-expanded="false"`) and scrolls to the section.

## Tips
- To test mobile width, resize the Chrome window (e.g. `wmctrl -r :ACTIVE: -e 0,80,0,420,760`), then re-maximize with `wmctrl -r :ACTIVE: -b add,maximized_vert,maximized_horz` before recording desktop flows.
- After a reload the page may keep its previous scroll position — press `Home` / scroll to top before starting a flow.

## Known limitations (not bugs)
- The lead form is **frontend-only**: a valid submit shows a local success state and does NOT POST to the Laravel API (the endpoint doesn't exist yet). Do not assert on any network request.
- Footer `Privacy Policy` / `Terms of Service` links are placeholders (`href="#"`).

## Devin Secrets Needed
- None. The landing page runs locally with no auth or external secrets.

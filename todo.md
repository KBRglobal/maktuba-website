# Project TODO

## Completed (Previous)
- [x] Basic homepage layout (11-section massive redesign)
- [x] Email capture + tRPC procedure
- [x] All 3 languages (EN/HE/AR) wired via i18n
- [x] Legal pages (privacy/terms/EULA/delete-data)
- [x] Exit-intent popup
- [x] CDN image uploads

## NEW: Align Website With Real App (Keys, Not Energy)

**Source of truth:** `/Users/claude/Documents/maktuba/repo/packages/shared/src/constants.ts`
**Gap:** Website claims "energy" currency with 3/day drip and packs of 5/15/50/150.
Real app uses "keys" (מפתחות), all-at-once (no drip), packs of 10/30/75/200/500.

### Phase 1 — i18n.ts interface ✅
- [x] 1.1-1.12 — energy* → keys* renames + keyPacks shape (keys, priceNIS, name, desc, badge?)

### Phase 2 — i18n.ts Hebrew content ✅
- [ ] 2.1 — i18n.ts(he) — `readingKeys`: "אנרגיות" → "מפתחות"
- [ ] 2.2 — i18n.ts(he) — readings[].cost: 2,2,2,2,3,1,2 → 15,10,15,5,15,10,8 (real costs)
- [ ] 2.3 — i18n.ts(he) — `keysTitle`: "מערכת האנרגיות" → "מערכת המפתחות"
- [ ] 2.4 — i18n.ts(he) — `keysSub`: rewrite — "מפתחות פותחים את הקריאות העמוקות. ללא תפוגה. ללא drip יומי."
- [ ] 2.5 — i18n.ts(he) — `keysWhat`: "מה זה מפתחות?"
- [ ] 2.6 — i18n.ts(he) — `keysWhatDesc`: "המטבע של מכתובה. כל קריאה עולה כמה מפתחות."
- [ ] 2.7 — i18n.ts(he) — `keysNoExpiry`: "בלי תפוגה, בלי drip"
- [ ] 2.8 — i18n.ts(he) — `keysNoExpiryDesc`: "קונים פעם — שורפים מתי שרוצים. מפתחות נשארים לתמיד."
- [ ] 2.9 — i18n.ts(he) — `keysWelcome`: "10 מפתחות מתנה בהרשמה"
- [ ] 2.10 — i18n.ts(he) — `keysWelcomeDesc`: "ועוד קריאה מאגית ראשונה חינם"
- [ ] 2.11 — i18n.ts(he) — `pricingWeeklyPrice`: "$4.99" → "₪19.90"
- [ ] 2.12 — i18n.ts(he) — `pricingMonthlyPrice`: "$9.99" → "₪49.90"
- [ ] 2.13 — i18n.ts(he) — `pricingAnnualPrice`: "$24.99" → "₪249.90"
- [ ] 2.14 — i18n.ts(he) — `pricingAnnualBadge`: "חסכי 79%" → "3,000 מפתחות"
- [ ] 2.15 — i18n.ts(he) — `pricingPremiumFeatures`: replace all "אנרגיות" → proper key amounts per plan
- [ ] 2.16 — i18n.ts(he) — `pricingFreeFeatures`: "5 אנרגיות מתנה" → "10 מפתחות מתנה"; "14 כלים חינם" → "2 כלים חינם אמיתיים (הורוסקופ, צ'אט)"
- [ ] 2.17 — i18n.ts(he) — `keyPacks`: 10/30/75/200/500 with real ₪ prices + names (ניסיון/גילוי/מסע/חוקר/אינסוף)
- [ ] 2.18 — i18n.ts(he) — `keyPacksTitle`: "חבילות מפתחות"

### Phase 3 — i18n.ts English content ✅
### Phase 4 — i18n.ts Arabic content ✅
### Phase 5 — Home.tsx bindings ✅
- [x] Removed unused `useAuth` import (pre-existing broken path `@/_core/hooks/useAuth`)
- [x] Swapped `Zap`→`Key` + added `ShieldCheck`; 4 binding sections rewired
- [x] Enhanced pricing card: 3-tier breakdown (weekly/monthly/yearly) with keys shown per tier
- [x] Rewrote key-packs grid: 5 columns, badges, name+desc+keys+₪ price
### Phase 6 — pricing-data.md ✅
- [x] Rewrote to reflect Keys currency, 5 packs, 3 subscription tiers, 18 reading costs
- [x] Also updated EULA.tsx §4-5 to describe Keys (not Energies)

### Phase 7 — Verify
- [x] 7.1 — grep: zero `energy|Energy|אנרגיה` in client/src ✓
- [x] 7.2 — `pnpm run build` — 0 errors, 2109 modules built ✓
- [x] 7.3 — `vitest run` — 13/13 tests pass ✓
- [ ] 7.4 — visual check: desktop + mobile, 3 languages (deferred — user-driven)

# MAKTUBA Pricing & Keys System

Source of truth: `/Users/claude/Documents/maktuba/repo/packages/shared/src/constants.ts`

## Currency: Keys (מפתחות)
- Universal in-app currency
- Granted **all at once** on purchase (no daily drip)
- **Never expire** — remain with the user even after subscription ends
- Used to unlock premium readings

## Subscription Plans (keys granted in bulk, not daily)
| Plan | Price | Keys | Notes |
|---|---|---|---|
| Weekly | ₪19.90 | 100 keys | — |
| Monthly | ₪49.90 | 350 keys | — |
| Yearly | ₪249.90 | 3,000 keys | Best Value |

7-day free trial with full access on first signup.

## Key Packs (one-time purchase)
| Name | Keys | Price | Badge |
|---|---|---|---|
| ניסיון / Taste | 10 | ₪14.90 | — |
| גילוי / Discovery | 30 | ₪29.90 | Most Popular |
| מסע / Journey | 75 | ₪54.90 | Save 27% |
| חוקר / Explorer | 200 | ₪119.90 | Save 60% |
| אינסוף / Infinite | 500 | ₪249.90 | Best Value |

## Onboarding Gifts
- 10 keys on signup (`INITIAL_FREE_KEYS`)
- First magical reading free (`FIRST_MAGIC_READING_FREE`)

## Streak Rewards (keys earned via daily login)
- 2-day: 1 key · 4-day: 2 keys · 7-day: 5 keys · 14-day: 10 keys · 30-day: 20 keys

## Free Features (0 keys — always)
- Daily Horoscope (1/day)
- Chat with Maktuba (30 msgs/day)
- Lucky Numbers, Biorhythm, Moon Calendar, Mercury Retrograde (local calc)
- Dream Encyclopedia symbol search
- Journal, Mood Tracking (on-device)

## Key-Gated Readings (in keys per reading)
| Reading | Keys |
|---|---|
| Daily Affirmation | 1 |
| Crystal / Stone of the Day | 2 |
| Zodiac Profile | 3 |
| Life Path Number | 3 |
| Name Gematria | 3 |
| Kabbalah (sefirot + gematria) | 5 |
| I Ching | 5 |
| Basic Dream | 5 |
| Deep Dream | 8 |
| Focused Question (love/money/health) | 8 |
| Psalms AI | 10 |
| 3-Card Tarot | 10 |
| Coffee Cup (Vision API) | 15 |
| Celtic Cross Tarot (10-card) | 15 |
| Palm Reading (Vision API) | 15 |
| Compatibility | 15 |
| Yearly Reading | 20 |
| Soul Package (ultimate combo) | 30 |

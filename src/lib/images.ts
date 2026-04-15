/** CDN-hosted brand illustrations. All WebP. */
const CDN = "https://d2xsxph8kpxj0f.cloudfront.net/310519663492248962/ToDf6mmxTX6kSgXA8csfFX";

export const LOGO = {
  full: `${CDN}/logo-full-v2_607272c0.webp`,
  icon: `${CDN}/logo-v3-1_ae34c8a4.webp`,
} as const;

export const CHARACTER = {
  heroWide:         `${CDN}/21_hero_wide_756a0f71.webp`,
  fullBody:         `${CDN}/14_full_body_standing_328d2555.webp`,
  knowingSmile:     `${CDN}/F01_knowing_smile_a033e1d5.webp`,
  silhouette:       `${CDN}/24_silhouette_286b27ae.webp`,
  lookingAtMoon:    `${CDN}/25_looking_at_moon_8c93f007.webp`,
  sideProfile:      `${CDN}/13_side_profile_93961410.webp`,
  theReading:       `${CDN}/01_the_reading_7d8a49b7.webp`,
  theWelcome:       `${CDN}/03_the_welcome_4efc7732.webp`,
  theLaugh:         `${CDN}/05_the_laugh_0edc7339.webp`,
  theWarning:       `${CDN}/04_the_warning_aced73e1.webp`,
  readingBook:      `${CDN}/15_reading_book_a14ad82f.webp`,
  whisperingSecret: `${CDN}/19_whispering_secret_104458a2.webp`,
  dailyWisdom:      `${CDN}/11_daily_wisdom_3b6c1ee7.webp`,
  dailyCup:         `${CDN}/12_daily_cup_e1e1afd4.webp`,
  tableOverhead:    `${CDN}/10_table_overhead_3ef0bd42.webp`,
  handsDetail:      `${CDN}/23_hands_detail_bfc845ec.webp`,
  behindScenes:     `${CDN}/09_behind_scenes_incense_1ae9b49d.webp`,
  marketplace:      `${CDN}/22_marketplace_b7072252.webp`,
} as const;

export const COFFEE = {
  theCoffee:       `${CDN}/08_the_coffee_e3e4c7b0.webp`,
  receivingCup:    `${CDN}/B01_receiving_cup_bbb7f1a9.webp`,
  studyingCup:     `${CDN}/B02_studying_cup_448b136f.webp`,
  seeingSomething: `${CDN}/B03_seeing_something_1d73fc32.webp`,
  turningCup:      `${CDN}/B05_turning_cup_b8844b79.webp`,
  heartOpening:    `${CDN}/B07_heart_opening_ee13824a.webp`,
  pouringFoam:     `${CDN}/B12_pouring_foam_0ec84baa.webp`,
} as const;

export const TAROT = {
  theCards:          `${CDN}/06_the_cards_5f598521.webp`,
  singleCard:        `${CDN}/T11_single_card_ab676940.webp`,
  celticCross:       `${CDN}/T15_celtic_cross_d40d5ed8.webp`,
  relationshipSpread:`${CDN}/T16_relationship_spread_8236a099.webp`,
  oneCardRevealed:   `${CDN}/T21_one_card_revealed_b3b83428.webp`,
} as const;

export const PALM = {
  thePalm: `${CDN}/07_the_palm_b71a3988.webp`,
} as const;

export const APP_SCREENS = {
  home:            `${CDN}/A02_home_screen_3f30af8c.webp`,
  readingComplete: `${CDN}/A07_reading_complete_c933a817.webp`,
  screenshot1:     `${CDN}/Screenshot2026-04-15at1.44.05AM_f48bba36.webp`,
  screenshot2:     `${CDN}/Screenshot2026-04-15at1.44.15AM_55f34574.webp`,
  screenshot3:     `${CDN}/Screenshot2026-04-15at1.44.28AM_6fb98f11.webp`,
} as const;

/** Course cover illustrations — pairs each course with a brand image. */
export const COURSE_COVER: Record<string, string> = {
  tarot:      TAROT.theCards,
  coffee:     COFFEE.studyingCup,
  palm:       PALM.thePalm,
  astrology:  CHARACTER.lookingAtMoon,
  numerology: CHARACTER.readingBook,
  kabbalah:   CHARACTER.whisperingSecret,
  dreams:     CHARACTER.silhouette,
  iching:     CHARACTER.handsDetail,
  crystals:   CHARACTER.dailyWisdom,
  psalms:     CHARACTER.readingBook,
};

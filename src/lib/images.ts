/** Brand illustrations — WebP served from Cloudflare R2 via cdn.maktuba.app. */
const IMG = "https://cdn.maktuba.app/img";

export const CHARACTER = {
  heroWide:         `${IMG}/21_hero_wide.webp`,
  fullBody:         `${IMG}/14_full_body_standing.webp`,
  knowingSmile:     `${IMG}/F01_knowing_smile.webp`,
  silhouette:       `${IMG}/24_silhouette.webp`,
  lookingAtMoon:    `${IMG}/25_looking_at_moon.webp`,
  sideProfile:      `${IMG}/13_side_profile.webp`,
  theReading:       `${IMG}/01_the_reading.webp`,
  theWelcome:       `${IMG}/03_the_welcome.webp`,
  theLaugh:         `${IMG}/05_the_laugh.webp`,
  theWarning:       `${IMG}/04_the_warning.webp`,
  readingBook:      `${IMG}/15_reading_book.webp`,
  whisperingSecret: `${IMG}/19_whispering_secret.webp`,
  dailyWisdom:      `${IMG}/11_daily_wisdom.webp`,
  dailyCup:         `${IMG}/12_daily_cup.webp`,
  tableOverhead:    `${IMG}/10_table_overhead.webp`,
  handsDetail:      `${IMG}/23_hands_detail.webp`,
  behindScenes:     `${IMG}/09_behind_scenes_incense.webp`,
  marketplace:      `${IMG}/22_marketplace.webp`,
} as const;

export const COFFEE = {
  theCoffee:       `${IMG}/08_the_coffee.webp`,
  receivingCup:    `${IMG}/B01_receiving_cup.webp`,
  studyingCup:     `${IMG}/B02_studying_cup.webp`,
  seeingSomething: `${IMG}/B03_seeing_something.webp`,
  turningCup:      `${IMG}/B05_turning_cup.webp`,
  heartOpening:    `${IMG}/B07_heart_opening.webp`,
  pouringFoam:     `${IMG}/B12_pouring_foam.webp`,
} as const;

export const TAROT = {
  theCards:          `${IMG}/06_the_cards.webp`,
  singleCard:        `${IMG}/T11_single_card.webp`,
  celticCross:       `${IMG}/T15_celtic_cross.webp`,
  relationshipSpread:`${IMG}/T16_relationship_spread.webp`,
  oneCardRevealed:   `${IMG}/T21_one_card_revealed.webp`,
} as const;

export const PALM = {
  thePalm: `${IMG}/07_the_palm.webp`,
} as const;

export const APP_SCREENS = {
  home:            `${IMG}/A02_home_screen.webp`,
  readingComplete: `${IMG}/A07_reading_complete.webp`,
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

import { createHash } from "crypto";
import { drizzle } from "drizzle-orm/mysql2";
import { boolean, int, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";
import { readFileSync } from "fs";
import { nanoid } from "nanoid";

// Schema definition (inline to avoid TS imports)
const readings = mysqlTable("readings", {
  id: int("id").autoincrement().primaryKey(),
  slug: varchar("slug", { length: 64 }).notNull().unique(),
  title: varchar("title", { length: 255 }).notNull(),
  recipientName: varchar("recipientName", { length: 255 }).notNull(),
  content: text("content").notNull(),
  passwordHash: varchar("passwordHash", { length: 255 }).notNull(),
  isRead: boolean("isRead").default(false).notNull(),
  readAt: timestamp("readAt"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

const DATABASE_URL = process.env.DATABASE_URL;
if (!DATABASE_URL) {
  console.error("DATABASE_URL not set");
  process.exit(1);
}

const db = drizzle(DATABASE_URL);

// Generate random slug
const slug = nanoid(12);

// Password for Suzi
const password = "maktuba2026";
const passwordHash = createHash("sha256").update(password).digest("hex");

// Reading content from file
const rawContent = readFileSync("/home/ubuntu/upload/pasted_content_4.txt", "utf-8");

// Extract only the reading content (starting from the actual reading)
const readingStart = rawContent.indexOf("🔮");
const content = readingStart !== -1 ? rawContent.substring(readingStart) : rawContent;

await db.insert(readings).values({
  slug,
  title: "קריאת בריאות | מכתובה",
  recipientName: "סוזי הודיה רפאל בת רבקה",
  content: content.trim(),
  passwordHash,
  isRead: false,
});

console.log("✅ Reading created successfully!");
console.log(`📎 Slug: ${slug}`);
console.log(`🔑 Password: ${password}`);
console.log(`🔗 URL: /r/${slug}`);

process.exit(0);

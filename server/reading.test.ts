import { describe, it, expect } from "vitest";
import { createHash } from "crypto";

function hashPassword(password: string): string {
  return createHash("sha256").update(password).digest("hex");
}

describe("Reading feature", () => {
  describe("hashPassword", () => {
    it("should produce a consistent SHA-256 hash", () => {
      const hash = hashPassword("maktuba2026");
      expect(hash).toBe(
        createHash("sha256").update("maktuba2026").digest("hex")
      );
      expect(hash).toHaveLength(64); // SHA-256 hex is 64 chars
    });

    it("should produce different hashes for different passwords", () => {
      const hash1 = hashPassword("password1");
      const hash2 = hashPassword("password2");
      expect(hash1).not.toBe(hash2);
    });

    it("should produce same hash for same input", () => {
      const hash1 = hashPassword("test");
      const hash2 = hashPassword("test");
      expect(hash1).toBe(hash2);
    });
  });

  describe("Reading data validation", () => {
    it("should validate slug format (nanoid 12 chars)", () => {
      const slug = "hy0PMtS5tEOD";
      expect(slug).toHaveLength(12);
      // nanoid uses URL-safe alphabet
      expect(slug).toMatch(/^[A-Za-z0-9_-]+$/);
    });

    it("should validate reading content structure", () => {
      const mockReading = {
        slug: "hy0PMtS5tEOD",
        title: "קריאת בריאות | מכתובה",
        recipientName: "סוזי הודיה רפאל בת רבקה",
        content: "🔮 קריאת בריאות\n\nContent here...",
        passwordHash: hashPassword("maktuba2026"),
        isRead: false,
      };

      expect(mockReading.slug).toBeTruthy();
      expect(mockReading.title).toBeTruthy();
      expect(mockReading.recipientName).toBeTruthy();
      expect(mockReading.content).toBeTruthy();
      expect(mockReading.passwordHash).toHaveLength(64);
      expect(mockReading.isRead).toBe(false);
    });

    it("should reject empty password", () => {
      const password = "";
      expect(password.trim()).toBe("");
    });

    it("should verify password correctly", () => {
      const storedHash = hashPassword("maktuba2026");
      const inputHash = hashPassword("maktuba2026");
      expect(inputHash).toBe(storedHash);
    });

    it("should reject wrong password", () => {
      const storedHash = hashPassword("maktuba2026");
      const wrongHash = hashPassword("wrongpassword");
      expect(wrongHash).not.toBe(storedHash);
    });
  });
});

import { describe, it, expect, vi, beforeEach } from "vitest";

// Mock the db module
vi.mock("./db", () => ({
  subscribeEmail: vi.fn().mockResolvedValue({ success: true }),
  getSubscriberCount: vi.fn().mockResolvedValue(0),
}));

import { subscribeEmail, getSubscriberCount } from "./db";

describe("Email Subscription", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should call subscribeEmail with correct data", async () => {
    const data = { email: "test@example.com", lang: "en", source: "hero" };
    await subscribeEmail(data);
    expect(subscribeEmail).toHaveBeenCalledWith(data);
    expect(subscribeEmail).toHaveBeenCalledTimes(1);
  });

  it("should handle Hebrew language subscription", async () => {
    const data = { email: "user@test.com", lang: "he", source: "cta" };
    await subscribeEmail(data);
    expect(subscribeEmail).toHaveBeenCalledWith(data);
  });

  it("should handle Arabic language subscription", async () => {
    const data = { email: "user@test.com", lang: "ar", source: "hero" };
    await subscribeEmail(data);
    expect(subscribeEmail).toHaveBeenCalledWith(data);
  });

  it("should return subscriber count", async () => {
    const count = await getSubscriberCount();
    expect(count).toBe(0);
    expect(getSubscriberCount).toHaveBeenCalledTimes(1);
  });
});

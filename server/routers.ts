import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router, adminProcedure } from "./_core/trpc";
import { z } from "zod";
import { createReading, getReadingBySlug, markReadingAsRead, deleteReading, subscribeEmail } from "./db";
import { nanoid } from "nanoid";
import { createHash } from "crypto";

function hashPassword(password: string): string {
  return createHash("sha256").update(password).digest("hex");
}

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return { success: true } as const;
    }),
  }),

  reading: router({
    // Verify password and get reading content
    access: publicProcedure
      .input(z.object({
        slug: z.string(),
        password: z.string(),
      }))
      .mutation(async ({ input }) => {
        const reading = await getReadingBySlug(input.slug);
        if (!reading) {
          throw new Error("הקריאה לא נמצאה");
        }

        const inputHash = hashPassword(input.password);
        if (inputHash !== reading.passwordHash) {
          throw new Error("סיסמה שגויה");
        }

        // Mark as read
        await markReadingAsRead(input.slug);

        return {
          title: reading.title,
          recipientName: reading.recipientName,
          content: reading.content,
          isRead: reading.isRead,
        };
      }),

    // Check if reading exists (no auth needed)
    check: publicProcedure
      .input(z.object({ slug: z.string() }))
      .query(async ({ input }) => {
        const reading = await getReadingBySlug(input.slug);
        if (!reading) {
          return { exists: false, recipientName: "", title: "" };
        }
        return {
          exists: true,
          recipientName: reading.recipientName,
          title: reading.title,
        };
      }),

    // Admin: delete a reading by slug
    delete: adminProcedure
      .input(z.object({ slug: z.string() }))
      .mutation(async ({ input }) => {
        const reading = await getReadingBySlug(input.slug);
        if (!reading) {
          throw new Error("הקריאה לא נמצאה");
        }
        await deleteReading(input.slug);
        return { success: true, deletedSlug: input.slug };
      }),

    // Admin: create a new reading
    create: adminProcedure
      .input(z.object({
        title: z.string(),
        recipientName: z.string(),
        content: z.string(),
        password: z.string(),
      }))
      .mutation(async ({ input }) => {
        const slug = nanoid(12);
        const pHash = hashPassword(input.password);
        await createReading({
          slug,
          title: input.title,
          recipientName: input.recipientName,
          content: input.content,
          passwordHash: pHash,
          isRead: false,
        });
        return { slug, url: `/r/${slug}` };
      }),
  }),

  subscribe: router({
    email: publicProcedure
      .input(z.object({
        email: z.string().email(),
        lang: z.string().optional(),
        source: z.string().optional(),
      }))
      .mutation(async ({ input }) => {
        await subscribeEmail({
          email: input.email,
          lang: input.lang || "en",
          source: input.source || "hero",
        });
        return { success: true };
      }),
  }),
});

export type AppRouter = typeof appRouter;

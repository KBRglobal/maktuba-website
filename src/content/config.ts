import { defineCollection, z } from "astro:content";

const lessonSection = z.object({
  opening: z.string(),
  theoryA: z.string(),
  practice1: z.object({ instruction: z.string(), type: z.string() }),
  theoryB: z.string(),
  practice2: z.object({ instruction: z.string(), type: z.string() }),
  deepDive: z.string(),
  quiz: z.object({
    questions: z.array(z.object({
      question: z.string(),
      options: z.array(z.string()).length(4),
      correct: z.number().int().min(0).max(3),
      explanation: z.string(),
    })).length(5),
  }),
  closing: z.object({
    summary: z.string(),
    wisdom: z.string(),
    nextPreview: z.string(),
  }),
});

const lessons = defineCollection({
  type: "data",
  schema: z.object({
    courseId: z.string(),
    lessonNumber: z.number().int().positive(),
    title: z.string(),
    slug: z.string().regex(/^[a-z0-9-]+$/),
    module: z.string(),
    estimatedMinutes: z.number().int().positive(),
    sections: lessonSection,
    faq: z.array(z.object({ question: z.string(), answer: z.string() })).min(2).max(6),
    images: z.array(z.object({
      src: z.string(), alt: z.string(),
      width: z.number(), height: z.number(),
      caption: z.string().optional(),
    })).optional().default([]),
    crossReferences: z.array(z.object({
      course: z.string(), lesson: z.string(), label: z.string(),
    })).optional().default([]),
    seo: z.object({
      title: z.string().max(70),
      description: z.string().max(170),
      keywords: z.array(z.string()).min(3),
      ogImage: z.string().optional(),
    }),
    datePublished: z.string().default("2026-04-15"),
    dateModified: z.string().default("2026-04-15"),
  }),
});

const courses = defineCollection({
  type: "data",
  schema: z.object({
    id: z.string(),
    title: z.string(),
    subtitle: z.string(),
    description: z.string(),
    icon: z.string(),
    heroImage: z.string().optional(),
    modules: z.array(z.object({
      name: z.string(),
      lessonCount: z.number().int().positive(),
    })),
    lessonCount: z.number().int().positive(),
    estimatedHours: z.number().positive(),
    order: z.number().int().nonnegative(),
  }),
});

export const collections = { lessons, courses };

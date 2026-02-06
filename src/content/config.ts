import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date(),
    summary: z.string(),
    lang: z.enum(["id", "en"]),
    category: z.string(),
    tags: z.array(z.string()),
    banner: z.string(),
  }),
});

export const collections = {
  blog: blogCollection,
};

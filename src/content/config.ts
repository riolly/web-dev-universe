import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    siteTitle: z.string(),
    description: z.string(),
    image: z.object({
      alt: z.string(),
      url_landscape: z.string(),
      url_square: z.string(),
    }),
    tags: z.array(z.string()),
    pubDate: z.string(),
    isFeatured: z.boolean(),
  }),
});

export const collections = {
  blog: blogCollection,
};

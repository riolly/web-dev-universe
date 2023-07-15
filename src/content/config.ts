import { defineCollection, z } from "astro:content";
import { rssSchema } from "@astrojs/rss";

const blogCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    rssSchema.extend({
      siteTitle: z.string(),
      image: z.object({
        alt: z.string(),
        square: image(),
        og: image(),
        banner: image(),
      }),
      isFeatured: z.boolean(),
      description: z.string(),
    }),
});

export const collections = {
  blog: blogCollection,
};

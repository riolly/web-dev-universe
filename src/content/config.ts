import { z, defineCollection } from "astro:content";
import { rssSchema } from "@astrojs/rss";

const blogCollection = defineCollection({
  type: "content",
  schema: rssSchema.extend({
    siteTitle: z.string(),
    image: z.object({
      alt: z.string(),
      url: z.object({
        square: z.string(),
        og: z.string(),
        banner: z.string(),
      }),
    }),
    isFeatured: z.boolean(),
    description: z.string(),
  }),
});

export const collections = {
  blog: blogCollection,
};

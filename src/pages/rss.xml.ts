import { getCollection } from "astro:content";
import rss from "@astrojs/rss";

import type { APIContext } from "astro";

export async function get(context: APIContext) {
  const blog = await getCollection("blog");
  return rss({
    title: "Explore the Web Development Universe with Riolly",
    description:
      "Unlock the true potential of web development with Riolly. From infrastructure to database management, from back-end solutions to front-end techniques, the cutting-edge tech stack that designed to elevate the user experience. Stay ahead of the curve and embark on a transformative journey into the ever-evolving world of web development with Riolly.",
    site: context.site as unknown as string,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      customData: post.data.customData,
      link: `/blog/${post.slug}/`,
    })),
  });
}

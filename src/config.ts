import type { GetImageResult } from "astro";
import type { CollectionEntry } from "astro:content";

export const SITE = {
  titleSuffix: "Web Dev Universe with Riolly",
  title: "Explore the Web Development Universe with Riolly",
  description:
    "Unlock the true potential of web development with Riolly. From infrastructure to database management, from back-end solutions to front-end techniques, the cutting-edge tech stack that designed to elevate the user experience. Stay ahead of the curve and embark on a transformative journey into the ever-evolving world of web development with Riolly.",
  defaultLanguage: "en_US",
};

export const OPEN_GRAPH = {
  image: {
    src: "og-image.png",
    alt: "Web Dev Universe with Riolly",
  },
  twitter: "bertoriolly",
};

type FrontmatterBlog = CollectionEntry<"blog">["data"];
export type SeoProps = {
  frontmatter?: FrontmatterBlog;
  title?: string;
  description?: string;
  image?: GetImageResult & { alt: string };
  type?: "website" | "article";
};

export const KNOWN_LANGUAGES = {
  en: "English",
  id: "Indonesia",
} as const;
export type KnownLanguageCode = keyof typeof KNOWN_LANGUAGES;

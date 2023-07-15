export const SITE = {
  title: "Web Dev Universe | Riolly",
  description: "Explore the always evolving web development world with Riolly",
  defaultLanguage: "en_US",
};

export const OPEN_GRAPH = {
  image: {
    src: "assets/images/og-image.png",
    alt: "Web Dev Universe | Explore the always evolving web development world with Riolly",
  },
  twitter: "bertoriolly",
};

// This is the type of the frontmatter you put in the docs markdown files.
export type Frontmatter = {
  title: string;
  description: string;
  layout: string;
  image?: { src: string; alt: string };
  ogLocale?: string;
  lang?: KnownLanguageCode;
  isMdx?: boolean;
};

export const KNOWN_LANGUAGES = {
  en: "English",
  id: "Indonesia",
} as const;
export type KnownLanguageCode = keyof typeof KNOWN_LANGUAGES;

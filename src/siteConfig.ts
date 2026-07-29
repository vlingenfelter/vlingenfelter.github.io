import type {
  SiteConfiguration,
  NavigationLinks,
  SocialLinks,
} from "@/types.ts";

export const SITE: SiteConfiguration = {
  title: "Violet Lingenfelter",
  description: "Personal site for Violet Lingenfelter",
  href: "https://vlingenfelter.github.io",
  author: "Violet Lingenfelter",
  locale: "en-CA",
};

export const NAV_LINKS: NavigationLinks = {
  posts: {
    path: "/posts",
    label: "Posts",
  },
  about: {
    path: "/about",
    label: "About",
  },
};

export const SOCIAL_LINKS: SocialLinks = {
  email: {
    label: "Email",
    href: "mailto:vlingenfelter5@gmail.com",
  },
  github: {
    label: "GitHub",
    href: "https://github.com/vlingenfelter",
  },
  stinky: {
    label: "stinkydoes.art",
    href: "https://stinkydoes.art",
  }
};

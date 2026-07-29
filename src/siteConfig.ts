import type {
  SiteConfiguration,
  NavigationLinks,
  SocialLinks,
} from "@/types.ts";

export const SITE: SiteConfiguration = {
  title: "Violet Lingenfelter",
  description: "A barebones starter theme. Built with Astro, Tailwind CSS, and Markdown.",
  href: "https://barebones.trevortylerlee.com",
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
  }
};

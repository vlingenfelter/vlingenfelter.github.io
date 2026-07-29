import type {
  SiteConfiguration,
  NavigationLinks,
  SocialLinks,
} from "@/types.ts";

export const SITE: SiteConfiguration = {
  title: "Violet Lingenfelter",
  description: "A barebones starter theme. Built with Astro, Tailwind CSS, and Markdown.",
  href: "https://vlingenfelter.github.io/dev_website",
  author: "Violet Lingenfelter",
  locale: "en-CA",
};

export const NAV_LINKS: NavigationLinks = {
  posts: {
    path: "/dev_website/posts",
    label: "Posts",
  },
  about: {
    path: "/dev_website/about",
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

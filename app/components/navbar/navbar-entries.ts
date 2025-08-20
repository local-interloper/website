interface NavEntry {
    label: string;
    url: string;
}

export const NAV_ENTRIES: NavEntry[] = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "About Me",
    url: "/about-me",
  },
  {
    label: "Business",
    url: "/business",
  },
  {
    label: "Contact",
    url: "/contact",
  },
] as const;

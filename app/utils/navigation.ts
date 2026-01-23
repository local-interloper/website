import type { CommandPaletteItem, NavigationMenuItem } from "@nuxt/ui";

export default [
    {
      label: "Home",
      to: "/",
      icon: "tabler:home",
    },
    {
      label: "About Me",
      to: "/about-me",
      icon: "tabler:user",
    },
    {
      label: "Projects",
      to: "/projects",
      icon: "tabler:folder",
    },
    {
      label: "Business",
      to: "/business",
      icon: "tabler:briefcase",
    },
    {
      label: "Contact",
      to: "/contact",
      icon: "tabler:phone",
    },
] as (NavigationMenuItem | CommandPaletteItem)[];

import type {Social} from "@/types/social.ts";

export interface SocialData {
  name: string;
  url: string;
  icon: string;
}

export const socialsDataRecord: Record<Social, SocialData> = {
  telegram: {
    name: "Telegram",
    url: "https://t.me/localinterloper",
    icon: "simple-icons:telegram"
  },
  mastodon: {
    name: "Mastodon",
    url: "https://mastodon.social/@local_interloper",
    icon: "simple-icons:mastodon",
  },
  instagram: {
    name: "Instagram",
    url: "https://www.instagram.com/local.interloper/",
    icon: "simple-icons:instagram",
  },
  steam: {
    name: "Steam",
    url: "https://steamcommunity.com/id/local-interloper",
    icon: "simple-icons:steam",
  },
  github: {
    name: "GitHub",
    url: "https://github.com/local-interloper",
    icon: "simple-icons:github",
  },
};

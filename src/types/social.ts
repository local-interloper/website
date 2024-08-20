export const socials = ["telegram", "mastodon", "instagram", "steam", "github"] as const;

export type Social = typeof socials[number];

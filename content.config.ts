import { defineContentConfig, defineCollection } from "@nuxt/content";
import { z } from "zod";

export default defineContentConfig({
  collections: {
    aboutMe: defineCollection({
      type: "data",
      source: "about-me.yml",
      schema: z.object({
        hero: z.object({
          description: z.string(),
          background: z.string(),
        }),
        aboutMe: z.string(),
        hobbies: z.object({
          description: z.string(),
          hobbies: z.array(
            z.object({
              title: z.string(),
              background: z.string(),
            }),
          ),
        }),
        tools: z.object({
          description: z.string(),
          tools: z.array(
            z.object({
              label: z.string(),
              icon: z.string(),
            }),
          ),
        }),
      }),
    }),

    projects: defineCollection({
      type: "data",
      source: "projects.yml",
      schema: z.object({
        hero: z.object({
          description: z.string(),
          background: z.string(),
        }),
        projects: z.object({
          description: z.string(),
          projects: z.array(
            z.object({
              title: z.string(),
              description: z.string(),
              tech: z.array(z.string()),
              tags: z.array(z.string()),
            }),
          ),
        }),
      }),
    }),

    business: defineCollection({
      type: "data",
      source: "business.yml",
      schema: z.object({
        hero: z.object({
          description: z.string(),
        }),
        works: z.object({
          description: z.string(),
          works: z.array(
            z.object({
              title: z.string(),
              year: z.string(),
              description: z.string(),
            }),
          ),
        }),
        skills: z.object({
          description: z.string(),
          hard: z.array(z.string()),
          soft: z.array(z.string()),
        }),
      }),
    }),
  },
});

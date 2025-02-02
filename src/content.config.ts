// 1. Import utilities from `astro:content`
import { defineCollection, z } from "astro:content";

// 2. Import loader(s)
import { file } from "astro/loaders";

// 3. Define your collection(s)
const projects = defineCollection({
  loader: file("./src/megabytee/data/projects.json"),
  schema: z.object({
    name: z.string(),
    about: z.string(),
    version: z.string(),
    icon: z.string(),
    type: z.enum(["public", "private"]),
    link: z.string(),
  }),
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { projects };

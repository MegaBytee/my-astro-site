import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  // Load Markdown and MDX files in the `src/content/blog/` directory.
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  // Type-check frontmatter using a schema
  schema: () =>
    z.object({
      image: z
        .object({
          link: z.string(),
          alt: z.string(),
          attrs: z.string(),
          source: z.string(),
        })
        .optional(),

      title: z.string(),
      description: z.string(),
      // Transform string to Date object
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      tags: z.array(z.string()).optional(),
      category: z.string().optional(),
      author: z.string().default("@MegaBytee"),
    }),
});

const projects = defineCollection({
  // Load Markdown and MDX files in the `src/content/blog/` directory.
  loader: glob({ base: "./src/content/projects", pattern: "**/*.{md,mdx}" }),
  // Type-check frontmatter using a schema
  schema: () =>
    z.object({
      image: z
        .object({
          link: z.string(),
          alt: z.string(),
          attrs: z.string(),
          source: z.string(),
        })
        .optional(),
      title: z.string(),
      description: z.string(),
      // Transform string to Date object
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      tags: z.array(z.string()).optional(),
      author: z.string().default("@MegaBytee"),
      repo: z.string(),
    }),
});

export const collections = {
  blog: blog,
  projects: projects,
};

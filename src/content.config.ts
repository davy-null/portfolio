import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Three collections. Each entry is ONE file:
 *   src/content/writeups/*.md      -> articles
 *   src/content/achievements/*.yaml -> achievements
 *   src/content/projects/*.yaml     -> projects
 * `placeholder: true` shows a "sample" badge. Delete the line once the entry is real.
 */

export const CATEGORIES = {
  cybersecurity: { label: 'Cybersecurity', jp: '防衛' },
  ctf: { label: 'Capture The Flag', jp: '競技' },
  linux: { label: 'Linux and Networking', jp: '基盤' },
  devops: { label: 'DevOps and Cloud', jp: '雲' },
  programming: { label: 'Programming', jp: '術式' },
  thoughts: { label: 'Personal Thoughts', jp: '心' },
} as const;
export type CategoryKey = keyof typeof CATEGORIES;
const categoryKeys = Object.keys(CATEGORIES) as [CategoryKey, ...CategoryKey[]];

const writeups = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/writeups' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().max(200),
      date: z.coerce.date(),
      updated: z.coerce.date().optional(),
      category: z.enum(categoryKeys),
      tags: z.array(z.string()).default([]),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
      cover: image().optional(),
      coverAlt: z.string().default(''),
      placeholder: z.boolean().default(false),
    }),
});

export const ACHIEVEMENT_CATEGORIES = {
  ctf: 'CTF',
  certification: 'Certification',
  hackathon: 'Hackathon',
  academic: 'Academic',
  leadership: 'Leadership',
  milestone: 'Technical milestone',
  project: 'Project completed',
  personal: 'Personal',
} as const;
const achievementKeys = Object.keys(ACHIEVEMENT_CATEGORIES) as [
  keyof typeof ACHIEVEMENT_CATEGORIES,
  ...(keyof typeof ACHIEVEMENT_CATEGORIES)[],
];

const achievements = defineCollection({
  loader: glob({ pattern: '**/*.{yaml,yml}', base: './src/content/achievements' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
      category: z.enum(achievementKeys),
      rank: z.enum(['S', 'A', 'B', 'C']).default('B'),
      image: image().optional(),
      imageAlt: z.string().default(''),
      link: z.string().url().optional(),
      linkLabel: z.string().default('View'),
      featured: z.boolean().default(false),
      placeholder: z.boolean().default(false),
    }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{yaml,yml}', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      description: z.string(),
      tech: z.array(z.string()).default([]),
      screenshot: image().optional(),
      screenshotAlt: z.string().default(''),
      repo: z.string().url().optional(),
      demo: z.string().url().optional(),
      status: z.enum(['shipped', 'building', 'archived']).default('shipped'),
      featured: z.boolean().default(false),
      order: z.number().default(100),
      placeholder: z.boolean().default(false),
    }),
});

export const collections = { writeups, achievements, projects };

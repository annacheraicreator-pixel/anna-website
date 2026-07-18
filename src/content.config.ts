import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const categories = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/categories' }),
  schema: z.object({
    label_ru: z.string(),
    label_en: z.string(),
    order: z.number()
  })
});

const works = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/works' }),
  schema: ({ image }) =>
    z.object({
      title_ru: z.string(),
      title_en: z.string(),
      description_ru: z.string().optional(),
      description_en: z.string().optional(),
      category: z.string().optional(),
      medium: z.enum(['photo', 'video']),
      client: z.string().optional(),
      featured: z.boolean().default(false),
      date: z.coerce.date(),
      order: z.number().default(0),
      images: z.array(image()).default([]),
      video: z.string().optional(),
      hasAudio: z.boolean().default(false)
    })
});

export const collections = { categories, works };

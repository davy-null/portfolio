import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { site } from '../data/profile';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = (await getCollection('writeups', (p) => !p.data.draft)).sort((a, b) => +b.data.date - +a.data.date);
  return rss({
    title: `${site.handle} write-ups`,
    description: site.description,
    site: context.site!,
    items: posts.map((p) => ({ title: p.data.title, description: p.data.description, pubDate: p.data.date, link: `/writeups/${p.id}/`, categories: [p.data.category, ...p.data.tags] })),
  });
}

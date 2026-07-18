import { getRelativeLocaleUrl } from 'astro:i18n';
import type { CollectionEntry } from 'astro:content';
import type { Locale } from '../i18n/ui';

export function sortWorks(works: CollectionEntry<'works'>[]): CollectionEntry<'works'>[] {
  return [...works].sort(
    (a, b) => a.data.order - b.data.order || a.data.date.valueOf() - b.data.date.valueOf()
  );
}

export function getWorkHref(locale: Locale, work: CollectionEntry<'works'>): string {
  return work.data.category
    ? getRelativeLocaleUrl(locale, `/portfolio/${work.data.category}/${work.id}`)
    : getRelativeLocaleUrl(locale, `/video/${work.id}`);
}

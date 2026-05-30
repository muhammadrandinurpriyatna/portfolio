import type { DocumentHeadValue } from '@builder.io/qwik-city';

export const SITE_URL = 'https://randi.starnsparks.com';
export const SITE_NAME = 'Muhammad Randi Nur Priyatna Portfolio';
export const AUTHOR_NAME = 'Muhammad Randi Nur Priyatna';
export const AUTHOR_EMAIL = 'randi@starnsparks.com';
export const PROFILE_IMAGE = `${SITE_URL}/android-chrome-512x512.png`;

type JsonLd = Record<string, unknown>;

interface SeoOptions {
  title: string;
  description: string;
  path?: string;
  type?: 'website' | 'profile' | 'article';
  image?: string;
  keywords?: string[];
  scripts?: JsonLd[];
}

export const absoluteUrl = (path = '/') => {
  if (path.startsWith('http')) return path;
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
};

export const jsonLdScript = (schema: JsonLd, key: string) => ({
  key,
  props: { type: 'application/ld+json' },
  script: JSON.stringify(schema).replace(/</g, '\\u003c'),
});

export const personSchema = (): JsonLd => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${SITE_URL}/#person`,
  name: AUTHOR_NAME,
  url: SITE_URL,
  image: PROFILE_IMAGE,
  email: AUTHOR_EMAIL,
  jobTitle: 'Full Stack Developer',
  worksFor: {
    '@type': 'Organization',
    name: 'Starandsparks Tech',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bogor',
    addressRegion: 'West Java',
    addressCountry: 'ID',
  },
  sameAs: [
    'https://linkedin.com/in/randiprytn',
  ],
  knowsAbout: [
    'Full Stack Development',
    'Frontend Development',
    'Backend Development',
    'Laravel',
    'Vue.js',
    'React',
    'Qwik',
    'Web Performance',
  ],
});

export const websiteSchema = (): JsonLd => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: SITE_URL,
  inLanguage: ['id-ID', 'en-US'],
  publisher: { '@id': `${SITE_URL}/#person` },
});

export const breadcrumbSchema = (items: Array<{ name: string; path: string }>): JsonLd => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: absoluteUrl(item.path),
  })),
});

export const buildSeoHead = ({
  title,
  description,
  path = '/',
  type = 'website',
  image = PROFILE_IMAGE,
  keywords = [],
  scripts = [],
}: SeoOptions): DocumentHeadValue => {
  const url = absoluteUrl(path);
  const fullTitle = title.includes(AUTHOR_NAME) ? title : `${title} | ${AUTHOR_NAME}`;

  return {
    title: fullTitle,
    meta: [
      { name: 'description', content: description },
      { name: 'author', content: AUTHOR_NAME },
      { name: 'creator', content: AUTHOR_NAME },
      { name: 'publisher', content: AUTHOR_NAME },
      { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
      { name: 'googlebot', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
      { name: 'keywords', content: keywords.join(', ') },
      { property: 'og:type', content: type === 'article' ? 'article' : 'website' },
      { property: 'og:site_name', content: SITE_NAME },
      { property: 'og:locale', content: 'id_ID' },
      { property: 'og:title', content: fullTitle },
      { property: 'og:description', content: description },
      { property: 'og:url', content: url },
      { property: 'og:image', content: image },
      { property: 'og:image:alt', content: title },
      { property: 'og:image:width', content: '512' },
      { property: 'og:image:height', content: '512' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: fullTitle },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image },
      { name: 'twitter:image:alt', content: title },
    ],
    links: [
      { rel: 'canonical', href: url },
      { rel: 'alternate', hreflang: 'id-ID', href: url },
      { rel: 'alternate', hreflang: 'en-US', href: url },
      { rel: 'alternate', hreflang: 'x-default', href: url },
    ],
    scripts: scripts.map((schema, index) => jsonLdScript(schema, `jsonld-${index}`)),
  };
};

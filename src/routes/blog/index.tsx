import { $, component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import { Link, type DocumentHead } from '@builder.io/qwik-city';
import { BLOG_POSTS } from '../../data/blog';
import { text, useLocale } from '../../contexts/locale-context';
import { breadcrumbSchema, buildSeoHead } from '../../utils/seo';

const categories = (locale: 'id' | 'en') => [
  locale === 'id' ? 'Semua' : 'All',
  ...Array.from(new Set(BLOG_POSTS.map((p) => locale === 'id' ? p.category : p.categoryEn))),
];

export default component$(() => {
  const ref = useSignal<Element>();
  const { locale } = useLocale();
  const active = useSignal('Semua');

  useVisibleTask$(({ track }) => {
    track(() => locale.value);
    active.value = text(locale.value, 'Semua', 'All');
  });

  useVisibleTask$(({ track }) => {
    track(() => ref.value);
    if (!ref.value) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.querySelectorAll<HTMLElement>('.reveal, .reveal-scale')
            .forEach((el, i) => setTimeout(() => el.classList.add('visible'), i * 80));
        } else {
          e.target.querySelectorAll<HTMLElement>('.reveal, .reveal-scale')
            .forEach((el) => el.classList.remove('visible'));
        }
      });
    }, { threshold: 0.05 });
    observer.observe(ref.value);
    return () => observer.disconnect();
  });

  const setActive = $((cat: string) => { active.value = cat; });
  const filtered = BLOG_POSTS.filter((p) => active.value === text(locale.value, 'Semua', 'All') || (locale.value === 'id' ? p.category : p.categoryEn) === active.value);

  return (
    <>
      <div class="pt-[100px] pb-10 bg-bg border-b border-bdr">
        <div class="max-w-[1100px] mx-auto px-6">
          <Link href="/" class="inline-flex items-center gap-2 text-[13px] text-ink-3 no-underline font-mono mb-6 transition-all group hover:text-sa">
            <svg class="w-4 h-4 transition-transform group-hover:-translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
            {text(locale.value, 'Kembali', 'Back')}
          </Link>
          <span class="block font-mono text-[11px] tracking-[3px] uppercase text-sa mb-2.5">{text(locale.value, 'Tulisan', 'Writing')}</span>
          <h1 class="text-[clamp(28px,4vw,44px)] font-extrabold text-ink leading-[1.1]">{text(locale.value, 'Blog & ', 'Blog & ')}<span class="text-gradient">{text(locale.value, 'Artikel', 'Articles')}</span></h1>
        </div>
      </div>

      <section ref={ref} id="blog" class="bg-bg">
        <div class="max-w-[1100px] mx-auto py-16 px-6">
          <div class="flex flex-wrap gap-2 mb-12 reveal">
            {categories(locale.value).map((cat) => (
              <button
                key={cat}
                class={`font-mono text-xs px-4 py-1.5 rounded-lg border cursor-pointer transition-all hover:bg-sa/12 hover:border-sa hover:text-sa hover:scale-110 hover:rotate-[5deg] ${active.value === cat ? 'bg-sa/12 border-sa text-sa' : 'border-bdr-hi bg-transparent text-ink-2'}`}
                onClick$={() => setActive(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div class="grid grid-cols-3 gap-6 max-[900px]:grid-cols-2 max-[640px]:grid-cols-1">
            {filtered.map((post, i) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                class="bg-surf border border-bdr rounded-[18px] overflow-hidden flex flex-col no-underline text-inherit transition-all duration-300 hover:-translate-y-1.5 hover:border-sa/40 hover:shadow-card reveal-scale visible group"
                style={`transition-delay:${i * 80}ms`}
              >
                <div class={`relative h-[140px] flex items-center justify-center overflow-hidden shrink-0 ${post.grad}`}>
                  <span class="text-[44px] z-[1] transition-transform duration-500 group-hover:scale-110">{post.emoji}</span>
                  <span class="absolute bottom-2.5 left-3 font-mono text-[10px] uppercase tracking-[1px] px-2 py-0.5 rounded bg-black/35 text-white/90 backdrop-blur border border-white/12 z-[1]">{locale.value === 'id' ? post.category : post.categoryEn}</span>
                </div>
                <div class="p-5 flex-1 flex flex-col gap-2">
                  <div class="flex items-center justify-between">
                    <span class="text-[11px] text-ink-3 font-mono">{post.date}</span>
                    <span class="text-[11px] text-ink-3 font-mono flex items-center gap-1">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-3 h-3">
                        <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
                      </svg>
                      {locale.value === 'id' ? post.readTime : post.readTimeEn}
                    </span>
                  </div>
                  <h3 class="text-[15px] font-bold text-ink leading-[1.35] transition-colors group-hover:text-sa">{locale.value === 'id' ? post.title : post.titleEn}</h3>
                  <p class="text-[13px] text-ink-2 leading-[1.6] flex-1 line-clamp-3">{locale.value === 'id' ? post.excerpt : post.excerptEn}</p>
                  <div class="flex flex-wrap gap-1.5 mt-1">
                    {(locale.value === 'id' ? post.tags : post.tagsEn).slice(0, 3).map((tag) => (
                      <span key={tag} class="font-mono text-[10px] px-2 py-0.5 rounded bg-sa/8 border border-sa/14 text-ink-3">{tag}</span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
});

export const head: DocumentHead = buildSeoHead({
  title: 'Blog & Artikel',
  description: 'Tulisan Muhammad Randi Nur Priyatna tentang pengembangan web, frontend, backend, Laravel, Vue.js, React, performa web, produktivitas, dan perjalanan karir developer.',
  path: '/blog',
  keywords: ['Blog Developer', 'Artikel Web Development', 'Laravel', 'Vue.js', 'React', 'Frontend', 'Backend', 'Karir Developer'],
  scripts: [
    breadcrumbSchema([
      { name: 'Beranda', path: '/' },
      { name: 'Blog', path: '/blog' },
    ]),
    {
      '@context': 'https://schema.org',
      '@type': 'Blog',
      name: 'Blog Muhammad Randi Nur Priyatna',
      description: 'Tulisan tentang pengembangan web, teknologi, dan karir developer.',
    },
  ],
});

const oldHead: DocumentHead = {
  title: 'Blog — Muhammad Randi Nur Priyatna',
  meta: [{ name: 'description', content: 'Tulisan tentang pengembangan web, tips karir, dan pengalaman sebagai pengembang.' }],
};

import { component$ } from '@builder.io/qwik';
import { type DocumentHead, routeLoader$, useLocation } from '@builder.io/qwik-city';
import { BLOG_POSTS } from '../../../data/blog';

export const usePost = routeLoader$(({ params, status }) => {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) { status(404); return null; }
  return post;
});

export default component$(() => {
  const post = usePost();
  const loc = useLocation();

  if (!post.value) {
    return (
      <div class="max-w-[1100px] mx-auto px-6 text-center pt-[140px]">
        <h1 class="text-[80px] font-extrabold text-ink mb-4">404</h1>
        <p class="text-ink-2 mb-8">Artikel tidak ditemukan.</p>
        <a href="/blog" class="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-sm font-semibold bg-transparent border border-bdr-hi text-ink-2 no-underline transition-all hover:border-pri hover:text-pri hover:-translate-y-0.5">
          ← Kembali ke Blog
        </a>
      </div>
    );
  }

  const p = post.value;
  const others = BLOG_POSTS.filter((b) => b.slug !== p.slug).slice(0, 2);

  return (
    <>
      {/* Page header */}
      <div class="pt-[100px] pb-10 bg-bg border-b border-bdr">
        <div class="max-w-[1100px] mx-auto px-6">
          <a href="/blog" class="inline-flex items-center gap-2 text-[13px] text-ink-3 no-underline font-mono mb-6 transition-all group hover:text-sa">
            <svg class="w-4 h-4 transition-transform group-hover:-translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
            Semua Artikel
          </a>
        </div>
      </div>

      {/* Post */}
      <article class="max-w-[760px] mx-auto px-6 pb-20">
        {/* Thumb banner */}
        <div class={`h-[280px] flex items-center justify-center relative ${p.grad}`}>
          <span class="text-[80px]">{p.emoji}</span>
        </div>

        <div class="pt-10">
          {/* Header */}
          <header class="mb-12">
            <span class="inline-block font-mono text-[11px] uppercase tracking-[1.5px] px-3 py-1 rounded-md bg-pri/10 border border-pri/20 text-pri mb-4">{p.category}</span>
            <h1 class="text-[clamp(24px,4vw,38px)] font-extrabold text-ink leading-[1.2] mb-5">{p.title}</h1>
            <div class="flex gap-5 flex-wrap mb-4">
              <span class="flex items-center gap-1.5 text-[13px] text-ink-3 font-mono">
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                  <rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>
                </svg>
                {p.date}
              </span>
              <span class="flex items-center gap-1.5 text-[13px] text-ink-3 font-mono">
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                  <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
                </svg>
                {p.readTime} baca
              </span>
            </div>
            <div class="flex flex-wrap gap-1.5">
              {p.tags.map((tag) => (
                <span key={tag} class="font-mono text-[10px] px-2 py-0.5 rounded bg-pri/8 border border-pri/14 text-ink-3">{tag}</span>
              ))}
            </div>
          </header>

          {/* Content */}
          <div class="prose" dangerouslySetInnerHTML={p.content} />

          {/* Footer */}
          <div class="flex justify-between items-center pt-10 mt-10 border-t border-bdr flex-wrap gap-4">
            <a href="/blog" class="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-sm font-semibold bg-transparent border border-bdr-hi text-ink-2 no-underline transition-all hover:border-pri hover:text-pri hover:-translate-y-0.5">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M19 12H5M12 5l-7 7 7 7" />
              </svg>
              Kembali ke Blog
            </a>
            <div class="flex items-center gap-2.5">
              <span class="text-[13px] text-ink-3">Bagikan:</span>
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(p.title)}&url=${encodeURIComponent(loc.url.href)}`}
                target="_blank"
                rel="noreferrer"
                class="w-9 h-9 flex items-center justify-center bg-surf border border-bdr rounded-lg text-ink-2 no-underline transition-all hover:border-pri hover:text-pri hover:-translate-y-0.5"
                title="Share ke Twitter/X"
              >
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(loc.url.href)}`}
                target="_blank"
                rel="noreferrer"
                class="w-9 h-9 flex items-center justify-center bg-surf border border-bdr rounded-lg text-ink-2 no-underline transition-all hover:border-pri hover:text-pri hover:-translate-y-0.5"
                title="Share ke LinkedIn"
              >
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </article>

      {/* Related posts */}
      {others.length > 0 && (
        <section class="bg-bg-soft py-[60px]">
          <div class="max-w-[1100px] mx-auto px-6">
            <h2 class="text-[20px] font-bold text-ink mb-7">Artikel Lainnya</h2>
            <div class="grid grid-cols-3 gap-6 max-[900px]:grid-cols-2 max-[640px]:grid-cols-1">
              {others.map((post) => (
                <a key={post.slug} href={`/blog/${post.slug}`} class="bg-surf border border-bdr rounded-[18px] overflow-hidden flex flex-col no-underline text-inherit transition-all duration-300 hover:-translate-y-1.5 hover:border-sa/40 hover:shadow-card group">
                  <div class={`relative h-[140px] flex items-center justify-center overflow-hidden shrink-0 ${post.grad}`}>
                    <span class="text-[44px] z-[1] transition-transform duration-500 group-hover:scale-110">{post.emoji}</span>
                    <span class="absolute bottom-2.5 left-3 font-mono text-[10px] uppercase tracking-[1px] px-2 py-0.5 rounded bg-black/35 text-white/90 backdrop-blur border border-white/12 z-[1]">{post.category}</span>
                  </div>
                  <div class="p-5 flex-1 flex flex-col gap-2">
                    <div class="flex items-center justify-between">
                      <span class="text-[11px] text-ink-3 font-mono">{post.date}</span>
                      <span class="text-[11px] text-ink-3 font-mono">{post.readTime}</span>
                    </div>
                    <h3 class="text-[15px] font-bold text-ink leading-[1.35] transition-colors group-hover:text-sa">{post.title}</h3>
                    <p class="text-[13px] text-ink-2 leading-[1.6] flex-1 line-clamp-3">{post.excerpt}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
});

export const head: DocumentHead = ({ resolveValue }) => {
  const post = resolveValue(usePost);
  if (!post) return { title: 'Artikel Tidak Ditemukan' };
  return {
    title: `${post.title} — Randi's Blog`,
    meta: [
      { name: 'description', content: post.excerpt },
      { property: 'og:title', content: post.title },
      { property: 'og:description', content: post.excerpt },
    ],
  };
};

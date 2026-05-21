import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import { BLOG_POSTS } from '../../data/blog';
import { SeeMore } from '../ui/see-more';

export default component$(() => {
  const ref = useSignal<Element>();
  const latest = BLOG_POSTS.slice(0, 3);

  useVisibleTask$(({ track }) => {
    track(() => ref.value);
    if (!ref.value) return;

    let timers: number[] = [];

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        const els = e.target.querySelectorAll<HTMLElement>(
          '.reveal, .reveal-scale'
        );
        if (e.isIntersecting) {
          els.forEach((el, i) => {
            timers.push(window.setTimeout(() => el.classList.add('visible'), i * 100));
          });
        } else {
          timers.forEach(clearTimeout);
          timers = [];
          els.forEach((el) => el.classList.remove('visible'));
        }
      });
    }, { threshold: 0.1 });

    observer.observe(ref.value);
    return () => { observer.disconnect(); timers.forEach(clearTimeout); };
  });

  return (
    <section id="blog" ref={ref} class="bg-bg">
      <div class="max-w-[1100px] mx-auto py-28 px-6">
        <span class="font-mono text-[11px] tracking-[3px] uppercase text-sa block mb-2.5 reveal">Blog</span>
        <h2 class="text-[clamp(26px,4vw,40px)] font-extrabold text-ink mb-3.5 leading-[1.15] reveal d-100">Tulisan Terbaru</h2>
        <div class="w-[52px] h-[3px] bg-sa rounded-sm mb-16 reveal d-200" />

        <div class="relative">
          <div class="preview-clamp" style="--ph:300px;--pm:45%">
            <div class="grid grid-cols-3 gap-6 max-[900px]:grid-cols-2 max-[640px]:grid-cols-1">
              {latest.map((post, i) => (
                <a
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  class="bg-surf border border-bdr rounded-[18px] overflow-hidden flex flex-col no-underline text-inherit transition-all duration-300 hover:-translate-y-1.5 hover:border-sa/40 hover:shadow-card reveal-scale group"
                  style={`transition-delay:${i * 100}ms`}
                >
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
                    <div class="flex flex-wrap gap-1.5 mt-1">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span key={tag} class="font-mono text-[10px] px-2 py-0.5 rounded bg-sa/8 border border-sa/14 text-ink-3">{tag}</span>
                      ))}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
          <SeeMore href="/blog" label="Lihat Semua Artikel" />
        </div>
      </div>
    </section>
  );
});

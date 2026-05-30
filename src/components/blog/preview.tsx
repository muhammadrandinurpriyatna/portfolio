import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { BLOG_POSTS } from '../../data/blog';
import { text, useLocale } from '../../contexts/locale-context';

export default component$(() => {
  const ref = useSignal<Element>();
  const { locale } = useLocale();
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
        <div class="flex items-end justify-between gap-5 mb-3.5 reveal">
          <div>
            <span class="font-mono text-[11px] tracking-[3px] uppercase text-sa block mb-2.5">Blog</span>
            <h2 class="text-[clamp(26px,4vw,40px)] font-extrabold text-ink leading-[1.15]">{text(locale.value, 'Tulisan Terbaru', 'Latest Posts')}</h2>
          </div>
          <Link href="/blog" class="shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-sa/10 border border-sa/25 text-sa no-underline transition-all hover:bg-sa hover:text-bg hover:border-sa hover:-translate-y-0.5">
            {text(locale.value, 'Lihat selengkapnya', 'View more')}
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        <div class="w-[52px] h-[3px] bg-sa rounded-sm mb-16 reveal d-200" />

        <div class="relative">
          <div>
            <div class="grid grid-cols-3 gap-6 max-[900px]:grid-cols-2 max-[640px]:grid-cols-1">
              {latest.map((post, i) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  class="bg-surf border border-bdr rounded-[18px] overflow-hidden flex flex-col no-underline text-inherit transition-all duration-300 hover:-translate-y-1.5 hover:border-sa/40 hover:shadow-card reveal-scale group"
                  style={`transition-delay:${i * 100}ms`}
                >
                  <div class={`relative h-[140px] flex items-center justify-center overflow-hidden shrink-0 ${post.grad}`}>
                    <span class="text-[44px] z-[1] transition-transform duration-500 group-hover:scale-110">{post.emoji}</span>
                    <span class="absolute bottom-2.5 left-3 font-mono text-[10px] uppercase tracking-[1px] px-2 py-0.5 rounded bg-black/35 text-white/90 backdrop-blur border border-white/12 z-[1]">{locale.value === 'id' ? post.category : post.categoryEn}</span>
                  </div>
                  <div class="p-5 flex-1 flex flex-col gap-2">
                    <div class="flex items-center justify-between">
                      <span class="text-[11px] text-ink-3 font-mono">{post.date}</span>
                      <span class="text-[11px] text-ink-3 font-mono">{locale.value === 'id' ? post.readTime : post.readTimeEn}</span>
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
        </div>
      </div>
    </section>
  );
});

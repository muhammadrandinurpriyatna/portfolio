import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import { PROJECTS } from '../../data/portfolio';
import { text, useLocale } from '../../contexts/locale-context';

export default component$(() => {
  const ref = useSignal<Element>();
  const { locale } = useLocale();
  const featured = PROJECTS.filter((p) => p.featured);

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
    <section id="portfolio" ref={ref} class="bg-bg-soft">
      <div class="max-w-[1100px] mx-auto py-28 px-6">
        <div class="flex items-end justify-between gap-5 mb-3.5 reveal">
          <div>
            <span class="font-mono text-[11px] tracking-[3px] uppercase text-sa block mb-2.5">{text(locale.value, 'Portofolio', 'Portfolio')}</span>
            <h2 class="text-[clamp(26px,4vw,40px)] font-extrabold text-ink leading-[1.15]">{text(locale.value, 'Proyek Unggulan', 'Featured Projects')}</h2>
          </div>
          <a href="/portfolio" class="shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-sa/10 border border-sa/25 text-sa no-underline transition-all hover:bg-sa hover:text-bg hover:border-sa hover:-translate-y-0.5">
            {text(locale.value, 'Lihat selengkapnya', 'View more')}
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        <div class="w-[52px] h-[3px] bg-sa rounded-sm mb-16 reveal d-200" />

        <div class="relative">
          <div>
            <div class="grid grid-cols-3 gap-6 max-[900px]:grid-cols-2 max-[640px]:grid-cols-1">
              {featured.map((p, i) => (
                <a
                  key={p.title}
                  href={`/portfolio/${p.slug}`}
                  class="bg-surf border border-bdr rounded-[18px] overflow-hidden flex flex-col no-underline text-inherit transition-all duration-300 relative hover:-translate-y-1.5 hover:border-sa/45 hover:shadow-[0_24px_48px_rgb(0_0_0/.45)] reveal-scale group"
                  style={`transition-delay:${i * 100}ms`}
                >
                  <div class="relative h-[180px] overflow-hidden shrink-0">
                    <div class={`absolute inset-0 flex items-center justify-center text-[56px] transition-transform duration-500 group-hover:scale-105 ${p.grad}`}>{p.emoji}</div>
                    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-surf/100" />
                    <span class="absolute top-3.5 left-3.5 font-mono text-[10px] uppercase tracking-[1px] px-2.5 py-1 rounded-md bg-black/40 text-white/90 backdrop-blur-lg border border-white/15 z-[1]">{locale.value === 'id' ? p.category : p.categoryEn}</span>
                  </div>
                  <div class="px-[22px] py-[22px] flex-1 flex flex-col gap-2.5">
                    <div class="text-base font-bold text-ink leading-[1.3]">{locale.value === 'id' ? p.title : p.titleEn}</div>
                    <p class="text-[13.5px] text-ink-2 leading-[1.65] flex-1">{locale.value === 'id' ? p.desc : p.descEn}</p>
                    <div class="flex flex-wrap gap-1.5 mt-1">
                      {p.tags.map((tag) => (
                        <span key={tag} class="font-mono text-[11px] px-2.5 py-0.5 rounded-[5px] bg-sa/8 border border-sa/14 text-ink-3 transition-all group-hover:border-sa/28 group-hover:text-ink-2">{tag}</span>
                      ))}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

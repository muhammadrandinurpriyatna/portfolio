import { $, component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { PROJECTS } from '../../data/portfolio';
import { text, useLocale } from '../../contexts/locale-context';

const categories = (locale: 'id' | 'en') => [
  locale === 'id' ? 'Semua' : 'All',
  ...Array.from(new Set(PROJECTS.map((p) => locale === 'id' ? p.category : p.categoryEn))),
];

export default component$(() => {
  const ref = useSignal<Element>();
  const { locale } = useLocale();
  const activeFilter = useSignal('Semua');

  useVisibleTask$(({ track }) => {
    track(() => locale.value);
    activeFilter.value = text(locale.value, 'Semua', 'All');
  });

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
            timers.push(window.setTimeout(() => el.classList.add('visible'), i * 80));
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

  const setFilter = $((cat: string) => { activeFilter.value = cat; });
  const filteredProjects = PROJECTS.filter(
    (p) =>
      activeFilter.value === text(locale.value, 'Semua', 'All') ||
      activeFilter.value === (locale.value === 'id' ? p.category : p.categoryEn),
  );

  return (
    <section id="portfolio" ref={ref} class="bg-bg-soft">
      <div class="max-w-[1100px] mx-auto py-16 px-6">
        <div class="flex flex-wrap gap-2 mb-12 reveal">
          {categories(locale.value).map((cat) => (
            <button
              key={cat}
              class={`font-mono text-xs px-4 py-1.5 rounded-lg border cursor-pointer transition-all hover:bg-sa/12 hover:border-sa hover:text-sa hover:scale-110 hover:rotate-[5deg] ${activeFilter.value === cat ? 'bg-sa/12 border-sa text-sa' : 'border-bdr-hi bg-transparent text-ink-2'}`}
              onClick$={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div class="grid grid-cols-3 gap-6 max-[900px]:grid-cols-2 max-[640px]:grid-cols-1">
          {filteredProjects.map((p, i) => (
            <Link
              key={p.title}
              href={`/portfolio/${p.slug}`}
              class="bg-surf border border-bdr rounded-[18px] overflow-hidden flex flex-col no-underline text-inherit transition-all duration-300 relative hover:-translate-y-1.5 hover:border-sa/45 hover:shadow-[0_24px_48px_rgb(0_0_0/.45)] reveal-scale visible group after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:translate-y-1/2 after:scale-0 after:w-3.5 after:h-3.5 after:rounded-full after:bg-sa after:shadow-[0_0_16px_rgb(var(--sa))] after:transition-[transform,opacity] after:duration-300 after:z-[2] hover:after:scale-100 hover:after:opacity-100"
              style={`transition-delay:${i * 80}ms`}
            >
              <div class="relative h-[180px] overflow-hidden shrink-0">
                <div class={`absolute inset-0 flex items-center justify-center text-[56px] transition-transform duration-500 group-hover:scale-105 ${p.grad}`}>{p.emoji}</div>
                <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-surf/100" />
                <span class="absolute top-3.5 left-3.5 font-mono text-[10px] uppercase tracking-[1px] px-2.5 py-1 rounded-md bg-black/40 text-white/90 backdrop-blur-lg border border-white/15 z-[1]">{locale.value === 'id' ? p.category : p.categoryEn}</span>
                <span class="absolute top-3.5 right-3.5 inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[1px] px-2.5 py-1 rounded-md bg-black/40 text-white/90 backdrop-blur-lg border border-white/15 z-[1] opacity-0 -translate-y-1.5 transition-all group-hover:opacity-100 group-hover:translate-y-0">
                  Detail
                </span>
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
});

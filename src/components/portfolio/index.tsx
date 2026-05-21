import { $, component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import { PROJECTS } from '../../data/portfolio';

const ALL_CATEGORIES = ['All', ...Array.from(new Set(PROJECTS.map((p) => p.category)))];

export default component$(() => {
  const ref = useSignal<Element>();
  const activeFilter = useSignal('All');

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

  return (
    <section id="portfolio" ref={ref} class="bg-bg-soft">
      <div class="max-w-[1100px] mx-auto py-28 px-6">
        <span class="font-mono text-[11px] tracking-[3px] uppercase text-sa block mb-2.5 reveal">Portofolio</span>
        <h2 class="text-[clamp(26px,4vw,40px)] font-extrabold text-ink mb-3.5 leading-[1.15] reveal d-100">Proyek yang Pernah Dikerjakan</h2>
        <div class="w-[52px] h-[3px] bg-sa rounded-sm mb-16 reveal d-200" />

        <div class="flex flex-wrap gap-2 mb-12 reveal d-300">
          {ALL_CATEGORIES.map((cat) => (
            <button
              key={cat}
              class={`font-mono text-xs px-4 py-1.5 rounded-lg border cursor-pointer transition-all hover:bg-sa/12 hover:border-sa hover:text-sa ${activeFilter.value === cat ? 'bg-sa/12 border-sa text-sa' : 'border-bdr-hi bg-transparent text-ink-2'}`}
              onClick$={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div class="grid grid-cols-3 gap-6 max-[900px]:grid-cols-2 max-[640px]:grid-cols-1">
          {PROJECTS.map((p, i) => (
            <div
              key={p.title}
              class={`bg-surf border border-bdr rounded-[18px] overflow-hidden flex flex-col transition-all duration-300 relative hover:-translate-y-1.5 hover:border-sa/45 hover:shadow-[0_24px_48px_rgb(0_0_0/.45)] reveal-scale group after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:translate-y-1/2 after:scale-0 after:w-3.5 after:h-3.5 after:rounded-full after:bg-sa after:shadow-[0_0_16px_rgb(var(--sa))] after:transition-[transform,opacity] after:duration-300 after:z-[2] hover:after:scale-100 hover:after:opacity-100 ${activeFilter.value !== 'All' && activeFilter.value !== p.category ? 'hidden-card' : ''}`}
              style={`transition-delay:${i * 80}ms`}
            >
              <div class="relative h-[180px] overflow-hidden shrink-0">
                <div class={`absolute inset-0 flex items-center justify-center text-[56px] transition-transform duration-500 group-hover:scale-105 ${p.grad}`}>{p.emoji}</div>
                <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-surf/100" />
                <span class="absolute top-3.5 left-3.5 font-mono text-[10px] uppercase tracking-[1px] px-2.5 py-1 rounded-md bg-black/40 text-white/90 backdrop-blur-lg border border-white/15 z-[1]">{p.category}</span>
                <div class="absolute top-3.5 right-3.5 flex gap-2 z-[1] opacity-0 -translate-y-1.5 transition-all group-hover:opacity-100 group-hover:translate-y-0">
                  {p.github && (
                    <a href={p.github} class="w-[34px] h-[34px] flex items-center justify-center bg-black/50 backdrop-blur-lg border border-white/20 rounded-lg text-white no-underline transition-all hover:bg-sa hover:border-sa hover:scale-110" title="GitHub" target="_blank" rel="noreferrer">
                      <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                    </a>
                  )}
                  {p.live && (
                    <a href={p.live} class="w-[34px] h-[34px] flex items-center justify-center bg-black/50 backdrop-blur-lg border border-white/20 rounded-lg text-white no-underline transition-all hover:bg-sa hover:border-sa hover:scale-110" title="Live Demo" target="_blank" rel="noreferrer">
                      <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                        <polyline points="15 3 21 3 21 9"/>
                        <line x1="10" y1="14" x2="21" y2="3"/>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
              <div class="px-[22px] py-[22px] flex-1 flex flex-col gap-2.5">
                <div class="text-base font-bold text-ink leading-[1.3]">{p.title}</div>
                <p class="text-[13.5px] text-ink-2 leading-[1.65] flex-1">{p.desc}</p>
                <div class="flex flex-wrap gap-1.5 mt-1">
                  {p.tags.map((tag) => (
                    <span key={tag} class="font-mono text-[11px] px-2.5 py-0.5 rounded-[5px] bg-sa/8 border border-sa/14 text-ink-3 transition-all group-hover:border-sa/28 group-hover:text-ink-2">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import { PROJECTS } from '../../data/portfolio';
import { SeeMore } from '../ui/see-more';

export default component$(() => {
  const ref = useSignal<Element>();
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
        <div class="flex items-center gap-2 mb-2.5 reveal">
          <svg class="w-3.5 h-3.5 text-sa shrink-0" viewBox="0 0 80 80" fill="currentColor"><path d="M10,10 L33,10 Q33,2 40,2 Q47,2 47,10 L70,10 L70,33 Q78,33 78,40 Q78,47 70,47 L70,70 L47,70 Q47,62 40,62 Q33,62 33,70 L10,70 L10,47 Q2,47 2,40 Q2,33 10,33 Z"/></svg>
          <span class="font-mono text-[11px] tracking-[3px] uppercase text-sa">Portofolio</span>
        </div>
        <h2 class="text-[clamp(26px,4vw,40px)] font-extrabold text-ink mb-3.5 leading-[1.15] reveal d-100">Proyek Unggulan</h2>
        <div class="flex items-center gap-1.5 mb-16 reveal d-200">
          <svg class="w-4 h-4 text-sa" viewBox="0 0 80 80" fill="currentColor"><path d="M10,10 L33,10 Q33,2 40,2 Q47,2 47,10 L70,10 L70,33 Q78,33 78,40 Q78,47 70,47 L70,70 L47,70 Q47,62 40,62 Q33,62 33,70 L10,70 L10,47 Q2,47 2,40 Q2,33 10,33 Z"/></svg>
          <svg class="w-3 h-3 text-sa opacity-60" viewBox="0 0 80 80" fill="currentColor"><path d="M10,10 L33,10 Q33,2 40,2 Q47,2 47,10 L70,10 L70,33 Q78,33 78,40 Q78,47 70,47 L70,70 L47,70 Q47,62 40,62 Q33,62 33,70 L10,70 L10,47 Q2,47 2,40 Q2,33 10,33 Z"/></svg>
          <svg class="w-2 h-2 text-sa opacity-30" viewBox="0 0 80 80" fill="currentColor"><path d="M10,10 L33,10 Q33,2 40,2 Q47,2 47,10 L70,10 L70,33 Q78,33 78,40 Q78,47 70,47 L70,70 L47,70 Q47,62 40,62 Q33,62 33,70 L10,70 L10,47 Q2,47 2,40 Q2,33 10,33 Z"/></svg>
        </div>

        <div class="relative">
          <div class="preview-clamp" style="--ph:310px;--pm:50%">
            <div class="grid grid-cols-3 gap-6 max-[900px]:grid-cols-2 max-[640px]:grid-cols-1">
              {featured.map((p, i) => (
                <div
                  key={p.title}
                  class="bg-surf border border-bdr rounded-[18px] overflow-hidden flex flex-col transition-all duration-300 relative hover:-translate-y-1.5 hover:border-sa/45 hover:shadow-[0_24px_48px_rgb(0_0_0/.45)] reveal-scale group"
                  style={`transition-delay:${i * 100}ms`}
                >
                  <div class="relative h-[180px] overflow-hidden shrink-0">
                    <div class={`absolute inset-0 flex items-center justify-center text-[56px] transition-transform duration-500 group-hover:scale-105 ${p.grad}`}>{p.emoji}</div>
                    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-surf/100" />
                    <span class="absolute top-3.5 left-3.5 font-mono text-[10px] uppercase tracking-[1px] px-2.5 py-1 rounded-md bg-black/40 text-white/90 backdrop-blur-lg border border-white/15 z-[1]">{p.category}</span>
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
          <SeeMore href="/portfolio" label="Lihat Semua Proyek" />
        </div>
      </div>
    </section>
  );
});

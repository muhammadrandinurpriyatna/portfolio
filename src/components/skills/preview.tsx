import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import { ALL_SKILLS } from '../../data/skills';
import { SeeMore } from '../ui/see-more';

export default component$(() => {
  const ref = useSignal<Element>();

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
            timers.push(window.setTimeout(() => el.classList.add('visible'), i * 60));
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
    <section id="skills" ref={ref} class="bg-bg-soft">
      <div class="max-w-[1100px] mx-auto py-28 px-6">
        <div class="flex items-center gap-2 mb-2.5 reveal">
          <svg class="w-3.5 h-3.5 text-sa shrink-0" viewBox="0 0 80 80" fill="currentColor"><path d="M10,10 L33,10 Q33,2 40,2 Q47,2 47,10 L70,10 L70,33 Q78,33 78,40 Q78,47 70,47 L70,70 L47,70 Q47,62 40,62 Q33,62 33,70 L10,70 L10,47 Q2,47 2,40 Q2,33 10,33 Z"/></svg>
          <span class="font-mono text-[11px] tracking-[3px] uppercase text-sa">Kemampuan</span>
        </div>
        <h2 class="text-[clamp(26px,4vw,40px)] font-extrabold text-ink mb-3.5 leading-[1.15] reveal d-100">Tech Stack</h2>
        <div class="flex items-center gap-1.5 mb-16 reveal d-200">
          <svg class="w-4 h-4 text-sa" viewBox="0 0 80 80" fill="currentColor"><path d="M10,10 L33,10 Q33,2 40,2 Q47,2 47,10 L70,10 L70,33 Q78,33 78,40 Q78,47 70,47 L70,70 L47,70 Q47,62 40,62 Q33,62 33,70 L10,70 L10,47 Q2,47 2,40 Q2,33 10,33 Z"/></svg>
          <svg class="w-3 h-3 text-sa opacity-60" viewBox="0 0 80 80" fill="currentColor"><path d="M10,10 L33,10 Q33,2 40,2 Q47,2 47,10 L70,10 L70,33 Q78,33 78,40 Q78,47 70,47 L70,70 L47,70 Q47,62 40,62 Q33,62 33,70 L10,70 L10,47 Q2,47 2,40 Q2,33 10,33 Z"/></svg>
          <svg class="w-2 h-2 text-sa opacity-30" viewBox="0 0 80 80" fill="currentColor"><path d="M10,10 L33,10 Q33,2 40,2 Q47,2 47,10 L70,10 L70,33 Q78,33 78,40 Q78,47 70,47 L70,70 L47,70 Q47,62 40,62 Q33,62 33,70 L10,70 L10,47 Q2,47 2,40 Q2,33 10,33 Z"/></svg>
        </div>

        <div class="relative">
          <div class="preview-clamp" style="--ph:190px;--pm:40%">
            <div class="flex flex-wrap gap-2.5 reveal d-300">
              {ALL_SKILLS.map((tag) => (
                <span key={tag} class="font-mono text-[13px] px-4 py-2 rounded-lg bg-sa/8 border border-sa/16 text-ink-2 transition-all cursor-default hover:bg-sa/16 hover:border-sa hover:text-sa hover:-translate-y-0.5">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <SeeMore href="/skills" label="Lihat Semua Skill" />
        </div>
      </div>
    </section>
  );
});

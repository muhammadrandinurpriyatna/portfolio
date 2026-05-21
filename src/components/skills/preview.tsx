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
        <span class="font-mono text-[11px] tracking-[3px] uppercase text-sa block mb-2.5 reveal">Kemampuan</span>
        <h2 class="text-[clamp(26px,4vw,40px)] font-extrabold text-ink mb-3.5 leading-[1.15] reveal d-100">Tech Stack</h2>
        <div class="w-[52px] h-[3px] bg-sa rounded-sm mb-16 reveal d-200" />

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

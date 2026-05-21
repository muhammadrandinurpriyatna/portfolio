import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import { SKILL_CATEGORIES } from '../../data/skills';

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

  return (
    <section id="skills" ref={ref} class="bg-bg-soft">
      <div class="max-w-[1100px] mx-auto py-28 px-6">
        <span class="font-mono text-[11px] tracking-[3px] uppercase text-sa block mb-2.5 reveal">Kemampuan</span>
        <h2 class="text-[clamp(26px,4vw,40px)] font-extrabold text-ink mb-3.5 leading-[1.15] reveal d-100">Tech Stack</h2>
        <div class="w-[52px] h-[3px] bg-sa rounded-sm mb-16 reveal d-200" />

        <div class="grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]">
          {SKILL_CATEGORIES.map((cat, i) => (
            <div
              key={cat.title}
              class="bg-surf border border-bdr rounded-2xl p-7 relative overflow-hidden transition-all duration-300 hover:border-sa/40 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgb(0_0_0/.3)] reveal-scale after:absolute after:top-0 after:right-0 after:w-[60px] after:h-[60px] after:bg-sa/8 after:rounded-[0_16px_0_60px] after:transition-all hover:after:w-20 hover:after:h-20"
              style={`transition-delay:${i * 80}ms`}
            >
              <div class="flex items-center gap-3 mb-5">
                <div class="w-10 h-10 bg-sa/14 rounded-xl flex items-center justify-center text-xl">{cat.icon}</div>
                <span class="text-sm font-bold text-ink tracking-[.5px]">{cat.title}</span>
              </div>
              <div class="flex flex-wrap gap-2">
                {cat.tags.map((tag) => (
                  <span key={tag} class="font-mono text-xs px-3 py-1.5 rounded-md bg-sa/8 border border-sa/18 text-ink-2 transition-all cursor-default hover:bg-sa/16 hover:border-sa hover:text-sa hover:-translate-y-0.5">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

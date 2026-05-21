import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import { EXPERIENCES } from '../../data/experience';

export default component$(() => {
  const ref = useSignal<Element>();

  useVisibleTask$(({ track }) => {
    track(() => ref.value);
    if (!ref.value) return;

    // Individual timeline items use inline styles
    const items = ref.value.querySelectorAll<HTMLElement>('.timeline-item');
    const itemObs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        const el = e.target as HTMLElement;
        if (e.isIntersecting) {
          el.style.opacity = '1';
          el.style.transform = 'translateX(0)';
        } else {
          el.style.opacity = '0';
          el.style.transform = 'translateX(-30px)';
        }
      });
    }, { threshold: 0.15 });
    items.forEach((item, i) => {
      item.style.opacity = '0';
      item.style.transform = 'translateX(-30px)';
      item.style.transition = `opacity .7s ease ${i * 120}ms, transform .7s ease ${i * 120}ms`;
      itemObs.observe(item);
    });

    // Section header uses CSS classes
    let timers: number[] = [];
    const headerObs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        const els = e.target.querySelectorAll<HTMLElement>('.reveal, .reveal-l');
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
    headerObs.observe(ref.value);

    return () => {
      itemObs.disconnect();
      headerObs.disconnect();
      timers.forEach(clearTimeout);
    };
  });

  return (
    <section id="experience" ref={ref} class="bg-bg">
      <div class="max-w-[1100px] mx-auto py-28 px-6">
        <span class="font-mono text-[11px] tracking-[3px] uppercase text-sa block mb-2.5 reveal">Karir</span>
        <h2 class="text-[clamp(26px,4vw,40px)] font-extrabold text-ink mb-3.5 leading-[1.15] reveal d-100">Pengalaman Kerja</h2>
        <div class="w-[52px] h-[3px] bg-sa rounded-sm mb-16 reveal d-200" />

        <div class="relative pl-10">
          <div class="absolute left-[7px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-sa via-sa/20 to-transparent" />

          {EXPERIENCES.map((exp) => (
            <div key={exp.role + exp.company} class="timeline-item relative mb-[52px] group">
              <div class="absolute -left-9 top-[6px] w-4 h-4 rounded-full bg-surf border-2 border-sa z-[1] transition-all group-hover:bg-sa group-hover:shadow-[0_0_14px_rgb(var(--sa)/0.6)] group-hover:scale-125" />
              <div class="bg-surf border border-bdr rounded-2xl px-7 py-6 transition-all duration-300 hover:border-sa/35 hover:translate-x-1.5 hover:shadow-[0_14px_36px_rgb(0_0_0/.4)]">
                <span class={`inline-flex items-center gap-1 font-mono text-[11px] px-2.5 py-0.5 rounded-[5px] mb-1.5 ${exp.type === 'fulltime' ? 'bg-ter/10 text-ter border border-ter/20' : 'bg-sec/10 text-sec border border-sec/20'}`}>
                  {exp.type === 'fulltime' ? '● Full Time' : '◆ Internship'}
                </span>
                <div class="flex justify-between items-start gap-4 mb-1.5 flex-wrap">
                  <span class="text-[17px] font-bold text-ink">{exp.role}</span>
                  <span class="font-mono text-[11px] text-sa bg-sa/8 px-2.5 py-1 rounded-md border border-sa/20 whitespace-nowrap">{exp.date}</span>
                </div>
                <div class="text-[13.5px] text-sa font-medium mb-4 flex items-center gap-1.5 before:content-[''] before:w-4 before:h-px before:bg-sa">
                  {exp.company} · {exp.location}
                </div>
                <ul class="list-none flex flex-col gap-2">
                  {exp.points.map((p) => (
                    <li key={p} class="text-sm text-ink-2 leading-[1.6] flex gap-2.5">
                      <span class="text-sa text-xs mt-0.5 shrink-0">▸</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

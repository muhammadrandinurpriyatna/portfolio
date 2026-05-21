import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import { EXPERIENCES } from '../../data/experience';
import { SeeMore } from '../ui/see-more';

export default component$(() => {
  const ref = useSignal<Element>();
  const preview = EXPERIENCES.slice(0, 2);

  useVisibleTask$(({ track }) => {
    track(() => ref.value);
    if (!ref.value) return;

    let timers: number[] = [];

    // Cards use inline styles — observe individually
    const items = ref.value.querySelectorAll<HTMLElement>('.exp-preview-card');
    const cardObs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        const el = e.target as HTMLElement;
        if (e.isIntersecting) {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        } else {
          el.style.opacity = '0';
          el.style.transform = 'translateY(24px)';
        }
      });
    }, { threshold: 0.1 });
    items.forEach((el, i) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(24px)';
      el.style.transition = `opacity .6s ease ${i * 120}ms, transform .6s ease ${i * 120}ms`;
      cardObs.observe(el);
    });

    // Section header uses CSS classes
    const headerObs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        const els = e.target.querySelectorAll<HTMLElement>('.reveal');
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
      cardObs.disconnect();
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

        <div class="relative">
          <div class="preview-clamp" style="--ph:210px;--pm:45%">
            <div class="flex flex-col gap-4">
              {preview.map((exp) => (
                <div key={exp.role + exp.company} class="exp-preview-card bg-surf border border-bdr rounded-2xl px-6 py-5">
                  <div class="flex justify-between items-start gap-4 flex-wrap mb-1">
                    <div>
                      <span class={`inline-flex items-center gap-1 font-mono text-[11px] px-2.5 py-0.5 rounded-[5px] mb-1.5 ${exp.type === 'fulltime' ? 'bg-ter/10 text-ter border border-ter/20' : 'bg-sec/10 text-sec border border-sec/20'}`}>
                        {exp.type === 'fulltime' ? '● Full Time' : '◆ Internship'}
                      </span>
                      <div class="text-[16px] font-bold text-ink">{exp.role}</div>
                      <div class="text-[13px] text-sa font-medium mt-0.5">{exp.company} · {exp.location}</div>
                    </div>
                    <span class="font-mono text-[11px] text-sa bg-sa/8 px-2.5 py-1 rounded-md border border-sa/20 whitespace-nowrap">{exp.date}</span>
                  </div>
                  <p class="text-sm text-ink-2 leading-[1.6] mt-2">{exp.points[0]}</p>
                </div>
              ))}
            </div>
          </div>
          <SeeMore href="/experience" label="Lihat Semua Pengalaman" />
        </div>
      </div>
    </section>
  );
});

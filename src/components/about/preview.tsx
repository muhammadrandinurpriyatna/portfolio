import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
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
            timers.push(window.setTimeout(() => el.classList.add('visible'), i * 80));
          });
        } else {
          timers.forEach(clearTimeout);
          timers = [];
          els.forEach((el) => el.classList.remove('visible'));
        }
      });
    }, { threshold: 0.15 });

    observer.observe(ref.value);
    return () => { observer.disconnect(); timers.forEach(clearTimeout); };
  });

  return (
    <section id="about" ref={ref} class="bg-bg">
      <div class="max-w-[1100px] mx-auto py-28 px-6">
        <span class="font-mono text-[11px] tracking-[3px] uppercase text-sa block mb-2.5 reveal">Tentang Saya</span>
        <h2 class="text-[clamp(26px,4vw,40px)] font-extrabold text-ink mb-3.5 leading-[1.15] reveal d-100">Siapa Saya?</h2>
        <div class="w-[52px] h-[3px] bg-sa rounded-sm mb-16 reveal d-200" />

        <div class="relative">
          <div class="preview-clamp" style="--ph:360px;--pm:50%">
            <div class="grid grid-cols-2 gap-[60px] items-center max-[900px]:grid-cols-1">
              <div>
                <p class="text-ink-2 text-[15.5px] leading-[1.8] mb-5 reveal d-200">
                  Saya adalah seorang <strong class="text-ink font-semibold">Full Stack Developer</strong> yang berbasis di Bogor, Jawa Barat,
                  dengan keahlian dalam menciptakan pengalaman web yang menarik dan fungsional.
                </p>
                <p class="text-ink-2 text-[15.5px] leading-[1.8] reveal d-300">
                  Selama lebih dari 3 tahun, saya berkontribusi di berbagai perusahaan teknologi —
                  menangani pengembangan <strong class="text-ink font-semibold">frontend</strong> maupun <strong class="text-ink font-semibold">backend</strong> secara menyeluruh.
                </p>
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div class="bg-surf border border-bdr rounded-[14px] p-6 transition-all duration-300 relative overflow-hidden hover:border-sa/35 hover:-translate-y-0.5 hover:shadow-card-sm reveal-scale d-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:h-0.5 before:bg-sa before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100">
                  <div class="w-11 h-11 bg-sa/12 rounded-xl flex items-center justify-center mb-3.5 text-[22px]">🎨</div>
                  <h4 class="text-[15px] font-bold text-ink mb-1.5">Frontend</h4>
                  <p class="text-[13px] text-ink-3 leading-[1.5]">Vue.js, React, Nuxt/Next</p>
                </div>
                <div class="bg-surf border border-bdr rounded-[14px] p-6 transition-all duration-300 relative overflow-hidden hover:border-sa/35 hover:-translate-y-0.5 hover:shadow-card-sm reveal-scale d-300 before:absolute before:bottom-0 before:left-0 before:right-0 before:h-0.5 before:bg-sa before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100">
                  <div class="w-11 h-11 bg-sa/12 rounded-xl flex items-center justify-center mb-3.5 text-[22px]">⚙️</div>
                  <h4 class="text-[15px] font-bold text-ink mb-1.5">Backend</h4>
                  <p class="text-[13px] text-ink-3 leading-[1.5]">Laravel, PHP, Python</p>
                </div>
                <div class="bg-surf border border-bdr rounded-[14px] p-6 transition-all duration-300 relative overflow-hidden hover:border-sa/35 hover:-translate-y-0.5 hover:shadow-card-sm reveal-scale d-400 before:absolute before:bottom-0 before:left-0 before:right-0 before:h-0.5 before:bg-sa before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100">
                  <div class="w-11 h-11 bg-sa/12 rounded-xl flex items-center justify-center mb-3.5 text-[22px]">🗄️</div>
                  <h4 class="text-[15px] font-bold text-ink mb-1.5">Database</h4>
                  <p class="text-[13px] text-ink-3 leading-[1.5]">MySQL & PostgreSQL</p>
                </div>
                <div class="bg-surf border border-bdr rounded-[14px] p-6 transition-all duration-300 relative overflow-hidden hover:border-sa/35 hover:-translate-y-0.5 hover:shadow-card-sm reveal-scale d-500 before:absolute before:bottom-0 before:left-0 before:right-0 before:h-0.5 before:bg-sa before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100">
                  <div class="w-11 h-11 bg-sa/12 rounded-xl flex items-center justify-center mb-3.5 text-[22px]">🎯</div>
                  <h4 class="text-[15px] font-bold text-ink mb-1.5">UI/UX</h4>
                  <p class="text-[13px] text-ink-3 leading-[1.5]">Design & Prototyping</p>
                </div>
              </div>
            </div>
          </div>
          <SeeMore href="/about" label="Selengkapnya Tentang Saya" />
        </div>
      </div>
    </section>
  );
});

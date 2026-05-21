import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';

export default component$(() => {
  const ref = useSignal<Element>();

  useVisibleTask$(({ track }) => {
    track(() => ref.value);
    if (!ref.value) return;

    let timers: number[] = [];

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        const els = e.target.querySelectorAll<HTMLElement>(
          '.reveal, .reveal-l, .reveal-r, .reveal-scale'
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
    <section id="contact" ref={ref} class="bg-bg">
      <div class="max-w-[1100px] mx-auto py-28 px-6">
        <div class="flex items-center gap-2 mb-2.5 reveal">
          <svg class="w-3.5 h-3.5 text-sa shrink-0" viewBox="0 0 80 80" fill="currentColor"><path d="M10,10 L33,10 Q33,2 40,2 Q47,2 47,10 L70,10 L70,33 Q78,33 78,40 Q78,47 70,47 L70,70 L47,70 Q47,62 40,62 Q33,62 33,70 L10,70 L10,47 Q2,47 2,40 Q2,33 10,33 Z"/></svg>
          <span class="font-mono text-[11px] tracking-[3px] uppercase text-sa">Get In Touch</span>
        </div>
        <h2 class="text-[clamp(26px,4vw,40px)] font-extrabold text-ink mb-3.5 leading-[1.15] reveal d-100">Hubungi Saya</h2>
        <div class="flex items-center gap-1.5 mb-16 reveal d-200">
          <svg class="w-4 h-4 text-sa" viewBox="0 0 80 80" fill="currentColor"><path d="M10,10 L33,10 Q33,2 40,2 Q47,2 47,10 L70,10 L70,33 Q78,33 78,40 Q78,47 70,47 L70,70 L47,70 Q47,62 40,62 Q33,62 33,70 L10,70 L10,47 Q2,47 2,40 Q2,33 10,33 Z"/></svg>
          <svg class="w-3 h-3 text-sa opacity-60" viewBox="0 0 80 80" fill="currentColor"><path d="M10,10 L33,10 Q33,2 40,2 Q47,2 47,10 L70,10 L70,33 Q78,33 78,40 Q78,47 70,47 L70,70 L47,70 Q47,62 40,62 Q33,62 33,70 L10,70 L10,47 Q2,47 2,40 Q2,33 10,33 Z"/></svg>
          <svg class="w-2 h-2 text-sa opacity-30" viewBox="0 0 80 80" fill="currentColor"><path d="M10,10 L33,10 Q33,2 40,2 Q47,2 47,10 L70,10 L70,33 Q78,33 78,40 Q78,47 70,47 L70,70 L47,70 Q47,62 40,62 Q33,62 33,70 L10,70 L10,47 Q2,47 2,40 Q2,33 10,33 Z"/></svg>
        </div>

        <div class="grid grid-cols-2 gap-[60px] items-start max-[900px]:grid-cols-1">
          <div class="reveal-l d-200">
            <p class="text-[15.5px] text-ink-2 leading-[1.8] mb-8">
              Apakah Anda memiliki proyek yang ingin dikerjakan bersama, atau sekadar ingin
              berdiskusi tentang teknologi? Jangan ragu untuk menghubungi saya — saya selalu
              terbuka untuk peluang baru dan kolaborasi yang menarik.
            </p>

            <div class="flex flex-col gap-3.5">
              <a href="mailto:muhammadrandinurpriyatna@gmail.com" class="flex items-center gap-3.5 p-4 px-5 bg-surf border border-bdr rounded-xl no-underline text-ink transition-all duration-300 hover:border-sa hover:translate-x-1.5 hover:shadow-[0_8px_24px_rgb(var(--sa)/0.15)]">
                <div class="w-[42px] h-[42px] bg-sa/12 rounded-xl flex items-center justify-center shrink-0 [&>svg]:w-5 [&>svg]:h-5 [&>svg]:text-sa">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div>
                  <div class="text-[11px] text-ink-3 uppercase tracking-[1px] font-mono">Email</div>
                  <div class="text-sm text-ink font-medium mt-0.5">muhammadrandinurpriyatna@gmail.com</div>
                </div>
              </a>

              <a href="https://linkedin.com/in/randiprytn" target="_blank" rel="noreferrer" class="flex items-center gap-3.5 p-4 px-5 bg-surf border border-bdr rounded-xl no-underline text-ink transition-all duration-300 hover:border-sa hover:translate-x-1.5 hover:shadow-[0_8px_24px_rgb(var(--sa)/0.15)]">
                <div class="w-[42px] h-[42px] bg-sa/12 rounded-xl flex items-center justify-center shrink-0 [&>svg]:w-5 [&>svg]:h-5 [&>svg]:text-sa">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </div>
                <div>
                  <div class="text-[11px] text-ink-3 uppercase tracking-[1px] font-mono">LinkedIn</div>
                  <div class="text-sm text-ink font-medium mt-0.5">linkedin.com/in/randiprytn</div>
                </div>
              </a>

              <a href="tel:+6282110474856" class="flex items-center gap-3.5 p-4 px-5 bg-surf border border-bdr rounded-xl no-underline text-ink transition-all duration-300 hover:border-sa hover:translate-x-1.5 hover:shadow-[0_8px_24px_rgb(var(--sa)/0.15)]">
                <div class="w-[42px] h-[42px] bg-sa/12 rounded-xl flex items-center justify-center shrink-0 [&>svg]:w-5 [&>svg]:h-5 [&>svg]:text-sa">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <div class="text-[11px] text-ink-3 uppercase tracking-[1px] font-mono">Telepon</div>
                  <div class="text-sm text-ink font-medium mt-0.5">+62 821 1047 4856</div>
                </div>
              </a>

              <div class="flex items-center gap-3.5 p-4 px-5 bg-surf border border-bdr rounded-xl text-ink" style="cursor:default;">
                <div class="w-[42px] h-[42px] bg-sa/12 rounded-xl flex items-center justify-center shrink-0 [&>svg]:w-5 [&>svg]:h-5 [&>svg]:text-sa">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <div class="text-[11px] text-ink-3 uppercase tracking-[1px] font-mono">Lokasi</div>
                  <div class="text-sm text-ink font-medium mt-0.5">Bogor, Jawa Barat 16720</div>
                </div>
              </div>
            </div>
          </div>

          <div class="reveal-r d-300">
            <div class="text-[15px] font-bold text-ink mb-4 mt-10">Referensi Kontak</div>

            <div class="bg-surf border border-bdr rounded-xl p-[18px] px-5 mb-3 transition-all hover:border-sa/30 hover:translate-x-1">
              <div class="text-sm font-semibold text-ink">Joko Setyawan</div>
              <div class="text-[12.5px] text-sec mt-[3px]">HRD</div>
              <div class="text-xs text-ink-3 mt-0.5">PT. Trawlbens Teknologi Anak Indonesia</div>
              <div class="text-xs text-pri mt-1 font-mono">+62 813 2516 2634</div>
            </div>

            <div class="bg-surf border border-bdr rounded-xl p-[18px] px-5 mb-3 transition-all hover:border-sa/30 hover:translate-x-1">
              <div class="text-sm font-semibold text-ink">Muhammad Ryanda Putra</div>
              <div class="text-[12.5px] text-sec mt-[3px]">Head of IT</div>
              <div class="text-xs text-ink-3 mt-0.5">PT. Trawlbens Teknologi Anak Indonesia</div>
              <div class="text-xs text-pri mt-1 font-mono">+62 878 9606 2181</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

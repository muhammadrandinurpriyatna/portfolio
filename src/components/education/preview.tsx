import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import { text, useLocale } from '../../contexts/locale-context';

export default component$(() => {
  const ref = useSignal<Element>();
  const { locale } = useLocale();

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
    }, { threshold: 0.15 });

    observer.observe(ref.value);
    return () => { observer.disconnect(); timers.forEach(clearTimeout); };
  });

  return (
    <section id="education" ref={ref} class="bg-bg-soft">
      <div class="max-w-[1100px] mx-auto py-28 px-6">
        <span class="font-mono text-[11px] tracking-[3px] uppercase text-sa block mb-2.5 reveal">{text(locale.value, 'Latar Belakang', 'Background')}</span>
        <h2 class="text-[clamp(26px,4vw,40px)] font-extrabold text-ink mb-3.5 leading-[1.15] reveal d-100">{text(locale.value, 'Pendidikan & Sertifikasi', 'Education & Certifications')}</h2>
        <div class="w-[52px] h-[3px] bg-sa rounded-sm mb-16 reveal d-200" />

        <div class="relative">
          <div>
            <div class="grid grid-cols-2 gap-6 max-[640px]:grid-cols-1">
              <div class="bg-surf border border-bdr rounded-2xl p-7 flex flex-col gap-3 transition-all duration-300 relative overflow-hidden before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px] before:bg-sa before:scale-x-0 before:transition-transform before:duration-300 before:origin-left hover:before:scale-x-100 hover:border-sa/40 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgb(0_0_0/.4)] reveal-scale d-200">
                <div class="w-[52px] h-[52px] bg-sa/12 rounded-[13px] flex items-center justify-center text-[26px]">🎓</div>
                <span class="font-mono text-[11px] text-sa bg-sa/10 px-2.5 py-0.5 rounded-[5px] border border-sa/20 w-fit">2019 – 2022</span>
                <div class="text-base font-bold text-ink leading-[1.3]">SMK Wikrama Bogor</div>
                <div class="text-[13px] text-ink-2">{text(locale.value, 'Rekayasa Perangkat Lunak', 'Software Engineering')}</div>
              </div>
              <div class="bg-surf border border-bdr rounded-2xl p-7 flex flex-col gap-3 transition-all duration-300 relative overflow-hidden before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px] before:bg-sa before:scale-x-0 before:transition-transform before:duration-300 before:origin-left hover:before:scale-x-100 hover:border-sa/40 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgb(0_0_0/.4)] reveal-scale d-300">
                <div class="w-[52px] h-[52px] bg-sa/12 rounded-[13px] flex items-center justify-center text-[26px]">📜</div>
                <span class="font-mono text-[11px] text-sa bg-sa/10 px-2.5 py-0.5 rounded-[5px] border border-sa/20 w-fit">2022</span>
                <div class="text-base font-bold text-ink leading-[1.3]">{text(locale.value, 'Sertifikat Kompetensi Pemrogram Web', 'Web Programmer Certificate of Competence')}</div>
                <div class="text-[13px] text-ink-2">BNSP — ID: TIK 1565 11603 2022</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

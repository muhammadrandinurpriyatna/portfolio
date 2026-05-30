import { component$ } from '@builder.io/qwik';
import { type DocumentHead } from '@builder.io/qwik-city';
import Education from '../../components/education';
import { text, useLocale } from '../../contexts/locale-context';

export default component$(() => {
  const { locale } = useLocale();

  return (
    <>
      <div class="pt-[100px] pb-10 bg-bg border-b border-bdr">
        <div class="max-w-[1100px] mx-auto px-6">
          <a href="/" class="inline-flex items-center gap-2 text-[13px] text-ink-3 no-underline font-mono mb-6 transition-all group hover:text-sa">
            <svg class="w-4 h-4 transition-transform group-hover:-translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
            {text(locale.value, 'Kembali', 'Back')}
          </a>
          <span class="block font-mono text-[11px] tracking-[3px] uppercase text-sa mb-2.5">{text(locale.value, 'Latar Belakang', 'Background')}</span>
          <h1 class="text-[clamp(28px,4vw,44px)] font-extrabold text-ink leading-[1.1]">{text(locale.value, 'Pendidikan & ', 'Education & ')}<span class="text-gradient">{text(locale.value, 'Sertifikasi', 'Certifications')}</span></h1>
        </div>
      </div>
      <Education />
    </>
  );
});

export const head: DocumentHead = {
  title: 'Pendidikan — Muhammad Randi Nur Priyatna',
  meta: [{ name: 'description', content: 'Riwayat pendidikan dan sertifikasi profesional.' }],
};

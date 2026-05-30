import { component$ } from '@builder.io/qwik';
import { Link, type DocumentHead } from '@builder.io/qwik-city';
import Portfolio from '../../components/portfolio';
import { text, useLocale } from '../../contexts/locale-context';
import { breadcrumbSchema, buildSeoHead } from '../../utils/seo';

export default component$(() => {
  const { locale } = useLocale();

  return (
    <>
      <div class="pt-[100px] pb-10 bg-bg border-b border-bdr">
        <div class="max-w-[1100px] mx-auto px-6">
          <Link href="/" class="inline-flex items-center gap-2 text-[13px] text-ink-3 no-underline font-mono mb-6 transition-all group hover:text-sa">
            <svg class="w-4 h-4 transition-transform group-hover:-translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
            {text(locale.value, 'Kembali', 'Back')}
          </Link>
          <span class="block font-mono text-[11px] tracking-[3px] uppercase text-sa mb-2.5">{text(locale.value, 'Portofolio', 'Portfolio')}</span>
          <h1 class="text-[clamp(28px,4vw,44px)] font-extrabold text-ink leading-[1.1]">{text(locale.value, 'Proyek yang Pernah ', 'Selected ')}<span class="text-gradient">{text(locale.value, 'Dikerjakan', 'Projects')}</span></h1>
        </div>
      </div>
      <Portfolio />
    </>
  );
});

export const head: DocumentHead = buildSeoHead({
  title: 'Portofolio Proyek',
  description: 'Kumpulan proyek yang pernah dikerjakan Muhammad Randi Nur Priyatna, termasuk sistem logistik, HRIS, jurnal akuntansi, POS, company profile, campaign profile, dan mini games HTML5.',
  path: '/portfolio',
  keywords: ['Portofolio Randi', 'Project Web Developer', 'Sistem Logistik', 'HRIS', 'POS', 'Company Profile', 'Mini Games HTML5'],
  scripts: [
    breadcrumbSchema([
      { name: 'Beranda', path: '/' },
      { name: 'Portofolio', path: '/portfolio' },
    ]),
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Portofolio Proyek',
      description: 'Kumpulan proyek web dan sistem digital Muhammad Randi Nur Priyatna.',
    },
  ],
});

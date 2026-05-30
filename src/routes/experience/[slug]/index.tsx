import { component$ } from '@builder.io/qwik';
import { type DocumentHead, routeLoader$ } from '@builder.io/qwik-city';
import { EXPERIENCES } from '../../../data/experience';
import { useLocale } from '../../../contexts/locale-context';
import { pick } from '../../../data/localized';
import { breadcrumbSchema, buildSeoHead } from '../../../utils/seo';

export const useExperience = routeLoader$(({ params, status }) => {
  const experience = EXPERIENCES.find((item) => item.slug === params.slug);
  if (!experience) {
    status(404);
    return null;
  }
  return experience;
});

export default component$(() => {
  const experience = useExperience();
  const { locale } = useLocale();

  if (!experience.value) {
    return (
      <div class="max-w-[1100px] mx-auto px-6 text-center pt-[140px]">
        <h1 class="text-[80px] font-extrabold text-ink mb-4">404</h1>
        <p class="text-ink-2 mb-8">Pengalaman kerja tidak ditemukan.</p>
        <a href="/#experience" class="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-sm font-semibold bg-transparent border border-bdr-hi text-ink-2 no-underline transition-all hover:border-pri hover:text-pri hover:-translate-y-0.5">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
          Kembali ke Pengalaman
        </a>
      </div>
    );
  }

  const exp = experience.value;
  const related = EXPERIENCES.filter((item) => item.slug !== exp.slug).slice(0, 3);
  const getTypeLabel = (type: string) =>
    type === 'fulltime' ? 'Penuh Waktu' : type === 'freelance' ? 'Lepas' : 'Magang';
  const getTypeClasses = (type: string) =>
    type === 'fulltime'
      ? 'bg-ter/10 text-ter border border-ter/20'
      : type === 'freelance'
        ? 'bg-pri/10 text-pri border border-pri/20'
        : 'bg-sec/10 text-sec border border-sec/20';
  const typeLabel = getTypeLabel(exp.type);

  return (
    <>
      <div class="pt-[100px] pb-10 bg-bg border-b border-bdr">
        <div class="max-w-[1100px] mx-auto px-6">
          <a href="/#experience" class="inline-flex items-center gap-2 text-[13px] text-ink-3 no-underline font-mono mb-6 transition-all group hover:text-sa">
            <svg class="w-4 h-4 transition-transform group-hover:-translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
            Semua Pengalaman
          </a>
        </div>
      </div>

      <article class="max-w-[760px] mx-auto pb-20">
        <div class="h-[280px] flex items-center justify-center relative overflow-hidden grad-2">
          <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,transparent,rgba(0,0,0,.35))]" />
          <span class="text-[76px] font-black text-white/95 z-[1] tracking-[-2px]">{exp.company.slice(0, 2).toUpperCase()}</span>
          <span class="absolute bottom-4 left-6 font-mono text-[11px] uppercase tracking-[1.2px] px-3 py-1 rounded-md bg-black/35 text-white/90 backdrop-blur border border-white/12 z-[1]">{typeLabel}</span>
        </div>

        <div class="px-6 pt-10">
          <header class="mb-12">
            <span class={`inline-block font-mono text-[11px] uppercase tracking-[1.5px] px-3 py-1 rounded-md mb-4 ${getTypeClasses(exp.type)}`}>
              {typeLabel}
            </span>
            <h1 class="text-[clamp(24px,4vw,38px)] font-extrabold text-ink leading-[1.2] mb-5">{pick(locale.value, exp.role)}</h1>
            <p class="text-[16px] text-ink-2 leading-[1.8] mb-6">
              {exp.company} - {exp.location}
            </p>

            <div class="flex gap-5 flex-wrap mb-5">
              <span class="flex items-center gap-1.5 text-[13px] text-ink-3 font-mono">
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <path d="M16 2v4M8 2v4M3 10h18" />
                </svg>
                {exp.date}
              </span>
              <span class="flex items-center gap-1.5 text-[13px] text-ink-3 font-mono">
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                  <path d="M12 21s7-4.35 7-11a7 7 0 1 0-14 0c0 6.65 7 11 7 11z" />
                  <circle cx="12" cy="10" r="2" />
                </svg>
                {exp.location}
              </span>
            </div>
          </header>

          <div class="prose">
            <h2>Ringkasan</h2>
            <p>
              {locale.value === 'id'
                ? <>Pada posisi {pick(locale.value, exp.role)} di {exp.company}, saya terlibat dalam pengembangan solusi digital yang mendukung kebutuhan produk, operasional, dan pengalaman pengguna.</>
                : <>As {pick(locale.value, exp.role)} at {exp.company}, I was involved in developing digital solutions that supported product, operational, and user experience needs.</>}
            </p>

            <h2>Tanggung Jawab</h2>
            <ul>
              {exp.points.map((point) => (
                <li key={pick(locale.value, point)}>{pick(locale.value, point)}</li>
              ))}
            </ul>

            <h2>Periode</h2>
            <p>
              {locale.value === 'id'
                ? `Posisi ini berlangsung pada periode ${exp.date} dengan penempatan di ${exp.location}.`
                : `This role took place during ${exp.date}, based in ${exp.location}.`}
            </p>
          </div>

          <div class="flex justify-between items-center pt-10 mt-10 border-t border-bdr flex-wrap gap-4">
            <a href="/#experience" class="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-sm font-semibold bg-transparent border border-bdr-hi text-ink-2 no-underline transition-all hover:border-pri hover:text-pri hover:-translate-y-0.5">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M19 12H5M12 5l-7 7 7 7" />
              </svg>
              Kembali ke Pengalaman
            </a>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section class="bg-bg-soft py-[60px]">
          <div class="max-w-[1100px] mx-auto px-6">
            <h2 class="text-[20px] font-bold text-ink mb-7">Pengalaman Lainnya</h2>
            <div class="grid grid-cols-3 gap-6 max-[900px]:grid-cols-2 max-[640px]:grid-cols-1">
              {related.map((item) => (
                <a key={item.slug} href={`/experience/${item.slug}`} class="bg-surf border border-bdr rounded-[18px] p-5 flex flex-col gap-3 no-underline text-inherit transition-all duration-300 hover:-translate-y-1.5 hover:border-sa/40 hover:shadow-card group">
                  <span class={`w-fit font-mono text-[10px] uppercase tracking-[1px] px-2 py-0.5 rounded border ${getTypeClasses(item.type)}`}>
                    {getTypeLabel(item.type)}
                  </span>
                  <div>
                    <h3 class="text-[15px] font-bold text-ink leading-[1.35] transition-colors group-hover:text-sa">{pick(locale.value, item.role)}</h3>
                    <p class="text-[13px] text-sa mt-1">{item.company}</p>
                  </div>
                  <p class="text-[12px] text-ink-3 font-mono">{item.date}</p>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
});

export const head: DocumentHead = ({ resolveValue }) => {
  const experience = resolveValue(useExperience);
  if (!experience) return buildSeoHead({
    title: 'Pengalaman Tidak Ditemukan',
    description: 'Halaman pengalaman kerja tidak ditemukan.',
    path: '/',
  });
  const role = pick('id', experience.role);
  return buildSeoHead({
    title: `${role} di ${experience.company}`,
    description: `${role} di ${experience.company}, ${experience.location}, periode ${experience.date}.`,
    path: `/experience/${experience.slug}`,
    keywords: [role, experience.company, 'Pengalaman Kerja', 'Full Stack Developer', 'Frontend Developer', 'IT Consultant'],
    scripts: [
      breadcrumbSchema([
        { name: 'Beranda', path: '/' },
        { name: 'Pengalaman', path: '/#experience' },
        { name: experience.company, path: `/experience/${experience.slug}` },
      ]),
      {
        '@context': 'https://schema.org',
        '@type': 'ProfilePage',
        name: `${role} - ${experience.company}`,
        description: `${role} di ${experience.company}, ${experience.date}.`,
        about: {
          '@type': 'Person',
          name: 'Muhammad Randi Nur Priyatna',
          jobTitle: role,
        },
      },
    ],
  });
};

const oldHead: DocumentHead = ({ resolveValue }) => {
  const experience = resolveValue(useExperience);
  if (!experience) return { title: 'Pengalaman Tidak Ditemukan' };
  return {
    title: `${pick('id', experience.role)} - ${experience.company} - Randi Portfolio`,
    meta: [
      { name: 'description', content: `${pick('id', experience.role)} di ${experience.company}, ${experience.date}.` },
      { property: 'og:title', content: `${pick('id', experience.role)} - ${experience.company}` },
      { property: 'og:description', content: `${pick('id', experience.role)} di ${experience.company}, ${experience.date}.` },
    ],
  };
};

import { component$ } from '@builder.io/qwik';
import { Link, type DocumentHead, routeLoader$ } from '@builder.io/qwik-city';
import { PROJECTS } from '../../../data/portfolio';
import { text, useLocale } from '../../../contexts/locale-context';
import { breadcrumbSchema, buildSeoHead } from '../../../utils/seo';

export const useProject = routeLoader$(({ params, status }) => {
  const project = PROJECTS.find((p) => p.slug === params.slug);
  if (!project) {
    status(404);
    return null;
  }
  return project;
});

export default component$(() => {
  const project = useProject();
  const { locale } = useLocale();

  if (!project.value) {
    return (
      <div class="max-w-[1100px] mx-auto px-6 text-center pt-[140px]">
        <h1 class="text-[80px] font-extrabold text-ink mb-4">404</h1>
        <p class="text-ink-2 mb-8">{text(locale.value, 'Proyek tidak ditemukan.', 'Project not found.')}</p>
        <Link href="/portfolio" class="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-sm font-semibold bg-transparent border border-bdr-hi text-ink-2 no-underline transition-all hover:border-pri hover:text-pri hover:-translate-y-0.5">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
          {text(locale.value, 'Kembali ke Portofolio', 'Back to Portfolio')}
        </Link>
      </div>
    );
  }

  const p = project.value;
  const related = PROJECTS.filter((item) => item.slug !== p.slug).slice(0, 3);
  const validGithub = p.github && p.github !== '#' ? p.github : '';
  const validLive = p.live && p.live !== '#' ? p.live : '';

  return (
    <>
      {/* Page header */}
      <div class="pt-[100px] pb-10 bg-bg border-b border-bdr">
        <div class="max-w-[1100px] mx-auto px-6">
          <Link href="/portfolio" class="inline-flex items-center gap-2 text-[13px] text-ink-3 no-underline font-mono mb-6 transition-all group hover:text-sa">
            <svg class="w-4 h-4 transition-transform group-hover:-translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
            {text(locale.value, 'Semua Proyek', 'All Projects')}
          </Link>
        </div>
      </div>

      {/* Project detail */}
      <article class="max-w-[760px] mx-auto pb-20">
        <div class={`h-[280px] flex items-center justify-center relative overflow-hidden ${p.grad}`}>
          <span class="text-[80px] z-[1]">{p.emoji}</span>
          <span class="absolute bottom-4 left-6 font-mono text-[11px] uppercase tracking-[1.2px] px-3 py-1 rounded-md bg-black/35 text-white/90 backdrop-blur border border-white/12 z-[1]">{locale.value === 'id' ? p.category : p.categoryEn}</span>
        </div>

        <div class="px-6 pt-10">
          <header class="mb-12">
            <span class="inline-block font-mono text-[11px] uppercase tracking-[1.5px] px-3 py-1 rounded-md bg-pri/10 border border-pri/20 text-pri mb-4">{locale.value === 'id' ? p.category : p.categoryEn}</span>
            <h1 class="text-[clamp(24px,4vw,38px)] font-extrabold text-ink leading-[1.2] mb-5">{locale.value === 'id' ? p.title : p.titleEn}</h1>
            <p class="text-[16px] text-ink-2 leading-[1.8] mb-6">{locale.value === 'id' ? p.desc : p.descEn}</p>

            <div class="flex gap-5 flex-wrap mb-5">
              <span class="flex items-center gap-1.5 text-[13px] text-ink-3 font-mono">
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                  <path d="M4 7h16M4 12h16M4 17h10" />
                </svg>
                {locale.value === 'id' ? p.category : p.categoryEn}
              </span>
              <span class="flex items-center gap-1.5 text-[13px] text-ink-3 font-mono">
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                  <path d="M12 3l2.7 5.47 6.03.88-4.36 4.25 1.03 6-5.4-2.84-5.4 2.84 1.03-6-4.36-4.25 6.03-.88L12 3z" />
                </svg>
                {p.featured ? text(locale.value, 'Proyek Unggulan', 'Featured Project') : text(locale.value, 'Proyek Portofolio', 'Portfolio Project')}
              </span>
            </div>

            <div class="flex flex-wrap gap-1.5">
              {p.tags.map((tag) => (
                <span key={tag} class="skill-tag font-mono text-[10px] px-2 py-0.5 rounded bg-pri/8 border border-pri/14 text-ink-3">{tag}</span>
              ))}
            </div>
          </header>

          <div class="prose">
            <h2>{text(locale.value, 'Ringkasan', 'Overview')}</h2>
            <p>{locale.value === 'id' ? p.overview : p.overviewEn}</p>
            <p>
              {locale.value === 'id'
                ? 'Konten detail pada halaman ini masih menggunakan data dummy yang disusun agar relevan dengan karakter dan kebutuhan masing-masing project.'
                : 'The detail content on this page still uses dummy data prepared to stay relevant to each project character and requirement.'}
            </p>

            <h2>{text(locale.value, 'Teknologi yang Digunakan', 'Tech Stack')}</h2>
            <p>
              {text(locale.value, 'Dibangun menggunakan', 'Built with')} {p.tags.join(', ')} {text(locale.value, 'untuk mendukung kebutuhan antarmuka, integrasi data, dan pengembangan fitur secara konsisten.', 'to support interface needs, data integration, and consistent feature development.')}
            </p>

            <h2>{text(locale.value, 'Peran', 'Role')}</h2>
            <p>{locale.value === 'id' ? p.role : p.roleEn}</p>
          </div>

          <div class="flex justify-between items-center pt-10 mt-10 border-t border-bdr flex-wrap gap-4">
            <Link href="/portfolio" class="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-sm font-semibold bg-transparent border border-bdr-hi text-ink-2 no-underline transition-all hover:border-pri hover:text-pri hover:-translate-y-0.5">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M19 12H5M12 5l-7 7 7 7" />
              </svg>
              {text(locale.value, 'Kembali ke Portofolio', 'Back to Portfolio')}
            </Link>
            <div class="flex items-center gap-2.5">
              {validLive && (
                <a href={validLive} target="_blank" rel="noreferrer" class="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold bg-sa text-bg no-underline transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgb(var(--sa)/0.25)]">
                  {text(locale.value, 'Demo Langsung', 'Live Demo')}
                </a>
              )}
              {validGithub && (
                <a href={validGithub} target="_blank" rel="noreferrer" class="w-11 h-11 flex items-center justify-center bg-surf border border-bdr rounded-xl text-ink-2 no-underline transition-all hover:border-pri hover:text-pri hover:-translate-y-0.5" title="GitHub">
                  <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
      </article>

      {/* Related projects */}
      {related.length > 0 && (
        <section class="bg-bg-soft py-[60px]">
          <div class="max-w-[1100px] mx-auto px-6">
            <h2 class="text-[20px] font-bold text-ink mb-7">{text(locale.value, 'Proyek Lainnya', 'More Projects')}</h2>
            <div class="grid grid-cols-3 gap-6 max-[900px]:grid-cols-2 max-[640px]:grid-cols-1">
              {related.map((project) => (
                <Link key={project.slug} href={`/portfolio/${project.slug}`} class="bg-surf border border-bdr rounded-[18px] overflow-hidden flex flex-col no-underline text-inherit transition-all duration-300 hover:-translate-y-1.5 hover:border-sa/40 hover:shadow-card group">
                  <div class={`relative h-[140px] flex items-center justify-center overflow-hidden shrink-0 ${project.grad}`}>
                    <span class="text-[44px] z-[1] transition-transform duration-500 group-hover:scale-110">{project.emoji}</span>
                    <span class="absolute bottom-2.5 left-3 font-mono text-[10px] uppercase tracking-[1px] px-2 py-0.5 rounded bg-black/35 text-white/90 backdrop-blur border border-white/12 z-[1]">{locale.value === 'id' ? project.category : project.categoryEn}</span>
                  </div>
                  <div class="p-5 flex-1 flex flex-col gap-2">
                    <h3 class="text-[15px] font-bold text-ink leading-[1.35] transition-colors group-hover:text-sa">{locale.value === 'id' ? project.title : project.titleEn}</h3>
                    <p class="text-[13px] text-ink-2 leading-[1.6] flex-1 line-clamp-3">{locale.value === 'id' ? project.desc : project.descEn}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
});

export const head: DocumentHead = ({ resolveValue }) => {
  const project = resolveValue(useProject);
  if (!project) return buildSeoHead({
    title: 'Proyek Tidak Ditemukan',
    description: 'Halaman proyek tidak ditemukan.',
    path: '/portfolio',
  });
  return buildSeoHead({
    title: `${project.title} - Studi Kasus Proyek`,
    description: project.desc,
    path: `/portfolio/${project.slug}`,
    keywords: [project.title, project.category, ...project.tags, 'Portfolio Project', 'Web Development'],
    scripts: [
      breadcrumbSchema([
        { name: 'Beranda', path: '/' },
        { name: 'Portofolio', path: '/portfolio' },
        { name: project.title, path: `/portfolio/${project.slug}` },
      ]),
      {
        '@context': 'https://schema.org',
        '@type': 'CreativeWork',
        name: project.title,
        alternateName: project.titleEn,
        description: project.desc,
        creator: { '@type': 'Person', name: 'Muhammad Randi Nur Priyatna' },
        keywords: project.tags.join(', '),
        genre: project.category,
      },
    ],
  });
};

const oldHead: DocumentHead = ({ resolveValue }) => {
  const project = resolveValue(useProject);
  if (!project) return { title: 'Proyek Tidak Ditemukan' };
  return {
    title: `${project.title} — Randi Portfolio`,
    meta: [
      { name: 'description', content: project.desc },
      { property: 'og:title', content: project.title },
      { property: 'og:description', content: project.desc },
    ],
  };
};

import { component$ } from '@builder.io/qwik';
import { type DocumentHead } from '@builder.io/qwik-city';
import Hero from '../components/hero';
import AboutPreview from '../components/about/preview';
import SkillsPreview from '../components/skills/preview';
import ExperiencePreview from '../components/experience/preview';
import PortfolioPreview from '../components/portfolio/preview';
import BlogPreview from '../components/blog/preview';
import EducationPreview from '../components/education/preview';
import Contact from '../components/contact';
import { buildSeoHead, personSchema, websiteSchema } from '../utils/seo';

export default component$(() => {
  return (
    <>
      <Hero />
      <AboutPreview />
      <SkillsPreview />
      <ExperiencePreview />
      <PortfolioPreview />
      <BlogPreview />
      <EducationPreview />
      <Contact />
    </>
  );
});

export const head: DocumentHead = buildSeoHead({
  title: 'Muhammad Randi Nur Priyatna - Pengembang Full Stack',
  description: 'Portfolio Muhammad Randi Nur Priyatna, pengembang full stack dari Bogor, Indonesia, dengan pengalaman membangun aplikasi web, sistem logistik, HRIS, POS, dan company profile.',
  path: '/',
  type: 'profile',
  keywords: ['Muhammad Randi Nur Priyatna', 'Full Stack Developer', 'Frontend Developer', 'Backend Developer', 'Laravel', 'Vue.js', 'React', 'Qwik', 'Portfolio Developer Indonesia'],
  scripts: [personSchema(), websiteSchema()],
});

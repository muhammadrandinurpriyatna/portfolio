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

export const head: DocumentHead = {
  title: 'Muhammad Randi Nur Priyatna — Full Stack Developer',
  meta: [
    {
      name: 'description',
      content: 'Full Stack Developer dari Bogor, Indonesia. Spesialis Vue.js, React, Laravel, dan ekosistem web modern.',
    },
    { name: 'author', content: 'Muhammad Randi Nur Priyatna' },
    { property: 'og:title', content: 'Muhammad Randi Nur Priyatna — Full Stack Developer' },
    { property: 'og:description', content: 'Full Stack Developer dari Bogor, Indonesia.' },
  ],
};

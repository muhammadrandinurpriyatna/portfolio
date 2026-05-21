export interface SkillCategory {
  icon: string;
  title: string;
  tags: string[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  { icon: '⚛️', title: 'Frontend Frameworks', tags: ['Vue.js', 'React.js', 'Nuxt.js', 'Next.js'] },
  { icon: '🖥️', title: 'Web Technologies',    tags: ['HTML', 'CSS', 'JavaScript', 'TypeScript'] },
  { icon: '🎨', title: 'UI & Styling',         tags: ['Tailwind CSS', 'Bootstrap', 'WordPress'] },
  { icon: '⚙️', title: 'Backend & Server',     tags: ['Laravel', 'PHP', 'Python', 'Yii'] },
  { icon: '🗄️', title: 'Database',             tags: ['MySQL', 'PostgreSQL'] },
  { icon: '🛠️', title: 'Tools & Others',       tags: ['Git', 'REST API', 'UI/UX Design', 'Wireframing'] },
];

export const ALL_SKILLS = SKILL_CATEGORIES.flatMap((c) => c.tags);

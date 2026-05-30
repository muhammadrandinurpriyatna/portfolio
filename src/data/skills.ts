export interface SkillCategory {
  icon: string;
  title: string;
  tags: string[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  { icon: 'FE', title: 'Kerangka Kerja Antarmuka', tags: ['Next.js', 'Nuxt.js', 'Qwik', 'Astro', 'Angular'] },
  { icon: 'BE', title: 'Sisi Server', tags: ['Laravel', 'Axum', 'Go', 'Yii', 'Python'] },
  { icon: 'DB', title: 'Basis Data', tags: ['MySQL', 'PostgreSQL'] },
  { icon: 'UI', title: 'Desain & CMS', tags: ['Figma', 'Adobe XD', 'WordPress'] },
];

export const ALL_SKILLS = SKILL_CATEGORIES.flatMap((c) => c.tags);

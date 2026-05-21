export interface Project {
  title: string;
  desc: string;
  category: string;
  tags: string[];
  emoji: string;
  grad: string;
  featured?: boolean;
  github?: string;
  live?: string;
}

export const PROJECTS: Project[] = [
  {
    title: 'Trawlbens Internal Dashboard',
    desc: 'Dashboard internal perusahaan untuk monitoring operasional logistik, meliputi tracking pengiriman, laporan keuangan, dan manajemen armada secara real-time.',
    category: 'Dashboard',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'REST API'],
    emoji: '📦', grad: 'grad-1', featured: true,
    github: '#', live: '#',
  },
  {
    title: 'Driver & Fleet Management App',
    desc: 'Aplikasi web untuk manajemen pengemudi dan armada kendaraan. Fitur meliputi assignment jadwal, pelacakan lokasi, dan laporan performa pengemudi.',
    category: 'Web App',
    tags: ['Vue.js', 'Laravel', 'MySQL', 'Google Maps API'],
    emoji: '🚛', grad: 'grad-2', featured: true,
    github: '#', live: '#',
  },
  {
    title: 'LMS kejar.id Features',
    desc: 'Pengembangan fitur-fitur internal Learning Management System kejar.id, termasuk modul kuis, sistem progress tracking, dan notifikasi real-time.',
    category: 'Web App',
    tags: ['PHP', 'Laravel', 'MySQL', 'JavaScript'],
    emoji: '🎓', grad: 'grad-3', featured: true,
    github: '#', live: '#',
  },
  {
    title: 'Scalable REST API Service',
    desc: 'Arsitektur RESTful API yang scalable untuk mendukung aplikasi mobile dan web. Dilengkapi autentikasi JWT, rate limiting, dan dokumentasi Swagger otomatis.',
    category: 'Backend',
    tags: ['Laravel', 'PostgreSQL', 'JWT', 'Docker'],
    emoji: '⚙️', grad: 'grad-4',
    github: '#', live: '#',
  },
  {
    title: 'Company Profile Website',
    desc: 'Website company profile modern dengan performa tinggi, SEO-optimized, dan CMS berbasis headless untuk kemudahan update konten.',
    category: 'Website',
    tags: ['Nuxt.js', 'Tailwind', 'WordPress', 'Yii'],
    emoji: '🏢', grad: 'grad-5',
    github: '#', live: '#',
  },
  {
    title: 'Inventory Management System',
    desc: 'Sistem manajemen inventaris full-stack dengan fitur kelola stok, laporan masuk/keluar barang, notifikasi stok rendah, dan ekspor laporan ke PDF/Excel.',
    category: 'Dashboard',
    tags: ['Vue.js', 'PHP', 'MySQL', 'Bootstrap'],
    emoji: '🗂️', grad: 'grad-6',
    github: '#', live: '#',
  },
];

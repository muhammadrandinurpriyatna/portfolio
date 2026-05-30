export interface Project {
  slug: string;
  title: string;
  titleEn: string;
  desc: string;
  descEn: string;
  category: string;
  categoryEn: string;
  tags: string[];
  emoji: string;
  grad: string;
  featured?: boolean;
  github?: string;
  live?: string;
}

export const PROJECTS: Project[] = [
  {
    slug: 'trawlbens-internal-dashboard',
    title: 'Dashboard Internal Trawlbens',
    titleEn: 'Trawlbens Internal Dashboard',
    desc: 'Dashboard internal perusahaan untuk pemantauan operasional logistik, meliputi pelacakan pengiriman, laporan keuangan, dan manajemen armada secara real-time.',
    descEn: 'An internal company dashboard for monitoring logistics operations, including shipment tracking, financial reports, and real-time fleet management.',
    category: 'Dashboard',
    categoryEn: 'Dashboard',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'REST API'],
    emoji: '📦', grad: 'grad-1', featured: true,
    github: '#', live: '#',
  },
  {
    slug: 'driver-fleet-management-app',
    title: 'Aplikasi Manajemen Pengemudi & Armada',
    titleEn: 'Driver & Fleet Management App',
    desc: 'Aplikasi web untuk manajemen pengemudi dan armada kendaraan. Fitur meliputi penugasan jadwal, pelacakan lokasi, dan laporan performa pengemudi.',
    descEn: 'A web application for managing drivers and vehicle fleets, including schedule assignments, location tracking, and driver performance reports.',
    category: 'Aplikasi Web',
    categoryEn: 'Web App',
    tags: ['Vue.js', 'Laravel', 'MySQL', 'Google Maps API'],
    emoji: '🚛', grad: 'grad-2', featured: true,
    github: '#', live: '#',
  },
  {
    slug: 'lms-kejar-id-features',
    title: 'Fitur LMS kejar.id',
    titleEn: 'kejar.id LMS Features',
    desc: 'Pengembangan fitur-fitur internal Learning Management System kejar.id, termasuk modul kuis, sistem pelacakan progres, dan notifikasi real-time.',
    descEn: 'Development of internal features for the kejar.id Learning Management System, including quiz modules, progress tracking, and real-time notifications.',
    category: 'Aplikasi Web',
    categoryEn: 'Web App',
    tags: ['PHP', 'Laravel', 'MySQL', 'JavaScript'],
    emoji: '🎓', grad: 'grad-3', featured: true,
    github: '#', live: '#',
  },
  {
    slug: 'scalable-rest-api-service',
    title: 'Layanan REST API yang Mudah Dikembangkan',
    titleEn: 'Scalable REST API Service',
    desc: 'Arsitektur RESTful API yang mudah dikembangkan untuk mendukung aplikasi mobile dan web. Dilengkapi autentikasi JWT, pembatasan request, dan dokumentasi Swagger otomatis.',
    descEn: 'A scalable RESTful API architecture for mobile and web applications, with JWT authentication, rate limiting, and automated Swagger documentation.',
    category: 'Sisi Server',
    categoryEn: 'Backend',
    tags: ['Laravel', 'PostgreSQL', 'JWT', 'Docker'],
    emoji: '⚙️', grad: 'grad-4',
    github: '#', live: '#',
  },
  {
    slug: 'company-profile-website',
    title: 'Website Profil Perusahaan',
    titleEn: 'Company Profile Website',
    desc: 'Website profil perusahaan modern dengan performa tinggi, SEO yang dioptimalkan, dan CMS headless untuk kemudahan pembaruan konten.',
    descEn: 'A modern company profile website with high performance, optimized SEO, and a headless CMS for easier content updates.',
    category: 'Website',
    categoryEn: 'Website',
    tags: ['Nuxt.js', 'Tailwind', 'WordPress', 'Yii'],
    emoji: '🏢', grad: 'grad-5',
    github: '#', live: '#',
  },
  {
    slug: 'inventory-management-system',
    title: 'Sistem Manajemen Inventaris',
    titleEn: 'Inventory Management System',
    desc: 'Sistem manajemen inventaris full-stack dengan fitur kelola stok, laporan masuk/keluar barang, notifikasi stok rendah, dan ekspor laporan ke PDF/Excel.',
    descEn: 'A full-stack inventory management system with stock management, incoming/outgoing item reports, low-stock notifications, and PDF/Excel export.',
    category: 'Dashboard',
    categoryEn: 'Dashboard',
    tags: ['Vue.js', 'PHP', 'MySQL', 'Bootstrap'],
    emoji: '🗂️', grad: 'grad-6',
    github: '#', live: '#',
  },
];

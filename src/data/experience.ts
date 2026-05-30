import { l, type LocalizedText } from './localized';

export interface Experience {
  slug: string;
  role: LocalizedText;
  company: string;
  location: string;
  date: string;
  type: 'fulltime' | 'intern' | 'freelance';
  points: LocalizedText[];
}

export const EXPERIENCES: Experience[] = [
  {
    slug: 'trawlbens-fullstack-developer',
    role: l('Pengembang Full Stack', 'Full Stack Developer'),
    company: 'PT. Trawlbens Teknologi Anak Indonesia',
    location: 'Jakarta, Indonesia',
    date: 'Mar 2025 - Saat Ini',
    type: 'fulltime',
    points: [
      l('Mengembangkan fitur aplikasi dari sisi antarmuka dan sisi server untuk mendukung kebutuhan operasional perusahaan.', 'Developed application features across frontend and backend to support company operations.'),
      l('Membangun dan mengintegrasikan API, alur data, serta proses bisnis agar aplikasi berjalan stabil dan efisien.', 'Built and integrated APIs, data flows, and business processes so applications run reliably and efficiently.'),
      l('Mengelola perbaikan bug, optimasi performa, dan peningkatan pengalaman pengguna pada sistem internal maupun eksternal.', 'Handled bug fixes, performance optimization, and user experience improvements for internal and external systems.'),
      l('Berkolaborasi dengan tim produk, desain, dan operasional untuk menerjemahkan kebutuhan bisnis menjadi solusi teknis.', 'Collaborated with product, design, and operations teams to turn business needs into technical solutions.'),
    ],
  },
  {
    slug: 'trawlbens-front-end-developer',
    role: l('Pengembang Frontend', 'Frontend Developer'),
    company: 'PT. Trawlbens Teknologi Anak Indonesia',
    location: 'Jakarta, Indonesia',
    date: 'Sep 2024 - Feb 2025',
    type: 'fulltime',
    points: [
      l('Membangun dan mengembangkan antarmuka untuk semua website internal dan eksternal perusahaan, memastikan tampilan menarik dan fungsional.', 'Built and developed interfaces for internal and external company websites, ensuring attractive and functional experiences.'),
      l('Mengelola dan memelihara performa, keamanan, dan stabilitas website perusahaan untuk memberikan pengalaman terbaik bagi pengguna.', 'Maintained website performance, security, and stability to deliver the best user experience.'),
      l('Mengoptimalkan kecepatan loading, responsivitas, dan pengalaman pengguna pada berbagai perangkat agar memenuhi standar performa tinggi.', 'Optimized loading speed, responsiveness, and user experience across devices to meet high performance standards.'),
      l('Berkolaborasi dengan tim desain, produk, dan back-end untuk memastikan setiap poin penting dieksekusi dengan baik di sisi front-end.', 'Collaborated with design, product, and backend teams to execute key requirements on the frontend.'),
      l('Melakukan pengujian dan debugging secara rutin untuk menemukan dan memperbaiki bug atau masalah teknis.', 'Performed regular testing and debugging to find and resolve bugs or technical issues.'),
    ],
  },
  {
    slug: 'starandsparks-tech-it-consultant',
    role: l('Konsultan TI', 'IT Consultant'),
    company: 'Starandsparks Tech',
    location: 'Jakarta, Indonesia',
    date: 'Jul 2022 - Saat Ini',
    type: 'freelance',
    points: [
      l('Memberikan konsultasi teknis untuk perencanaan, pengembangan, dan peningkatan solusi digital sesuai kebutuhan klien.', 'Provided technical consulting for planning, development, and improvement of digital solutions based on client needs.'),
      l('Menganalisis kebutuhan bisnis, menyusun rekomendasi teknologi, dan membantu menentukan arsitektur aplikasi yang efektif.', 'Analyzed business needs, prepared technology recommendations, and helped define effective application architecture.'),
      l('Mendukung implementasi website, aplikasi, integrasi sistem, serta proses optimasi performa dan stabilitas layanan.', 'Supported website, application, system integration, performance optimization, and service stability work.'),
      l('Berkolaborasi dengan stakeholder untuk memastikan solusi teknis berjalan sesuai target, timeline, dan prioritas bisnis.', 'Worked with stakeholders to ensure technical solutions matched targets, timelines, and business priorities.'),
    ],
  },
  {
    slug: 'vektor-inti-prima-fullstack-developer',
    role: l('Pengembang Full Stack', 'Full Stack Developer'),
    company: 'PT. Vektor Inti Prima',
    location: 'Jakarta, Indonesia',
    date: 'Jul 2022 - Agu 2024',
    type: 'fulltime',
    points: [
      l('Bertanggung jawab atas pengembangan aplikasi dari sisi antarmuka hingga sisi server, termasuk pengembangan fitur, fungsionalitas, dan desain antarmuka.', 'Handled application development from frontend to backend, including feature development, functionality, and interface design.'),
      l('Merancang dan mengimplementasikan arsitektur sistem yang mudah dikembangkan dan efisien untuk mendukung aplikasi internal maupun eksternal.', 'Designed and implemented scalable, efficient system architecture for internal and external applications.'),
      l('Membuat dan mengelola API yang mendukung interaksi antarmuka dan sisi server, serta mengintegrasikan aplikasi dengan sistem pihak ketiga.', 'Created and managed APIs for frontend-backend interactions and third-party system integrations.'),
      l('Merancang, mengelola, dan memelihara basis data untuk menyimpan, mengambil, dan mengamankan data secara efektif.', 'Designed, managed, and maintained databases to store, retrieve, and secure data effectively.'),
      l('Mengelola server dan lingkungan hosting untuk memastikan stabilitas dan performa aplikasi yang optimal.', 'Managed servers and hosting environments to ensure optimal application stability and performance.'),
    ],
  },
  {
    slug: 'agatra-kreasi-teknologi-intern-ui-ux-designer',
    role: l('Magang Desainer UI & UX', 'UI & UX Design Intern'),
    company: 'PT. Agatra Kreasi Teknologi',
    location: 'Bandung, Indonesia',
    date: 'Des 2021 - Mar 2022',
    type: 'intern',
    points: [
      l('Melakukan riset untuk memahami kebutuhan dan preferensi pengguna serta menganalisis tren desain terkini.', 'Researched user needs and preferences while analyzing current design trends.'),
      l('Membuat wireframe dan prototipe awal untuk profil perusahaan yang menggambarkan struktur halaman, alur navigasi, dan komposisi visual.', 'Created wireframes and early prototypes for a company profile covering page structure, navigation flow, and visual composition.'),
      l('Menyusun dokumentasi desain dan komponen untuk referensi di masa mendatang.', 'Prepared design and component documentation for future reference.'),
    ],
  },
  {
    slug: 'cv-ids-intern-fullstack-developer',
    role: l('Magang Pengembang Full Stack', 'Full Stack Developer Intern'),
    company: 'CV. IDS',
    location: 'Bogor, Indonesia',
    date: 'Mar 2021 - Jun 2021',
    type: 'intern',
    points: [
      l('Membangun fitur-fitur internal dalam Learning Management System kejar.id.', 'Built internal features for the kejar.id Learning Management System.'),
      l('Melakukan pengujian dan debugging untuk memastikan setiap fitur internal LMS berfungsi dengan baik.', 'Performed testing and debugging to ensure each internal LMS feature worked properly.'),
      l('Berkolaborasi erat dengan tim LMS untuk memahami kebutuhan spesifik dan memastikan solusi sesuai tujuan.', 'Worked closely with the LMS team to understand specific needs and ensure solutions matched the goals.'),
    ],
  },
];

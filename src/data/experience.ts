export interface Experience {
  role: string;
  company: string;
  location: string;
  date: string;
  type: 'fulltime' | 'intern';
  points: string[];
}

export const EXPERIENCES: Experience[] = [
  {
    role: 'Front End Developer',
    company: 'PT. Trawlbens Teknologi Anak Indonesia',
    location: 'Jakarta, Indonesia',
    date: 'Sep 2024 – Mar 2025',
    type: 'fulltime',
    points: [
      'Membangun dan mengembangkan interface untuk semua website internal dan eksternal perusahaan, memastikan tampilan menarik dan fungsional.',
      'Mengelola dan memelihara performa, keamanan, dan stabilitas website perusahaan untuk memberikan pengalaman terbaik bagi pengguna.',
      'Mengoptimalkan kecepatan loading, responsivitas, dan user experience pada berbagai perangkat agar memenuhi standar performa tinggi.',
      'Berkolaborasi dengan tim desain, produk, dan back-end untuk memastikan setiap poin penting dieksekusi dengan baik di sisi front-end.',
      'Melakukan pengujian dan debugging secara rutin untuk menemukan dan memperbaiki bug atau masalah teknis.',
    ],
  },
  {
    role: 'Fullstack Developer',
    company: 'PT. Vektor Inti Prima',
    location: 'Jakarta, Indonesia',
    date: 'Jul 2022 – Agu 2024',
    type: 'fulltime',
    points: [
      'Bertanggung jawab atas pengembangan aplikasi dari sisi frontend hingga backend, termasuk pengembangan fitur, fungsionalitas, dan desain interface.',
      'Merancang dan mengimplementasikan arsitektur sistem yang scalable dan efisien untuk mendukung aplikasi internal maupun eksternal.',
      'Membuat dan mengelola API yang mendukung interaksi front-end dan back-end, serta mengintegrasikan aplikasi dengan sistem pihak ketiga.',
      'Merancang, mengelola, dan memelihara basis data untuk menyimpan, mengambil, dan mengamankan data secara efektif.',
      'Mengelola server dan lingkungan hosting untuk memastikan stabilitas dan performa aplikasi yang optimal.',
    ],
  },
  {
    role: 'Intern Fullstack Developer',
    company: 'CV. IDS',
    location: 'Bogor, Indonesia',
    date: '2021 – 2022',
    type: 'intern',
    points: [
      'Membangun fitur-fitur internal dalam Learning Management System kejar.id.',
      'Melakukan pengujian dan debugging untuk memastikan setiap fitur internal LMS berfungsi dengan baik.',
      'Berkolaborasi erat dengan tim LMS untuk memahami kebutuhan spesifik dan memastikan solusi sesuai tujuan.',
    ],
  },
  {
    role: 'Intern UI & UX Designer',
    company: 'PT. Agatra Kreasi Teknologi',
    location: 'Bandung, Indonesia',
    date: 'Des 2021 – Mar 2022',
    type: 'intern',
    points: [
      'Melakukan riset untuk memahami kebutuhan dan preferensi pengguna serta menganalisis tren desain terkini.',
      'Membuat wireframe dan prototipe awal untuk company profile yang menggambarkan struktur halaman, alur navigasi, dan komposisi visual.',
      'Menyusun dokumentasi desain dan komponen untuk referensi di masa mendatang.',
    ],
  },
];

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  tags: string[];
  excerpt: string;
  readTime: string;
  emoji: string;
  grad: string;
  content: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'perjalanan-menjadi-full-stack-developer',
    title: 'Perjalanan 3 Tahun Menjadi Full Stack Developer',
    date: '8 Januari 2025',
    category: 'Karir',
    tags: ['Career', 'Personal', 'Developer'],
    excerpt: 'Refleksi jujur tentang perjalanan saya dari siswa SMK hingga bekerja di perusahaan teknologi Jakarta — apa yang berhasil, apa yang gagal, dan pelajaran terpenting yang saya dapat.',
    readTime: '6 menit',
    emoji: '🚀',
    grad: 'grad-1',
    content: `
<p>Tiga tahun yang lalu, saya adalah siswa SMK Wikrama Bogor jurusan Rekayasa Perangkat Lunak yang baru lulus dan bingung harus mulai dari mana. Hari ini, saya telah bekerja di beberapa perusahaan teknologi di Jakarta sebagai full stack developer. Ini adalah refleksi jujur tentang perjalanan itu.</p>

<h2>Awal yang Tidak Mudah</h2>
<p>Ketika pertama kali magang di CV. IDS sebagai intern fullstack developer, saya sadar betapa jauhnya jarak antara teori di sekolah dengan praktik nyata di dunia kerja. Kode yang saya tulis sering ditolak code review. Deadline yang mendekat terasa mencekik. Tapi dari situlah pembelajaran sesungguhnya dimulai.</p>
<p>Hal pertama yang saya pelajari adalah: <strong>bertanya bukan tanda kelemahan, melainkan tanda kecerdasan</strong>. Senior developer yang baik selalu menghargai junior yang aktif bertanya dibanding yang diam tapi tidak paham.</p>

<h2>Transisi ke Fullstack</h2>
<p>Di PT. Vektor Inti Prima, saya mendapat kepercayaan untuk mengelola proyek dari ujung ke ujung — dari database design, backend API, hingga frontend interface. Ini bukan hal yang mudah, tapi justru inilah yang membentuk saya menjadi developer yang lebih baik.</p>
<p>Skill yang paling banyak saya asah di sana:</p>
<ul>
<li>Merancang arsitektur database yang efisien dengan MySQL dan PostgreSQL</li>
<li>Membangun RESTful API dengan Laravel yang clean dan documented</li>
<li>Mengembangkan UI interaktif dengan Vue.js dan Nuxt.js</li>
<li>Memahami konsep DevOps dasar untuk deployment</li>
</ul>

<h2>Pelajaran Terpenting</h2>
<p>Setelah 3 tahun, ini pelajaran yang paling berharga bagi saya:</p>
<p><strong>1. Kode yang baik bukan yang pintar, tapi yang mudah dipahami.</strong> Dulu saya sering menulis one-liner yang "keren" tapi susah dibaca tim. Sekarang saya prioritaskan readability di atas segalanya.</p>
<p><strong>2. Komunikasi sama pentingnya dengan coding.</strong> Banyak bug bukan karena kode yang salah, tapi karena requirement yang tidak jelas. Klarifikasi dulu sebelum menulis satu baris kode pun.</p>
<p><strong>3. Investasi waktu di fundamental, bukan hanya framework.</strong> Framework berganti-ganti, tapi konsep seperti algoritma, data structure, dan sistem design selalu relevan.</p>

<h2>Ke Depan</h2>
<p>Perjalanan ini masih panjang. Ada banyak teknologi yang ingin saya pelajari, banyak proyek yang ingin saya bangun. Tapi yang paling penting adalah tetap hungry dan humble — selalu ingin belajar dan tidak pernah merasa sudah cukup tahu.</p>
<p>Kalau kamu juga sedang memulai perjalanan sebagai developer, satu pesan dari saya: <strong>jangan bandingkan diri dengan orang lain, bandingkan dirimu hari ini dengan dirimu kemarin.</strong></p>
    `,
  },
  {
    slug: 'membangun-rest-api-scalable-laravel',
    title: 'Membangun REST API yang Scalable dengan Laravel',
    date: '3 Desember 2024',
    category: 'Backend',
    tags: ['Laravel', 'PHP', 'API', 'Backend'],
    excerpt: 'Panduan praktis membangun REST API yang scalable menggunakan Laravel — dari struktur folder, authentication JWT, hingga strategi caching yang saya gunakan di proyek nyata.',
    readTime: '8 menit',
    emoji: '⚙️',
    grad: 'grad-4',
    content: `
<p>Setelah membangun puluhan API dengan Laravel di berbagai proyek, saya ingin berbagi pattern dan strategi yang terbukti bekerja di produksi. Bukan teori — ini dari pengalaman langsung.</p>

<h2>Struktur Folder yang Bersih</h2>
<p>Salah satu kesalahan umum adalah menaruh semua logika di Controller. Saya menggunakan pola <strong>Repository-Service-Controller</strong>:</p>
<ul>
<li><strong>Controller</strong>: Hanya handle HTTP request/response, validasi input</li>
<li><strong>Service</strong>: Business logic — semua aturan bisnis ada di sini</li>
<li><strong>Repository</strong>: Database query — abstraksi dari Eloquent/raw query</li>
</ul>
<p>Dengan pola ini, unit testing menjadi jauh lebih mudah dan kode lebih reusable.</p>

<h2>Authentication dengan JWT</h2>
<p>Untuk API stateless, saya menggunakan JWT (JSON Web Token) dengan package <code>tymon/jwt-auth</code>. Beberapa tips penting:</p>
<ul>
<li>Set token expiry yang reasonable (biasanya 1 jam untuk access token)</li>
<li>Implementasikan refresh token untuk UX yang lebih baik</li>
<li>Simpan sensitive data di environment variable, bukan di kode</li>
</ul>

<h2>Response Konsisten</h2>
<p>Salah satu hal yang membuat frontend developer senang adalah response API yang konsisten. Saya selalu menggunakan format:</p>
<pre><code>{
  "success": true,
  "message": "Data berhasil diambil",
  "data": { ... },
  "meta": { "page": 1, "total": 100 }
}</code></pre>

<h2>Strategi Caching</h2>
<p>Untuk endpoint yang sering dipanggil dengan data yang jarang berubah, caching adalah game changer. Laravel menyediakan abstraksi cache yang mudah digunakan dengan Redis atau Memcached.</p>
<p>Aturan sederhana yang saya pakai: cache data yang fetch-nya mahal (join banyak tabel, external API) dan invalidate cache ketika data berubah.</p>

<h2>Rate Limiting</h2>
<p>Jangan lupa proteksi API Anda dari abuse. Laravel punya built-in rate limiting yang mudah dikonfigurasi di <code>RouteServiceProvider</code>. Untuk API publik, saya biasanya set 60 request per menit per IP.</p>

<h2>Kesimpulan</h2>
<p>Membangun API yang scalable bukan tentang tools yang paling canggih, tapi tentang konsistensi dalam arsitektur dan kebiasaan yang baik sejak awal. Laravel memberikan semua yang Anda butuhkan — tinggal bagaimana Anda memanfaatkannya.</p>
    `,
  },
  {
    slug: 'optimasi-web-performance-frontend',
    title: 'Optimasi Web Performance: Tips dari Pengalaman Nyata',
    date: '20 Oktober 2024',
    category: 'Frontend',
    tags: ['Performance', 'JavaScript', 'Web', 'Optimization'],
    excerpt: 'Dari pengalaman mengoptimasi website perusahaan di PT. Trawlbens — teknik konkret yang berhasil meningkatkan Lighthouse score dari 45 menjadi 92 dalam waktu 2 minggu.',
    readTime: '7 menit',
    emoji: '⚡',
    grad: 'grad-2',
    content: `
<p>Ketika pertama kali bergabung di PT. Trawlbens, salah satu tantangan terbesar yang saya hadapi adalah website yang lambat. Lighthouse score di bawah 50, First Contentful Paint di atas 4 detik, dan pengguna yang sering complain. Ini adalah cerita bagaimana kami membalikkan keadaan.</p>

<h2>Audit Dulu, Optimasi Kemudian</h2>
<p>Kesalahan umum adalah langsung "optimasi" tanpa tahu apa yang sebenarnya lambat. Gunakan Chrome DevTools Performance tab dan Lighthouse untuk mengidentifikasi bottleneck yang sesungguhnya.</p>
<p>Dalam kasus kami, masalah terbesarnya adalah:</p>
<ul>
<li>Image yang tidak dioptimasi (ada yang 3MB per gambar!)</li>
<li>JavaScript bundle yang terlalu besar</li>
<li>Tidak ada caching strategy</li>
<li>Render-blocking resources</li>
</ul>

<h2>Optimasi Image: Quick Win Terbesar</h2>
<p>Mengompresi dan mengkonversi image ke format WebP adalah hal pertama yang kami lakukan. Hasilnya luar biasa — ukuran halaman turun dari 8MB menjadi 1.2MB hanya dari langkah ini saja.</p>
<p>Tips praktis:</p>
<ul>
<li>Gunakan <code>loading="lazy"</code> untuk image di bawah fold</li>
<li>Selalu set dimensi width/height untuk menghindari layout shift</li>
<li>Gunakan srcset untuk responsive images</li>
</ul>

<h2>Code Splitting dan Lazy Loading</h2>
<p>Dengan Next.js/Nuxt.js, dynamic import membuat komponen hanya dimuat ketika dibutuhkan. Komponen modal, chart, dan fitur non-critical kami pindah ke lazy load. Ini mengurangi initial bundle size hingga 40%.</p>

<h2>Caching Strategy</h2>
<p>Kami implementasikan strategi caching berlapis:</p>
<ul>
<li><strong>Browser cache</strong>: Asset statis (JS, CSS, font) dengan cache header panjang</li>
<li><strong>CDN cache</strong>: Untuk static assets dan API response yang jarang berubah</li>
<li><strong>Service Worker</strong>: Untuk offline capability dan faster repeat visits</li>
</ul>

<h2>Hasilnya</h2>
<p>Setelah 2 minggu kerja keras, Lighthouse score naik dari 45 ke 92. First Contentful Paint turun dari 4.2s ke 0.8s. Dan yang paling penting — tidak ada lagi complain dari pengguna tentang website yang lambat.</p>
<p>Moral of the story: optimasi performa bukan tentang melakukan semua teknik sekaligus, tapi tentang mengidentifikasi masalah terbesar dan menyelesaikannya satu per satu.</p>
    `,
  },
  {
    slug: 'vuejs-vs-react-perspektif-developer',
    title: 'Vue.js vs React: Perspektif Full Stack Developer',
    date: '5 September 2024',
    category: 'Frontend',
    tags: ['Vue.js', 'React', 'JavaScript', 'Frontend'],
    excerpt: 'Setelah menggunakan keduanya di proyek production, ini perbandingan jujur saya tentang Vue.js dan React — kapan harus pilih yang mana, dan mana yang lebih saya sukai.',
    readTime: '5 menit',
    emoji: '⚛️',
    grad: 'grad-3',
    content: `
<p>Pertanyaan "Vue atau React?" mungkin adalah pertanyaan yang paling sering saya dengar dari junior developer. Saya sudah menggunakan keduanya di proyek production, jadi ini pendapat yang berdasarkan pengalaman nyata, bukan sekadar membaca dokumentasi.</p>

<h2>Learning Curve</h2>
<p><strong>Vue.js</strong> jelas lebih mudah dipelajari. Sintaks yang intuitif, Single File Component (SFC) yang rapi, dan dokumentasi berbahasa Indonesia yang sangat baik membuat Vue menjadi pilihan yang ramah untuk pemula.</p>
<p><strong>React</strong> memiliki learning curve yang lebih curam, terutama karena Anda perlu memahami JSX, hooks, dan ekosistem yang lebih besar. Tapi begitu Anda "get it", produktivitas Anda meningkat drastis.</p>

<h2>Ekosistem & Komunitas</h2>
<p>React unggul jauh di sini. Lebih banyak library, lebih banyak tutorial, dan hampir semua perusahaan tech besar menggunakan React. Ini juga berarti lebih mudah mencari developer React di market.</p>
<p>Vue memiliki ekosistem yang lebih terpadu — Pinia untuk state management, Vue Router sudah official, dan Nuxt.js sebagai meta-framework-nya sangat solid.</p>

<h2>Developer Experience</h2>
<p>Ini subjektif, tapi saya selalu merasa lebih "enjoy" menulis Vue. Template syntax-nya lebih dekat ke HTML biasa, direktif seperti <code>v-if</code> dan <code>v-for</code> sangat readable, dan Composition API di Vue 3 memberikan fleksibilitas yang tidak kalah dengan React hooks.</p>

<h2>Kapan Pilih Vue, Kapan Pilih React?</h2>
<ul>
<li><strong>Pilih Vue</strong>: Proyek kecil-menengah, tim yang baru kenal JavaScript, atau ketika butuh development speed yang cepat</li>
<li><strong>Pilih React</strong>: Proyek skala besar, butuh ekosistem yang luas, atau ketika tim sudah familiar dengan React</li>
</ul>

<h2>Kesimpulan</h2>
<p>Pertanyaan yang lebih tepat bukan "mana yang lebih baik?" tapi "mana yang lebih cocok untuk proyek ini?". Keduanya adalah tools yang excellent. Yang terpenting adalah memahami trade-off masing-masing dan memilih yang sesuai dengan konteks Anda.</p>
<p>Kalau ditanya mana favorit saya? Vue.js untuk proyek pribadi, React untuk proyek yang butuh ekosistem besar. Tapi di akhir hari, yang menentukan kualitas produk bukan framework-nya, tapi developer-nya.</p>
    `,
  },
  {
    slug: 'tips-menjadi-developer-produktif',
    title: 'Tips Menjadi Developer yang Lebih Produktif',
    date: '15 November 2024',
    category: 'Produktivitas',
    tags: ['Productivity', 'Tips', 'Developer', 'Career'],
    excerpt: 'Kebiasaan dan tools yang benar-benar membuat perbedaan dalam produktivitas sehari-hari saya sebagai developer — bukan tips generik, tapi yang sudah terbukti berhasil.',
    readTime: '4 menit',
    emoji: '💡',
    grad: 'grad-5',
    content: `
<p>Ada banyak artikel tentang "produktivitas developer" di internet. Kebanyakan isinya tips generik yang terdengar bagus tapi sulit diaplikasikan. Ini adalah tips yang benar-benar saya praktikkan setiap hari dan membuktikan perbedaannya.</p>

<h2>1. Buat TODO List yang Spesifik Setiap Pagi</h2>
<p>Bukan todo list yang panjang, tapi 3 tugas terpenting yang HARUS selesai hari itu. Teknik ini disebut "MIT — Most Important Tasks". Dengan fokus pada 3 hal, saya merasa lebih accomplished meski menghadapi banyak interupsi.</p>

<h2>2. Pomodoro untuk Deep Work</h2>
<p>25 menit fokus, 5 menit istirahat. Terdengar simpel, tapi efeknya luar biasa untuk coding yang butuh konsentrasi tinggi. Saya menggunakan timer sederhana di browser — tidak perlu aplikasi khusus.</p>
<p>Yang lebih penting: saat sesi Pomodoro, matikan semua notifikasi. Slack, email, semua. Dunia tidak akan kiamat dalam 25 menit.</p>

<h2>3. Git Commit yang Bermakna</h2>
<p>Ini bukan hanya soal produktivitas tim, tapi produktivitas diri sendiri. Commit message yang jelas seperti <code>feat: add pagination to user list API</code> membantu saya dengan cepat memahami history ketika debugging di kemudian hari.</p>

<h2>4. Baca Dokumentasi, Bukan Hanya Tutorial</h2>
<p>Tutorial mengajarkan Anda cara menggunakan tool, dokumentasi mengajarkan Anda memahami tool. Investasi waktu membaca dokumentasi official mengurangi waktu googling dan debugging secara signifikan.</p>

<h2>5. Code Review sebagai Pembelajaran</h2>
<p>Jangan lihat code review sebagai kritik. Lihat sebagai kesempatan belajar gratis dari orang yang lebih berpengalaman. Setiap feedback adalah investasi untuk skill jangka panjang Anda.</p>

<h2>6. Istirahat yang Cukup</h2>
<p>Ini tips yang paling sering diabaikan. Otak yang lelah membuat bug 3x lebih banyak dari otak yang segar. Sleep 7-8 jam bukan pemborosan waktu — itu investasi produktivitas.</p>

<h2>Penutup</h2>
<p>Produktivitas bukan tentang bekerja lebih keras, tapi bekerja lebih cerdas. Mulai dari satu atau dua tips ini, konsistenkan selama sebulan, dan lihat perbedaannya.</p>
    `,
  },
];

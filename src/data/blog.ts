export interface BlogPost {
  slug: string;
  title: string;
  titleEn: string;
  date: string;
  category: string;
  categoryEn: string;
  tags: string[];
  tagsEn: string[];
  excerpt: string;
  excerptEn: string;
  readTime: string;
  readTimeEn: string;
  emoji: string;
  grad: string;
  content: string;
  contentEn: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'perjalanan-menjadi-full-stack-developer',
    title: 'Perjalanan 3 Tahun Menjadi Pengembang Full Stack',
    titleEn: 'My 3-Year Journey Becoming a Full Stack Developer',
    date: '8 Januari 2025',
    category: 'Karir',
    categoryEn: 'Career',
    tags: ['Karir', 'Personal', 'Pengembang'],
    tagsEn: ['Career', 'Personal', 'Developer'],
    excerpt: 'Refleksi jujur tentang perjalanan saya dari siswa SMK hingga bekerja di perusahaan teknologi Jakarta — apa yang berhasil, apa yang gagal, dan pelajaran terpenting yang saya dapat.',
    excerptEn: 'An honest reflection on my journey from vocational school student to working at technology companies in Jakarta: what worked, what failed, and the most important lessons I learned.',
    readTime: '6 menit',
    readTimeEn: '6 min',
    emoji: '🚀',
    grad: 'grad-1',
    content: `
<p>Tiga tahun yang lalu, saya adalah siswa SMK Wikrama Bogor jurusan Rekayasa Perangkat Lunak yang baru lulus dan bingung harus mulai dari mana. Hari ini, saya telah bekerja di beberapa perusahaan teknologi di Jakarta sebagai pengembang full stack. Ini adalah refleksi jujur tentang perjalanan itu.</p>

<h2>Awal yang Tidak Mudah</h2>
<p>Ketika pertama kali magang di CV. IDS sebagai pengembang full stack magang, saya sadar betapa jauhnya jarak antara teori di sekolah dengan praktik nyata di dunia kerja. Kode yang saya tulis sering ditolak saat peninjauan kode. Tenggat yang mendekat terasa mencekik. Tapi dari situlah pembelajaran sesungguhnya dimulai.</p>
<p>Hal pertama yang saya pelajari adalah: <strong>bertanya bukan tanda kelemahan, melainkan tanda kecerdasan</strong>. Pengembang senior yang baik selalu menghargai junior yang aktif bertanya dibanding yang diam tapi tidak paham.</p>

<h2>Transisi ke Full Stack</h2>
<p>Di PT. Vektor Inti Prima, saya mendapat kepercayaan untuk mengelola proyek dari ujung ke ujung — dari desain basis data, API sisi server, hingga antarmuka pengguna. Ini bukan hal yang mudah, tapi justru inilah yang membentuk saya menjadi pengembang yang lebih baik.</p>
<p>Kemampuan yang paling banyak saya asah di sana:</p>
<ul>
<li>Merancang arsitektur basis data yang efisien dengan MySQL dan PostgreSQL</li>
<li>Membangun RESTful API dengan Laravel yang rapi dan terdokumentasi</li>
<li>Mengembangkan UI interaktif dengan Vue.js dan Nuxt.js</li>
<li>Memahami konsep DevOps dasar untuk deployment</li>
</ul>

<h2>Pelajaran Terpenting</h2>
<p>Setelah 3 tahun, ini pelajaran yang paling berharga bagi saya:</p>
<p><strong>1. Kode yang baik bukan yang pintar, tapi yang mudah dipahami.</strong> Dulu saya sering menulis one-liner yang "keren" tapi susah dibaca tim. Sekarang saya prioritaskan keterbacaan di atas segalanya.</p>
<p><strong>2. Komunikasi sama pentingnya dengan menulis kode.</strong> Banyak bug bukan karena kode yang salah, tapi karena kebutuhan yang tidak jelas. Klarifikasi dulu sebelum menulis satu baris kode pun.</p>
<p><strong>3. Investasi waktu di fundamental, bukan hanya framework.</strong> Framework berganti-ganti, tapi konsep seperti algoritma, struktur data, dan desain sistem selalu relevan.</p>

<h2>Ke Depan</h2>
<p>Perjalanan ini masih panjang. Ada banyak teknologi yang ingin saya pelajari, banyak proyek yang ingin saya bangun. Tapi yang paling penting adalah tetap lapar belajar dan rendah hati — selalu ingin belajar dan tidak pernah merasa sudah cukup tahu.</p>
<p>Kalau kamu juga sedang memulai perjalanan sebagai pengembang, satu pesan dari saya: <strong>jangan bandingkan diri dengan orang lain, bandingkan dirimu hari ini dengan dirimu kemarin.</strong></p>
`,
    contentEn: `
<p>Three years ago, I was a Software Engineering student at SMK Wikrama Bogor, unsure where to start. Today, I have worked with several technology companies in Jakarta as a full stack developer. This is an honest reflection on that journey.</p>
<h2>Key Lessons</h2>
<p>Good code is not the cleverest code, but the code the team can understand. Communication matters as much as coding, because many bugs come from unclear requirements. I also learned to invest in fundamentals such as algorithms, data structures, and system design.</p>
<h2>Moving Forward</h2>
<p>The journey is still long. There are many technologies to learn and projects to build, but the most important mindset is to stay humble, keep learning, and compare yourself with who you were yesterday.</p>
`,
  },
  {
    slug: 'membangun-rest-api-scalable-laravel',
    title: 'Membangun REST API yang Mudah Dikembangkan dengan Laravel',
    titleEn: 'Building Scalable REST APIs with Laravel',
    date: '3 Desember 2024',
    category: 'Sisi Server',
    categoryEn: 'Backend',
    tags: ['Laravel', 'PHP', 'API', 'Sisi Server'],
    tagsEn: ['Laravel', 'PHP', 'API', 'Backend'],
    excerpt: 'Panduan praktis membangun REST API yang mudah dikembangkan menggunakan Laravel — dari struktur folder, autentikasi JWT, hingga strategi caching yang saya gunakan di proyek nyata.',
    excerptEn: 'A practical guide to building scalable REST APIs with Laravel, from folder structure and JWT authentication to caching strategies I use in real projects.',
    readTime: '8 menit',
    readTimeEn: '8 min',
    emoji: '⚙️',
    grad: 'grad-4',
    content: `
<p>Setelah membangun puluhan API dengan Laravel di berbagai proyek, saya ingin berbagi pola dan strategi yang terbukti bekerja di produksi. Bukan teori — ini dari pengalaman langsung.</p>

<h2>Struktur Folder yang Bersih</h2>
<p>Salah satu kesalahan umum adalah menaruh semua logika di Controller. Saya menggunakan pola <strong>Repository-Service-Controller</strong>:</p>
<ul>
<li><strong>Controller</strong>: Hanya menangani request/response HTTP dan validasi input</li>
<li><strong>Service</strong>: Logika bisnis — semua aturan bisnis ada di sini</li>
<li><strong>Repository</strong>: Query basis data — abstraksi dari Eloquent/raw query</li>
</ul>
<p>Dengan pola ini, unit test menjadi jauh lebih mudah dan kode lebih mudah digunakan ulang.</p>

<h2>Autentikasi dengan JWT</h2>
<p>Untuk API stateless, saya menggunakan JWT (JSON Web Token) dengan package <code>tymon/jwt-auth</code>. Beberapa tips penting:</p>
<ul>
<li>Atur masa berlaku token secara wajar (biasanya 1 jam untuk access token)</li>
<li>Implementasikan refresh token untuk pengalaman pengguna yang lebih baik</li>
<li>Simpan data sensitif di environment variable, bukan di kode</li>
</ul>

<h2>Respons Konsisten</h2>
<p>Salah satu hal yang membuat pengembang antarmuka senang adalah respons API yang konsisten. Saya selalu menggunakan format:</p>
<pre><code>{
  "success": true,
  "message": "Data berhasil diambil",
  "data": { ... },
  "meta": { "page": 1, "total": 100 }
}</code></pre>

<h2>Strategi Caching</h2>
<p>Untuk endpoint yang sering dipanggil dengan data yang jarang berubah, caching bisa memberi dampak besar. Laravel menyediakan abstraksi cache yang mudah digunakan dengan Redis atau Memcached.</p>
<p>Aturan sederhana yang saya pakai: cache data yang proses pengambilannya mahal (join banyak tabel, API eksternal) dan hapus cache ketika data berubah.</p>

<h2>Pembatasan Request</h2>
<p>Jangan lupa lindungi API Anda dari penyalahgunaan. Laravel punya fitur rate limiting bawaan yang mudah dikonfigurasi di <code>RouteServiceProvider</code>. Untuk API publik, saya biasanya mengatur 60 request per menit per IP.</p>

<h2>Kesimpulan</h2>
<p>Membangun API yang mudah dikembangkan bukan tentang alat yang paling canggih, tapi tentang konsistensi dalam arsitektur dan kebiasaan yang baik sejak awal. Laravel memberikan semua yang Anda butuhkan — tinggal bagaimana Anda memanfaatkannya.</p>
`,
    contentEn: `
<p>After building many APIs with Laravel across real projects, I want to share practical patterns that work in production: clean structure, consistent responses, authentication, caching, and rate limiting.</p>
<h2>Clean Structure</h2>
<p>I usually separate responsibilities into Controller, Service, and Repository layers. Controllers handle HTTP requests and validation, Services contain business rules, and Repositories abstract database queries.</p>
<h2>Conclusion</h2>
<p>Building scalable APIs is less about using the newest tools and more about consistent architecture and good habits from the start. Laravel gives you the foundation; the value comes from how you use it.</p>
`,
  },
  {
    slug: 'optimasi-web-performance-frontend',
    title: 'Optimasi Performa Web: Tips dari Pengalaman Nyata',
    titleEn: 'Web Performance Optimization: Tips from Real Experience',
    date: '20 Oktober 2024',
    category: 'Antarmuka',
    categoryEn: 'Frontend',
    tags: ['Performa', 'JavaScript', 'Web', 'Optimasi'],
    tagsEn: ['Performance', 'JavaScript', 'Web', 'Optimization'],
    excerpt: 'Dari pengalaman mengoptimasi website perusahaan di PT. Trawlbens — teknik konkret yang berhasil meningkatkan skor Lighthouse dari 45 menjadi 92 dalam waktu 2 minggu.',
    excerptEn: 'From optimizing company websites at PT. Trawlbens: concrete techniques that improved the Lighthouse score from 45 to 92 in two weeks.',
    readTime: '7 menit',
    readTimeEn: '7 min',
    emoji: '⚡',
    grad: 'grad-2',
    content: `
<p>Ketika pertama kali bergabung di PT. Trawlbens, salah satu tantangan terbesar yang saya hadapi adalah website yang lambat. Skor Lighthouse di bawah 50, First Contentful Paint di atas 4 detik, dan pengguna yang sering mengeluh. Ini adalah cerita bagaimana kami membalikkan keadaan.</p>

<h2>Audit Dulu, Optimasi Kemudian</h2>
<p>Kesalahan umum adalah langsung "optimasi" tanpa tahu apa yang sebenarnya lambat. Gunakan tab Performance di Chrome DevTools dan Lighthouse untuk mengidentifikasi hambatan yang sesungguhnya.</p>
<p>Dalam kasus kami, masalah terbesarnya adalah:</p>
<ul>
<li>Gambar yang tidak dioptimasi (ada yang 3MB per gambar!)</li>
<li>JavaScript bundle yang terlalu besar</li>
<li>Tidak ada strategi caching</li>
<li>Resource yang menghambat render</li>
</ul>

<h2>Optimasi Gambar: Kemenangan Cepat Terbesar</h2>
<p>Mengompresi dan mengkonversi gambar ke format WebP adalah hal pertama yang kami lakukan. Hasilnya luar biasa — ukuran halaman turun dari 8MB menjadi 1.2MB hanya dari langkah ini saja.</p>
<p>Tips praktis:</p>
<ul>
<li>Gunakan <code>loading="lazy"</code> untuk gambar di bawah area awal layar</li>
<li>Selalu atur dimensi width/height untuk menghindari pergeseran layout</li>
<li>Gunakan srcset untuk gambar responsif</li>
</ul>

<h2>Pemisahan Kode dan Lazy Loading</h2>
<p>Dengan Next.js/Nuxt.js, dynamic import membuat komponen hanya dimuat ketika dibutuhkan. Komponen modal, chart, dan fitur yang tidak kritis kami pindah ke lazy load. Ini mengurangi ukuran bundle awal hingga 40%.</p>

<h2>Strategi Caching</h2>
<p>Kami mengimplementasikan strategi caching berlapis:</p>
<ul>
<li><strong>Cache browser</strong>: Asset statis (JS, CSS, font) dengan cache header panjang</li>
<li><strong>Cache CDN</strong>: Untuk asset statis dan respons API yang jarang berubah</li>
<li><strong>Service Worker</strong>: Untuk kemampuan offline dan kunjungan ulang yang lebih cepat</li>
</ul>

<h2>Hasilnya</h2>
<p>Setelah 2 minggu kerja keras, skor Lighthouse naik dari 45 ke 92. First Contentful Paint turun dari 4.2s ke 0.8s. Dan yang paling penting — tidak ada lagi keluhan dari pengguna tentang website yang lambat.</p>
<p>Pelajarannya: optimasi performa bukan tentang melakukan semua teknik sekaligus, tapi tentang mengidentifikasi masalah terbesar dan menyelesaikannya satu per satu.</p>
`,
    contentEn: `
<p>When I first joined PT. Trawlbens, one major challenge was a slow website. Lighthouse scores were below 50, First Contentful Paint was above 4 seconds, and users complained often.</p>
<h2>Audit First</h2>
<p>The most important step was measuring the real bottlenecks with Chrome DevTools and Lighthouse. We optimized images, reduced JavaScript bundle size, improved caching, and handled render-blocking resources.</p>
<h2>Result</h2>
<p>In two weeks, the Lighthouse score improved from 45 to 92. Performance optimization is not about doing every trick at once, but about finding the biggest problem and solving it one by one.</p>
`,
  },
  {
    slug: 'vuejs-vs-react-perspektif-developer',
    title: 'Vue.js vs React: Perspektif Full Stack Developer',
    titleEn: 'Vue.js vs React: A Full Stack Developer Perspective',
    date: '5 September 2024',
    category: 'Frontend',
    categoryEn: 'Frontend',
    tags: ['Vue.js', 'React', 'JavaScript', 'Frontend'],
    tagsEn: ['Vue.js', 'React', 'JavaScript', 'Frontend'],
    excerpt: 'Setelah menggunakan keduanya di proyek production, ini perbandingan jujur saya tentang Vue.js dan React — kapan harus pilih yang mana, dan mana yang lebih saya sukai.',
    excerptEn: 'After using both in production projects, here is my honest comparison of Vue.js and React: when to choose each and which one I prefer.',
    readTime: '5 menit',
    readTimeEn: '5 min',
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
    contentEn: `
<p>Vue or React is one of the most common questions I hear from junior developers. After using both in production, my answer depends on the project context.</p>
<h2>Learning Curve</h2>
<p>Vue is easier to learn, with intuitive syntax and a clean Single File Component structure. React has a steeper learning curve because of JSX, hooks, and its larger ecosystem, but it becomes very productive once understood.</p>
<h2>Conclusion</h2>
<p>The better question is not which tool is best, but which tool fits the project. Vue is great for smaller teams and fast development, while React is strong for large projects and broad ecosystem needs.</p>
`,
  },
  {
    slug: 'tips-menjadi-developer-produktif',
    title: 'Tips Menjadi Developer yang Lebih Produktif',
    titleEn: 'Tips to Become a More Productive Developer',
    date: '15 November 2024',
    category: 'Produktivitas',
    categoryEn: 'Productivity',
    tags: ['Productivity', 'Tips', 'Developer', 'Career'],
    tagsEn: ['Productivity', 'Tips', 'Developer', 'Career'],
    excerpt: 'Kebiasaan dan tools yang benar-benar membuat perbedaan dalam produktivitas sehari-hari saya sebagai developer — bukan tips generik, tapi yang sudah terbukti berhasil.',
    excerptEn: 'Habits and tools that truly improve my daily productivity as a developer, not generic tips, but things that have proven useful.',
    readTime: '4 menit',
    readTimeEn: '4 min',
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
    contentEn: `
<p>There are many productivity tips for developers, but only a few truly help in daily work. These are habits I practice regularly and have found useful.</p>
<h2>Practical Habits</h2>
<p>Start the morning with three specific priorities, use Pomodoro sessions for deep work, write meaningful Git commits, read official documentation, and treat code review as a learning opportunity.</p>
<h2>Closing</h2>
<p>Productivity is not about working harder; it is about working smarter. Start with one or two habits, practice them consistently for a month, and measure the difference.</p>
`,
  },
];

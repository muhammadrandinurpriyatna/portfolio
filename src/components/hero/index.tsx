import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { text, useLocale } from "../../contexts/locale-context";

export default component$(() => {
  const typed = useSignal("");
  const { locale } = useLocale();

  useVisibleTask$(({ track, cleanup }) => {
    track(() => locale.value);
    typed.value = "";
    const roles =
      locale.value === "id"
        ? [
            "Pengembang Full Stack",
            "Pengembang Frontend",
            "Pengembang Backend",
            "Rekayasa Web",
            "Peminat UI/UX",
            "Peminat Teknologi",
          ]
        : [
            "Full Stack Developer",
            "Frontend Developer",
            "Backend Developer",
            "Web Engineer",
            "UI/UX Enthusiast",
            "Tech Enthusiast",
          ];
    let ri = 0,
      ci = 0,
      deleting = false;

    const tick = () => {
      const cur = roles[ri];
      typed.value = deleting
        ? cur.substring(0, ci - 1)
        : cur.substring(0, ci + 1);

      deleting ? ci-- : ci++;

      if (!deleting && ci === cur.length) {
        timer = window.setTimeout(() => {
          deleting = true;
          tick();
        }, 2200);
        return;
      }
      if (deleting && ci === 0) {
        deleting = false;
        ri = (ri + 1) % roles.length;
      }
      timer = window.setTimeout(tick, deleting ? 45 : 95);
    };

    let timer = window.setTimeout(tick, 800);
    cleanup(() => window.clearTimeout(timer));
  });

  return (
    <section
      id="home"
      class="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <div class="absolute inset-0 pointer-events-none overflow-hidden">
        <div class="orb absolute w-[700px] h-[700px] rounded-full blur-[90px] opacity-[0.14] bg-[radial-gradient(circle,rgb(var(--pri)),transparent)] -top-[250px] -right-[150px] animate-float" />
        <div class="orb absolute w-[500px] h-[500px] rounded-full blur-[90px] opacity-[0.14] bg-[radial-gradient(circle,rgb(var(--sec)),transparent)] -bottom-[150px] -left-[100px] animate-[float_12s_ease-in-out_infinite_reverse]" />
        <div class="orb absolute w-[350px] h-[350px] rounded-full blur-[90px] opacity-[0.14] bg-[radial-gradient(circle,rgb(var(--ter)),transparent)] top-[40%] left-[40%] animate-[float_7s_ease-in-out_infinite_2s]" />
        <div class="absolute inset-0 [background-image:linear-gradient(rgb(var(--pri)/0.04)_1px,transparent_1px),linear-gradient(90deg,rgb(var(--pri)/0.04)_1px,transparent_1px)] [background-size:60px_60px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]" />

        {/* Floating puzzle pieces */}
        <svg
          class="puzzle-piece puzzle-piece-1"
          viewBox="0 0 80 80"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            d="M10,10 L33,10 Q33,2 40,2 Q47,2 47,10 L70,10 L70,33 Q78,33 78,40 Q78,47 70,47 L70,70 L47,70 Q47,62 40,62 Q33,62 33,70 L10,70 L10,47 Q2,47 2,40 Q2,33 10,33 Z"
          />
        </svg>
        <svg
          class="puzzle-piece puzzle-piece-2"
          viewBox="0 0 80 80"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-width="3"
            d="M10,10 L33,10 Q33,2 40,2 Q47,2 47,10 L70,10 L70,33 Q78,33 78,40 Q78,47 70,47 L70,70 L47,70 Q47,62 40,62 Q33,62 33,70 L10,70 L10,47 Q2,47 2,40 Q2,33 10,33 Z"
          />
        </svg>
        <svg
          class="puzzle-piece puzzle-piece-3"
          viewBox="0 0 80 80"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            d="M10,10 L33,10 Q33,2 40,2 Q47,2 47,10 L70,10 L70,33 Q78,33 78,40 Q78,47 70,47 L70,70 L47,70 Q47,62 40,62 Q33,62 33,70 L10,70 L10,47 Q2,47 2,40 Q2,33 10,33 Z"
          />
        </svg>
        <svg
          class="puzzle-piece puzzle-piece-4"
          viewBox="0 0 80 80"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-width="3"
            d="M10,10 L33,10 Q33,2 40,2 Q47,2 47,10 L70,10 L70,33 Q78,33 78,40 Q78,47 70,47 L70,70 L47,70 Q47,62 40,62 Q33,62 33,70 L10,70 L10,47 Q2,47 2,40 Q2,33 10,33 Z"
          />
        </svg>
        <svg
          class="puzzle-piece puzzle-piece-5"
          viewBox="0 0 80 80"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            d="M10,10 L33,10 Q33,2 40,2 Q47,2 47,10 L70,10 L70,33 Q78,33 78,40 Q78,47 70,47 L70,70 L47,70 Q47,62 40,62 Q33,62 33,70 L10,70 L10,47 Q2,47 2,40 Q2,33 10,33 Z"
          />
        </svg>
      </div>

      {/* Content */}
      <div class="relative z-[1] max-w-[1100px] mx-auto px-5 sm:px-6 pt-[100px] pb-[90px] lg:pb-[60px] grid grid-cols-1 lg:grid-cols-[1.1fr_.9fr] gap-9 lg:gap-[60px] items-center w-full">
        {/* Left */}
        <div class="text-center lg:text-left">
          <div class="font-mono text-[13px] text-pri mb-[18px] flex items-center justify-center lg:justify-start gap-2.5 animate-fade-up [animation-delay:.1s]">
            <span class="w-9 h-px bg-pri inline-block" />
            {text(locale.value, "Halo, saya", "Hello, I am")}
          </div>

          <h1 class="text-[clamp(38px,5.5vw,68px)] font-extrabold leading-[1.05] mb-[18px] animate-fade-up [animation-delay:.2s]">
            Muhammad Randi
            <br />
            <span class="text-gradient">Nur Priyatna</span>
          </h1>

          <div class="font-mono text-[clamp(15px,2vw,20px)] text-ink-2 mb-[26px] animate-fade-up [animation-delay:.3s] flex items-center justify-center lg:justify-start gap-1 flex-wrap">
            <span class="text-pri">&lt;</span>
            <span class="text-sec">{typed.value}</span>
            <span class="text-pri font-light animate-blink">|</span>
            <span class="text-pri">/&gt;</span>
          </div>

          <p class="text-ink-2 text-[15.5px] leading-[1.75] max-w-[500px] mx-auto lg:mx-0 mb-9 animate-fade-up [animation-delay:.4s]">
            {locale.value === "id" ? (
              <>
                Pengembang full stack berpengalaman dalam membangun web dan
                aplikasi yang
                <strong class="text-ink font-semibold">
                  {" "}
                  berkinerja tinggi
                </strong>
                ,{" "}
                <strong class="text-ink font-semibold">
                  mudah dikembangkan
                </strong>
                , dan
                <strong class="text-ink font-semibold"> ramah pengguna</strong>.
              </>
            ) : (
              <>
                Experienced full stack developer building
                <strong class="text-ink font-semibold">
                  {" "}
                  high-performance
                </strong>
                , <strong class="text-ink font-semibold">scalable</strong>, and
                <strong class="text-ink font-semibold">
                  {" "}
                  user-friendly
                </strong>{" "}
                web applications.
              </>
            )}
          </p>

          <div class="flex gap-3.5 flex-wrap justify-center lg:justify-start mb-11 animate-fade-up [animation-delay:.5s]">
            <Link
              href="#contact"
              class="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-sm font-bold bg-grad text-[#0a0a0a] cursor-pointer no-underline border-0 transition-all hover:scale-105 hover:shadow-[0_10px_28px_rgb(var(--pri)/0.35)]"
            >
              {text(locale.value, "Hubungi Saya", "Contact Me")}
              <svg
                class="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="#experience"
              class="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-sm font-semibold bg-transparent border border-bdr-hi text-ink-2 cursor-pointer no-underline transition-all hover:border-pri hover:text-pri hover:scale-105"
            >
              {text(locale.value, "Lihat Pengalaman", "View Experience")}
            </Link>
          </div>

          <div class="flex justify-center lg:justify-start gap-2.5 animate-fade-up [animation-delay:.6s]">
            <a
              href="mailto:randi@starnsparks.com"
              class="w-11 h-11 flex items-center justify-center bg-surf border border-bdr rounded-xl text-ink-2 no-underline transition-all hover:border-pri hover:text-pri hover:rotate-[20deg] hover:scale-110 hover:shadow-[0_8px_20px_rgb(var(--pri)/0.2)]"
              title="Email"
            >
              <svg
                class="w-[18px] h-[18px]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/randiprytn"
              target="_blank"
              rel="noreferrer"
              class="w-11 h-11 flex items-center justify-center bg-surf border border-bdr rounded-xl text-ink-2 no-underline transition-all hover:border-pri hover:text-pri hover:rotate-[20deg] hover:scale-110 hover:shadow-[0_8px_20px_rgb(var(--pri)/0.2)]"
              title="LinkedIn"
            >
              <svg
                class="w-[18px] h-[18px]"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a
              href="https://wa.me/6282110474856"
              target="_blank"
              rel="noreferrer"
              class="w-11 h-11 flex items-center justify-center bg-surf border border-bdr rounded-xl text-ink-2 no-underline transition-all hover:border-pri hover:text-pri hover:rotate-[20deg] hover:scale-110 hover:shadow-[0_8px_20px_rgb(var(--pri)/0.2)]"
              title="WhatsApp"
            >
              <svg
                class="w-[18px] h-[18px]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right */}
        <div class="w-full max-w-[520px] mx-auto flex flex-col items-center gap-6 lg:gap-9 animate-[fadeIn_1s_ease_both_.3s]">
          <div class="relative w-[min(480px,92vw)] h-[min(480px,70vh)] animate-scale-in [animation-delay:.4s]">
            <img
              src="/images/profile-photo.webp"
              alt="Muhammad Randi Nur Priyatna"
              width="480"
              height="480"
              class="w-full h-full object-contain object-center"
            />
          </div>

          <div class="grid grid-cols-3 gap-2 sm:gap-3.5 w-full">
            <div class="bg-surf border border-bdr rounded-[14px] px-2 sm:px-3.5 py-3 sm:py-[18px] text-center transition-all relative overflow-hidden hover:border-pri/40 hover:-translate-y-1">
              <span class="block text-[22px] sm:text-[28px] font-extrabold font-mono text-gradient">
                5+
              </span>
              <span class="text-[9px] sm:text-[10px] text-ink-3 uppercase tracking-[.6px] sm:tracking-[1.2px] mt-1 block">
                {text(locale.value, "Tahun Pengalaman", "Years Exp")}
              </span>
            </div>
            <div class="bg-surf border border-bdr rounded-[14px] px-2 sm:px-3.5 py-3 sm:py-[18px] text-center transition-all relative overflow-hidden hover:border-pri/40 hover:-translate-y-1">
              <span class="block text-[22px] sm:text-[28px] font-extrabold font-mono text-gradient">
                15+
              </span>
              <span class="text-[9px] sm:text-[10px] text-ink-3 uppercase tracking-[.6px] sm:tracking-[1.2px] mt-1 block">
                {text(locale.value, "Teknologi", "Technologies")}
              </span>
            </div>
            <div class="bg-surf border border-bdr rounded-[14px] px-2 sm:px-3.5 py-3 sm:py-[18px] text-center transition-all relative overflow-hidden hover:border-pri/40 hover:-translate-y-1">
              <span class="block text-[22px] sm:text-[28px] font-extrabold font-mono text-gradient">
                5
              </span>
              <span class="text-[9px] sm:text-[10px] text-ink-3 uppercase tracking-[.6px] sm:tracking-[1.2px] mt-1 block">
                {text(locale.value, "Perusahaan", "Companies")}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div class="absolute bottom-4 sm:bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ink-3 font-mono text-[10px] tracking-[2px] uppercase animate-[fadeIn_1s_ease_both_1.4s]">
        <div class="w-[22px] h-9 border-2 border-bdr-hi rounded-[11px] relative">
          <span class="absolute w-1 h-2 bg-pri rounded-sm left-1/2 -translate-x-1/2 top-[5px] animate-scroll-bob block" />
        </div>
        <span>{text(locale.value, "gulir", "scroll")}</span>
      </div>
    </section>
  );
});

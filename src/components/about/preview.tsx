import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { text, useLocale } from "../../contexts/locale-context";

const skills = [
  {
    id: "frontend",
    titleId: "Antarmuka",
    titleEn: "Frontend",
    body: "Next, Nuxt, Qwik, Angular, Astro",
    icon: (
      <svg class="w-5 h-5 text-sa" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
        <path d="M4 5h16v11H4z" />
        <path d="M8 21h8M12 16v5" />
      </svg>
    ),
  },
  {
    id: "backend",
    titleId: "Sisi Server",
    titleEn: "Backend",
    body: "Laravel, Axum, Go, Yii, Python",
    icon: (
      <svg class="w-5 h-5 text-sa" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
        <path d="M12 15.5A3.5 3.5 0 1 0 12 8a3.5 3.5 0 0 0 0 7.5z" />
        <path d="M19.4 15a1.8 1.8 0 0 0 .36 1.98l.04.04a2.2 2.2 0 1 1-3.11 3.11l-.04-.04A1.8 1.8 0 0 0 14.67 20a1.8 1.8 0 0 0-1.67 1.1l-.02.06a2.2 2.2 0 0 1-4.16 0l-.02-.06A1.8 1.8 0 0 0 7.13 20a1.8 1.8 0 0 0-1.98.36l-.04.04A2.2 2.2 0 1 1 2 17.29l.04-.04A1.8 1.8 0 0 0 2.4 15a1.8 1.8 0 0 0-1.1-1.67l-.06-.02a2.2 2.2 0 0 1 0-4.16l.06-.02A1.8 1.8 0 0 0 2.4 7.46a1.8 1.8 0 0 0-.36-1.98L2 5.44a2.2 2.2 0 1 1 3.11-3.11l.04.04A1.8 1.8 0 0 0 7.13 2.7 1.8 1.8 0 0 0 8.8 1.6l.02-.06a2.2 2.2 0 0 1 4.16 0l.02.06A1.8 1.8 0 0 0 14.67 2.7a1.8 1.8 0 0 0 1.98-.36l.04-.04A2.2 2.2 0 1 1 19.8 5.4l-.04.04a1.8 1.8 0 0 0-.36 1.98c.17.43.51.77.94.94l.06.02a2.2 2.2 0 0 1 0 4.16l-.06.02a1.8 1.8 0 0 0-.94.94z" />
      </svg>
    ),
  },
  {
    id: "database",
    titleId: "Basis Data",
    titleEn: "Database",
    body: "MySQL & PostgreSQL",
    icon: (
      <svg class="w-5 h-5 text-sa" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
        <ellipse cx="12" cy="5" rx="7" ry="3" />
        <path d="M5 5v6c0 1.66 3.13 3 7 3s7-1.34 7-3V5" />
        <path d="M5 11v6c0 1.66 3.13 3 7 3s7-1.34 7-3v-6" />
      </svg>
    ),
  },
  {
    id: "uiux",
    titleId: "UI/UX",
    titleEn: "UI/UX",
    body: "Figma & Adobe XD",
    icon: (
      <svg class="w-5 h-5 text-sa" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
        <path d="M4 5h16v14H4z" />
        <path d="M8 9h8M8 13h5" />
      </svg>
    ),
  },
];

export default component$(() => {
  const ref = useSignal<Element>();
  const { locale } = useLocale();

  useVisibleTask$(({ track }) => {
    track(() => ref.value);
    if (!ref.value) return;

    let timers: number[] = [];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          const els = e.target.querySelectorAll<HTMLElement>(
            ".reveal, .reveal-scale",
          );
          if (e.isIntersecting) {
            els.forEach((el, i) => {
              timers.push(
                window.setTimeout(() => el.classList.add("visible"), i * 80),
              );
            });
          } else {
            timers.forEach(clearTimeout);
            timers = [];
            els.forEach((el) => el.classList.remove("visible"));
          }
        });
      },
      { threshold: 0.15 },
    );

    observer.observe(ref.value);
    return () => {
      observer.disconnect();
      timers.forEach(clearTimeout);
    };
  });

  return (
    <section id="about" ref={ref} class="bg-bg">
      <div class="max-w-[1100px] mx-auto py-28 px-6">
        <div class="grid grid-cols-[1fr_.95fr] gap-[60px] items-start max-[900px]:grid-cols-1 max-[900px]:gap-10">
          <div>
            <span class="font-mono text-[11px] tracking-[3px] uppercase text-sa block mb-2.5 reveal">
              {text(locale.value, "Tentang Saya", "About Me")}
            </span>
            <h2 class="text-[clamp(26px,4vw,40px)] font-extrabold text-ink mb-5 leading-[1.15] reveal d-100">
              {text(locale.value, "Siapa Saya?", "Who Am I?")}
            </h2>

            <p class="text-ink-2 text-[15.5px] leading-[1.8] mb-5 reveal d-200">
              {locale.value === "id" ? (
                <>
                  Saya adalah seorang{" "}
                  <strong class="text-ink font-semibold">
                    Pengembang Full Stack
                  </strong>{" "}
                  yang berbasis di Bogor, Jawa Barat, dengan keahlian dalam
                  menciptakan pengalaman web yang menarik dan fungsional.
                </>
              ) : (
                <>
                  I am a{" "}
                  <strong class="text-ink font-semibold">
                    Full Stack Developer
                  </strong>{" "}
                  based in Bogor, West Java, with expertise in creating
                  engaging and functional web experiences.
                </>
              )}
            </p>
            <p class="text-ink-2 text-[15.5px] leading-[1.8] reveal d-300">
              {locale.value === "id" ? (
                <>
                  Selama lebih dari 5+ tahun, saya berkontribusi di berbagai
                  perusahaan teknologi, menangani pengembangan{" "}
                  <strong class="text-ink font-semibold">antarmuka</strong>{" "}
                  maupun{" "}
                  <strong class="text-ink font-semibold">sisi server</strong>{" "}
                  secara menyeluruh.
                </>
              ) : (
                <>
                  For more than 5 years, I have contributed to technology
                  companies, handling both{" "}
                  <strong class="text-ink font-semibold">frontend</strong>{" "}
                  and <strong class="text-ink font-semibold">backend</strong>{" "}
                  development end to end.
                </>
              )}
            </p>
          </div>

          <div class="grid grid-cols-2 gap-4 max-[520px]:grid-cols-1">
            {skills.map((skill, index) => (
              <div
                key={skill.id}
                class={`bg-surf border border-bdr rounded-[14px] p-6 transition-all duration-300 relative overflow-hidden hover:border-sa/35 hover:-translate-y-0.5 hover:shadow-card-sm reveal-scale d-${(index + 2) * 100} before:absolute before:bottom-0 before:left-0 before:right-0 before:h-0.5 before:bg-sa before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100`}
              >
                <div class="w-11 h-11 bg-sa/12 rounded-xl flex items-center justify-center mb-3.5">
                  {skill.icon}
                </div>
                <h4 class="text-[15px] font-bold text-ink mb-1.5">
                  {text(locale.value, skill.titleId, skill.titleEn)}
                </h4>
                <p class="text-[13px] text-ink-3 leading-[1.5]">
                  {skill.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

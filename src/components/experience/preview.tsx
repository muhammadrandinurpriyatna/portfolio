import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { EXPERIENCES } from "../../data/experience";
import { pick } from "../../data/localized";
import { text, useLocale } from "../../contexts/locale-context";

export default component$(() => {
  const ref = useSignal<Element>();
  const { locale } = useLocale();
  const typeClasses = (type: string) =>
    type === "fulltime"
      ? "bg-ter/10 text-ter border border-ter/20"
      : type === "freelance"
        ? "bg-pri/10 text-pri border border-pri/20"
        : "bg-sec/10 text-sec border border-sec/20";
  const typeLabel = (type: string) =>
    type === "fulltime"
      ? "Penuh Waktu"
      : type === "freelance"
        ? "Lepas"
        : "Magang";

  useVisibleTask$(({ track }) => {
    track(() => ref.value);
    if (!ref.value) return;

    const items = ref.value.querySelectorAll<HTMLElement>(".timeline-item");
    const itemObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          const el = e.target as HTMLElement;
          if (e.isIntersecting) {
            el.style.opacity = "1";
            el.style.transform = "translateX(0)";
          } else {
            el.style.opacity = "0";
            el.style.transform = "translateX(-30px)";
          }
        });
      },
      { threshold: 0.15 },
    );
    items.forEach((item, i) => {
      item.style.opacity = "0";
      item.style.transform = "translateX(-30px)";
      item.style.transition = `opacity .7s ease ${i * 120}ms, transform .7s ease ${i * 120}ms`;
      itemObs.observe(item);
    });

    let timers: number[] = [];
    const headerObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          const els =
            e.target.querySelectorAll<HTMLElement>(".reveal, .reveal-l");
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
      { threshold: 0.1 },
    );
    headerObs.observe(ref.value);

    return () => {
      itemObs.disconnect();
      headerObs.disconnect();
      timers.forEach(clearTimeout);
    };
  });

  return (
    <section id="experience" ref={ref} class="bg-bg">
      <div class="max-w-[1100px] mx-auto py-28 px-6">
        <span class="font-mono text-[11px] tracking-[3px] uppercase text-sa block mb-2.5 reveal">
          {text(locale.value, "Karir", "Career")}
        </span>
        <h2 class="text-[clamp(26px,4vw,40px)] font-extrabold text-ink mb-3.5 leading-[1.15] reveal d-100">
          {text(locale.value, "Pengalaman Kerja", "Work Experience")}
        </h2>
        <div class="w-[52px] h-[3px] bg-sa rounded-sm mb-16 reveal d-200" />

        <div class="relative pl-10">
          <div class="absolute left-[10px] top-[10px] bottom-0 w-0.5 bg-gradient-to-b from-sa via-sa/20 to-transparent" />

          {EXPERIENCES.map((exp) => (
            <a
              key={exp.slug}
              href={`/experience/${exp.slug}`}
              class="timeline-item relative mb-[52px] group block no-underline text-inherit"
            >
              <div class="absolute -left-9 top-[6px] w-4 h-4 rounded-full bg-surf border-2 border-sa z-[1] transition-all group-hover:bg-sa group-hover:shadow-[0_0_14px_rgb(var(--sa)/0.6)] group-hover:scale-125" />
              <div class="bg-surf border border-bdr rounded-2xl px-7 py-6 transition-all duration-300 hover:border-sa/35 hover:translate-x-1.5 hover:shadow-[0_14px_36px_rgb(0_0_0/.4)]">
                <span
                  class={`inline-flex items-center gap-1 font-mono text-[11px] px-2.5 py-0.5 rounded-[5px] mb-1.5 ${typeClasses(exp.type)}`}
                >
                  {typeLabel(exp.type)}
                </span>
                <div class="flex justify-between items-start gap-4 mb-1.5 flex-wrap">
                  <span class="text-[17px] font-bold text-ink">{pick(locale.value, exp.role)}</span>
                  <span class="font-mono text-[11px] text-sa bg-sa/8 px-2.5 py-1 rounded-md border border-sa/20 whitespace-nowrap">
                    {exp.date}
                  </span>
                </div>
                <div class="text-[13.5px] text-sa font-medium mb-4 flex items-center gap-1.5 before:content-[''] before:w-4 before:h-px before:bg-sa">
                  {exp.company} · {exp.location}
                </div>
                <ul class="list-none flex flex-col gap-2">
                  {exp.points.map((p) => (
                    <li
                      key={pick(locale.value, p)}
                      class="text-sm text-ink-2 leading-[1.6] flex gap-2.5"
                    >
                      <span class="text-sa text-xs mt-0.5 shrink-0">▸</span>
                      {pick(locale.value, p)}
                    </li>
                  ))}
                </ul>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
});

import { component$ } from '@builder.io/qwik';

interface Props { href: string; label?: string; }

export const SeeMore = component$(({ href, label = 'Lihat Selengkapnya' }: Props) => (
  <div class="flex justify-center mt-[-52px] relative z-[2]">
    <a href={href} class="inline-flex items-center gap-2.5 bg-surf border border-sa text-sa text-sm font-semibold px-8 py-3.5 rounded-xl shadow-[0_4px_24px_rgb(0_0_0/0.35)] backdrop-blur-xl transition-all duration-300 no-underline hover:bg-sa/10 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgb(0_0_0/0.4)] group">
      {label}
      <svg class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </a>
  </div>
));

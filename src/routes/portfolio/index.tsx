import { component$ } from '@builder.io/qwik';
import { type DocumentHead } from '@builder.io/qwik-city';
import Portfolio from '../../components/portfolio';

export default component$(() => (
  <>
    <div class="pt-[100px] pb-10 bg-bg border-b border-bdr">
      <div class="max-w-[1100px] mx-auto px-6">
        <a href="/" class="inline-flex items-center gap-2 text-[13px] text-ink-3 no-underline font-mono mb-6 transition-all group hover:text-sa">
          <svg class="w-4 h-4 transition-transform group-hover:-translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
          Kembali
        </a>
        <div class="flex items-center gap-2 mb-2.5">
          <svg class="w-3.5 h-3.5 text-sa shrink-0" viewBox="0 0 80 80" fill="currentColor"><path d="M10,10 L33,10 Q33,2 40,2 Q47,2 47,10 L70,10 L70,33 Q78,33 78,40 Q78,47 70,47 L70,70 L47,70 Q47,62 40,62 Q33,62 33,70 L10,70 L10,47 Q2,47 2,40 Q2,33 10,33 Z"/></svg>
          <span class="font-mono text-[11px] tracking-[3px] uppercase text-sa">Portofolio</span>
        </div>
        <h1 class="text-[clamp(28px,4vw,44px)] font-extrabold text-ink leading-[1.1]">Proyek yang <span class="text-gradient">Dikerjakan</span></h1>
      </div>
    </div>
    <Portfolio />
  </>
));

export const head: DocumentHead = {
  title: 'Portfolio — Muhammad Randi Nur Priyatna',
  meta: [{ name: 'description', content: 'Kumpulan proyek web yang pernah saya kerjakan.' }],
};

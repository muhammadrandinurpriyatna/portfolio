import { component$ } from '@builder.io/qwik';
import { type DocumentHead } from '@builder.io/qwik-city';
import About from '../../components/about';

export default component$(() => (
  <>
    <div class="pt-[100px] pb-4 bg-bg border-b border-bdr">
      <div class="max-w-[1100px] mx-auto px-6">
        <a href="/" class="inline-flex items-center gap-2 text-[13px] text-ink-3 no-underline font-mono transition-all group hover:text-sa">
          <svg class="w-4 h-4 transition-transform group-hover:-translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
          Kembali
        </a>
      </div>
    </div>
    <About />
  </>
));

export const head: DocumentHead = {
  title: 'Tentang Saya — Muhammad Randi Nur Priyatna',
  meta: [{ name: 'description', content: 'Full Stack Developer dari Bogor, Indonesia.' }],
};

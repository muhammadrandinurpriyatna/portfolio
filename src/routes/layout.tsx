import { component$, Slot } from '@builder.io/qwik';
import Navbar from '../components/navbar';

export default component$(() => (
  <>
    <Navbar />
    <main>
      <Slot />
    </main>
    <footer class="border-t border-bdr py-10 px-6 text-center">
      <p class="text-[13px] text-ink-3 font-mono">
        Dibuat dengan <span class="text-pri">♥</span> menggunakan{' '}
        <span class="text-pri">Qwik</span> ·{' '}
        © {new Date().getFullYear()} Muhammad Randi Nur Priyatna
      </p>
    </footer>
  </>
));

import { component$, Slot } from "@builder.io/qwik";
import Navbar from "../components/navbar";

export default component$(() => (
  <>
    <Navbar />
    <main id="content">
      <Slot />
    </main>
    <footer
      class="border-t border-bdr py-10 px-6 text-center"
      aria-label="Informasi situs"
    >
      <p class="text-[13px] text-ink-3 font-mono">
        © {new Date().getFullYear()} Star And Sparks Technology. All rights
        reserved.
      </p>
    </footer>
  </>
));

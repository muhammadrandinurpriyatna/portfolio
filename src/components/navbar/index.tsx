import { $, component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';

export default component$(() => {
  const scrolled = useSignal(false);
  const navHidden = useSignal(false);
  const isDark = useSignal(true);
  const loc = useLocation();

  const isHome = loc.url.pathname === '/';

  useVisibleTask$(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'light') {
      isDark.value = false;
      document.documentElement.classList.add('light');
    }

    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      scrolled.value = y > 20;
      if (y < 80) {
        navHidden.value = false;
      } else if (y > lastY + 4) {
        navHidden.value = true;
      } else if (y < lastY - 4) {
        navHidden.value = false;
      }
      lastY = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  });

  const toggleTheme = $(() => {
    isDark.value = !isDark.value;
    if (isDark.value) {
      document.documentElement.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.add('light');
      localStorage.setItem('theme', 'light');
    }
  });

  const links = [
    { href: '/about',      label: 'About'      },
    { href: '/skills',     label: 'Skills'     },
    { href: '/experience', label: 'Experience' },
    { href: '/portfolio',  label: 'Projects'   },
    { href: '/blog',       label: 'Blog'       },
  ];

  const isActive = (href: string) =>
    loc.url.pathname === href ||
    (href !== '/' && loc.url.pathname.startsWith(href));

  return (
    <nav class={`fixed inset-x-0 top-0 z-[100] h-[68px] px-8 flex items-center justify-between transition-[transform,background,border-color,backdrop-filter] duration-300 ${scrolled.value ? 'bg-bg/85 backdrop-blur-xl border-b border-bdr' : ''} ${navHidden.value ? 'nav-hidden' : ''}`}>
      <a href="/" class="font-mono text-base font-semibold text-ink no-underline flex items-center gap-2">
        <span class="text-pri">&lt;</span>Randi<span class="text-pri">/&gt;</span>
      </a>

      <ul class="flex items-center gap-1 list-none">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              class={`text-[13px] font-medium no-underline px-3.5 py-1.5 rounded-lg transition-[color,background] duration-200 hover:text-pri hover:bg-pri/8 ${isActive(l.href) ? 'text-pri bg-pri/8' : 'text-ink-2'}`}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      <div style="display:flex; align-items:center; gap:10px;">
        <button
          class="w-10 h-10 flex items-center justify-center bg-surf border border-bdr-hi rounded-xl cursor-pointer text-ink-2 transition-all hover:border-pri hover:text-pri hover:rotate-[20deg] hover:scale-110"
          onClick$={toggleTheme}
          aria-label="Toggle theme"
        >
          <svg class="icon-moon w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
          <svg class="icon-sun w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </svg>
        </button>

        <a href={isHome ? '#contact' : '/#contact'} class="text-[13px] font-semibold text-pri no-underline px-[18px] py-2 border border-pri/30 rounded-lg transition-all hover:bg-pri/10 hover:border-pri hover:-translate-y-0.5">
          Contact
        </a>
      </div>

      <button class="hidden flex-col gap-[5px] bg-transparent border-0 cursor-pointer p-1" aria-label="menu">
        <span class="w-6 h-0.5 bg-ink-2 rounded-sm block" />
        <span class="w-6 h-0.5 bg-ink-2 rounded-sm block" />
        <span class="w-6 h-0.5 bg-ink-2 rounded-sm block" />
      </button>
    </nav>
  );
});

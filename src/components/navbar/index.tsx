import { $, component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
import LanguageSwitcher from '../language-switcher';
import { text, useLocale } from '../../contexts/locale-context';

export default component$(() => {
  const scrolled = useSignal(false);
  const navHidden = useSignal(false);
  const isDark = useSignal(true);
  const menuOpen = useSignal(false);
  const loc = useLocation();
  const { locale } = useLocale();

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

  const closeMenu = $(() => {
    menuOpen.value = false;
  });

  const links = [
    { href: '/portfolio',  label: text(locale.value, 'Proyek', 'Projects')   },
    { href: '/blog',       label: 'Blog'       },
  ];

  const isActive = (href: string) =>
    loc.url.pathname === href ||
    (href !== '/' && loc.url.pathname.startsWith(href));

  return (
    <nav class={`fixed inset-x-0 top-0 z-[100] min-h-[68px] px-4 sm:px-6 lg:px-8 transition-[transform,background,border-color,backdrop-filter] duration-300 ${scrolled.value || menuOpen.value ? 'bg-bg/90 backdrop-blur-xl border-b border-bdr' : ''} ${navHidden.value && !menuOpen.value ? 'nav-hidden' : ''}`}>
      <div class="h-[68px] flex items-center justify-between gap-3">
        <a href="/" class="font-mono text-base font-semibold text-ink no-underline flex items-center gap-2 shrink-0" onClick$={closeMenu}>
          <span class="text-pri">&lt;</span>Randi<span class="text-pri">/&gt;</span>
        </a>

        <ul class="hidden md:flex items-center gap-1 list-none">
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

        <div class="flex items-center gap-2 sm:gap-2.5 shrink-0">
          <button
            class="w-10 h-10 flex items-center justify-center bg-surf border border-bdr-hi rounded-xl cursor-pointer text-ink-2 transition-all hover:border-pri hover:text-pri hover:rotate-[20deg] hover:scale-110"
            onClick$={toggleTheme}
            aria-label={text(locale.value, 'Ganti tema', 'Toggle theme')}
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

          <LanguageSwitcher />

          <a href={isHome ? '#contact' : '/#contact'} class="hidden md:inline-flex text-[13px] font-semibold text-pri no-underline px-[18px] py-2 border border-pri/30 rounded-lg transition-all hover:bg-pri/10 hover:border-pri hover:scale-105">
            {text(locale.value, 'Kontak', 'Contact')}
          </a>

          <button
            type="button"
            class="md:hidden w-10 h-10 flex items-center justify-center bg-surf border border-bdr-hi rounded-xl cursor-pointer text-ink-2 transition-all hover:border-pri hover:text-pri"
            aria-label={text(locale.value, 'Buka menu', 'Open menu')}
            aria-expanded={menuOpen.value}
            onClick$={$(() => { menuOpen.value = !menuOpen.value; })}
          >
            <span class="sr-only">{text(locale.value, 'Menu navigasi', 'Navigation menu')}</span>
            <svg class={`${menuOpen.value ? 'hidden' : 'block'} w-5 h-5`} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
            <svg class={`${menuOpen.value ? 'block' : 'hidden'} w-5 h-5`} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          </button>
        </div>
      </div>

      <div class={`md:hidden overflow-hidden transition-[max-height,opacity,padding] duration-300 ${menuOpen.value ? 'max-h-[360px] opacity-100 pb-4' : 'max-h-0 opacity-0 pb-0'}`}>
        <div class="relative rounded-2xl border border-bdr-hi bg-bg/95 p-2.5 backdrop-blur-xl overflow-hidden">
          <div class="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-pri/70 to-transparent" />
          <div class="pointer-events-none absolute -right-16 -top-20 h-40 w-40 rounded-full bg-pri/10 blur-3xl" />

          <div class="relative grid gap-1.5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick$={closeMenu}
                class={`group flex items-center justify-between rounded-xl px-3.5 py-3 text-sm font-semibold no-underline transition-all hover:bg-pri/8 hover:text-pri ${isActive(l.href) ? 'text-pri bg-pri/10 border border-pri/18' : 'text-ink-2 border border-transparent'}`}
              >
                <span class="flex items-center gap-3">
                  <span class={`flex h-9 w-9 items-center justify-center rounded-lg border transition-colors ${isActive(l.href) ? 'border-pri/30 bg-pri/12 text-pri' : 'border-bdr bg-surf text-ink-3 group-hover:border-pri/25 group-hover:text-pri'}`}>
                    {l.href === '/portfolio' ? (
                      <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9">
                        <path d="M4 7h16M4 12h16M4 17h10" />
                      </svg>
                    ) : (
                      <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9">
                        <path d="M4 19.5V5.75A2.75 2.75 0 0 1 6.75 3H20v16H6.75A2.75 2.75 0 0 0 4 21.75" />
                        <path d="M8 7h8M8 11h6" />
                      </svg>
                    )}
                  </span>
                  <span>{l.label}</span>
                </span>
                <svg class="h-4 w-4 text-ink-3 transition-transform group-hover:translate-x-0.5 group-hover:text-pri" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </a>
            ))}
          </div>

          <div class="relative mt-2">
            <a
              href={isHome ? '#contact' : '/#contact'}
              onClick$={closeMenu}
              class="flex min-h-12 items-center justify-center gap-2 rounded-xl bg-pri px-4 py-3 text-sm font-extrabold text-bg no-underline transition-all hover:-translate-y-0.5"
            >
              <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              {text(locale.value, 'Hubungi Saya', 'Contact Me')}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
});

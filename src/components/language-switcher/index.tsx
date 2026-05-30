import { $, component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import { useLocale } from '../../contexts/locale-context';

export default component$(() => {
  const { locale } = useLocale();
  const isOpen = useSignal(false);
  const ref = useSignal<HTMLElement>();
  const triggerRef = useSignal<HTMLButtonElement>();
  const label = locale.value === 'id' ? 'Bahasa' : 'Language';

  useVisibleTask$(({ track, cleanup }) => {
    track(() => isOpen.value);
    const onClick = (event: Event) => {
      if (isOpen.value && ref.value && !ref.value.contains(event.target as Node)) {
        isOpen.value = false;
      }
    };
    document.addEventListener('click', onClick);
    cleanup(() => document.removeEventListener('click', onClick));
  });

  return (
    <div class="relative" ref={ref}>
      <button
        ref={triggerRef}
        type="button"
        onClick$={$(() => { isOpen.value = !isOpen.value; })}
        class="h-10 inline-flex items-center gap-1.5 rounded-xl border border-bdr-hi bg-surf px-3 text-xs font-semibold text-ink-2 transition-all hover:border-pri hover:text-pri"
        aria-expanded={isOpen.value}
        aria-haspopup="true"
        aria-label={label}
        title={label}
      >
        <span>{locale.value === 'id' ? 'ID' : 'EN'}</span>
        <svg class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      <div
        class={`absolute right-0 top-full z-50 mt-2 w-40 rounded-xl border border-bdr bg-surf py-1 shadow-card ${isOpen.value ? 'block' : 'hidden'}`}
        role="menu"
        aria-hidden={!isOpen.value}
        inert={!isOpen.value ? true : undefined}
      >
        <button
          type="button"
          class={`w-full px-4 py-2.5 text-left text-sm transition hover:bg-pri/10 ${locale.value === 'id' ? 'text-pri font-semibold' : 'text-ink-2'}`}
          role="menuitem"
          onClick$={$(() => {
            locale.value = 'id';
            triggerRef.value?.focus();
            isOpen.value = false;
          })}
        >
          Indonesia
        </button>
        <button
          type="button"
          class={`w-full px-4 py-2.5 text-left text-sm transition hover:bg-pri/10 ${locale.value === 'en' ? 'text-pri font-semibold' : 'text-ink-2'}`}
          role="menuitem"
          onClick$={$(() => {
            locale.value = 'en';
            triggerRef.value?.focus();
            isOpen.value = false;
          })}
        >
          English
        </button>
      </div>
    </div>
  );
});

import {
  component$,
  createContextId,
  Slot,
  useContext,
  useContextProvider,
  useStore,
  useVisibleTask$,
} from '@builder.io/qwik';

export type Locale = 'id' | 'en';

const STORAGE_KEY = 'portfolio-locale';

export const LocaleContext = createContextId<{ locale: { value: Locale } }>('locale');

export const useLocale = () => useContext(LocaleContext);

export const LocaleProvider = component$(() => {
  const locale = useStore<{ value: Locale }>({ value: 'id' });

  useVisibleTask$(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (stored === 'id' || stored === 'en') {
      locale.value = stored;
    }
    document.documentElement.lang = locale.value;
  });

  useVisibleTask$(({ track }) => {
    track(() => locale.value);
    localStorage.setItem(STORAGE_KEY, locale.value);
    document.documentElement.lang = locale.value;
  });

  useContextProvider(LocaleContext, { locale });

  return <Slot />;
});

export const text = (locale: Locale, id: string, en: string) => (locale === 'id' ? id : en);

import type { Locale } from '../contexts/locale-context';

export interface LocalizedText {
  id: string;
  en: string;
}

export const l = (id: string, en: string): LocalizedText => ({ id, en });

export const pick = (locale: Locale, value: string | LocalizedText) =>
  typeof value === 'string' ? value : value[locale];

export const pickList = (locale: Locale, values: Array<string | LocalizedText>) =>
  values.map((value) => pick(locale, value));

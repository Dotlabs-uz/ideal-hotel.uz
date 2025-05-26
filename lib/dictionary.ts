import "server-only";
import type { Locale } from "@/i18n.config";

const dictionaries = {
  ru: async () => await import("@/langs/ru.json").then((module) => module.default),
  en: async () => await import("@/langs/en.json").then((module) => module.default),
  uz: async () => await import("@/langs/uz.json").then((module) => module.default),
};

// export const getDictionary = async (locale: Locale) => dictionaries[locale]();

export const getDictionary = async (locale: Locale) => {
  const dictionaryLoader = dictionaries[locale];

  if (typeof dictionaryLoader !== 'function') {
    throw new TypeError(`Загрузчик словаря для локали '${locale}' не является функцией или не существует` );
  }

  return await dictionaryLoader();
};
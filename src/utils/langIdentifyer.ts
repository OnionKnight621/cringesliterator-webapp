import { LANGUAGES } from "../constants";

export function languageType(input: string) {
  const languages = {
    LAT: /^[a-z]+$/i,
    CYR: /^[а-яіїьєґ]+$/i,
  };

  let lang = LANGUAGES.CYR;

  Object.entries(languages).forEach(([key, value]) => {
    if (value.test(input) == true) {
      lang = key as LANGUAGES;
    }
  });

  return lang;
}

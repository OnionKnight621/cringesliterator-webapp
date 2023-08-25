import { constants } from 'cringesliterator';

const { CYR_CRI, LAT_CRI } = constants;

import { LANGUAGES } from "../constants";

export function languageType(input: string) {
  const languages = {
    LAT: /^[a-z]+$/i,
    CYR: /^[а-яіїьєґ]+$/i,
    LAT_CRI: new RegExp(`^[${LAT_CRI.join('')}]+$`, 'i'),
    CYR_CRI: new RegExp(`^[${CYR_CRI.join('')}]+$`, 'i')
  };

  let lang = LANGUAGES.CYR;

  Object.entries(languages).forEach(([key, value]) => {
    if (value.test(input) == true) {
      lang = key as LANGUAGES;
    }
  });

  return lang;
}

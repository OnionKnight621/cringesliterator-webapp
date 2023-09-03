import { constants } from "cringesliterator";

const { CYR_CRI, LAT_CRI } = constants;

import { LANGUAGES } from "../constants";

export function languageType(input: string) {
  const languages = {
    LAT: /^[a-z]+$/gi,
    CYR: /^[а-яіїьєґ]+$/gi,
    LAT_CRI: new RegExp(`^[${LAT_CRI.join("")}]+$`, "gi"),
    CYR_CRI: new RegExp(`^[${CYR_CRI.join("")}]+$`, "gi"),
  };

  let lang = LANGUAGES.CYR;

  Object.entries(languages).forEach(([key, value]) => {
    if (value.test(input) == true) {
      lang = key as LANGUAGES;
    }
  });

  return lang;
}

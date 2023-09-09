import {
  CYR_ALPHABET,
  CYR_CRI_ALPHABET,
  LANGUAGES,
  LAT_ALPHABET,
  LAT_CRI_ALPHABET,
} from "../constants";

export function languageType(input: string) {
  const languages = {
    LAT: new RegExp(`^[${LAT_ALPHABET}]+$`, "gi"),
    CYR: new RegExp(`^[${CYR_ALPHABET}]+$`, "gi"),
    LAT_CRI: new RegExp(`^[${LAT_CRI_ALPHABET}]+$`, "gi"),
    CYR_CRI: new RegExp(`^[${CYR_CRI_ALPHABET}]+$`, "gi"),
  };

  let lang = LANGUAGES.CYR;

  Object.entries(languages).forEach(([key, value]) => {
    if (value.test(input) == true) {
      lang = key as LANGUAGES;
    }
  });

  return lang;
}

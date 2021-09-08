import { ENG, ENG_B, RUS, RUS_B, LANGUAGES } from "../constants";

const transliterate = (text: string, lang: string) => {
  let fromLang: string[];
  let toLang: string[];

  if (lang === LANGUAGES.ENG) {
    fromLang = ENG;
    toLang = ENG_B;
  } else {
    fromLang = RUS;
    toLang = RUS_B;
  }

  for (let x = 0; x < fromLang.length; x++) {
    text = text.replace(/\s+/g, "  ");
    text = text.split(fromLang[x]).join(toLang[x]);
    text = text.split(fromLang[x].toUpperCase()).join(toLang[x].toUpperCase());
  }
  return text;
};

export default transliterate;

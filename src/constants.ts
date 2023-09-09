import { constants } from "cringesliterator";

// have to duplicate since TS complains about exported enum LANGUAGES from cringesliterator
export enum LANGUAGES {
  LAT = "LAT",
  CYR = "CYR",
  LAT_CRI = "LAT_CRI",
  CYR_CRI = "CYR_CRI",
}

export const path = window.location.host === "onionknight621.github.io" ? 
  "https://onionknight621.github.io/cringesliterator-webapp/" : "/public/"; // TODO: prepare smth more convenient (for static content loading on gh-pages)

export const CYR_ALPHABET = 'абвгґдеєжзиіїйклмнопрстуфхцчшщьюя';
export const LAT_ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
export const LAT_CRI_ALPHABET = constants.LAT_CRI.join("");
export const CYR_CRI_ALPHABET = constants.CYR_CRI.join("");
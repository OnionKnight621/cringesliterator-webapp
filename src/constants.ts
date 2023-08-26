// have to duplicate since TS complains about exported enum LANGUAGES from cringesliterator
export enum LANGUAGES {
  LAT = "LAT",
  CYR = "CYR",
  LAT_CRI = "LAT_CRI",
  CYR_CRI = "CYR_CRI",
}

export const path = window.location.host === "onionknight621.github.io" ? 
  "https://onionknight621.github.io/cringesliterator-webapp/" : "/public/"; // TODO: prepare smth more convenient

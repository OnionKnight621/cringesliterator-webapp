import { Button } from "@mui/material";

import { LANGUAGES } from "../constants";

interface HeaderProps {
  language: LANGUAGES;
  handleLangChange: (lang: LANGUAGES) => void
}

const Header = ({ language, handleLangChange }: HeaderProps) => {
  return (
    <h3>
      {language === LANGUAGES.CYR ? (
        <Button
          variant="contained"
          color="peachLight"
          className="language"
          size="small"
          sx={{ fontWeight: "bold" }}
          onClick={() => handleLangChange(LANGUAGES.LAT)}
        >
          {LANGUAGES.CYR}
        </Button>
      ) : (
        <Button
          variant="contained"
          color="peachDark"
          className="language"
          size="small"
          sx={{ fontWeight: "bold" }}
          onClick={() => handleLangChange(LANGUAGES.CYR)}
        >
          {LANGUAGES.LAT}
        </Button>
      )}{" "}
      to CR
    </h3>
  );
};

export default Header;

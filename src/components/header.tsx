import React from "react";
import { LANGUAGES, MODES, REVERSER_MODES } from "../constants";

const Header = ({
  language,
  mode,
  reverserMode,
  handleReverserModeChange,
  handleLangChange,
}) => {
  if (mode === MODES.REVERSER) {
    return (
      <h1>
        {reverserMode === REVERSER_MODES.WORD ? (
          <span
            className="language"
            onClick={() => handleReverserModeChange(REVERSER_MODES.FULL_TEXT)}
          >
            Words
          </span>
        ) : (
          <span
            className="language"
            onClick={() => handleReverserModeChange(REVERSER_MODES.WORD)}
          >
            Full text
          </span>
        )}
      </h1>
    );
  }

  return (
    <h1>
      {language === LANGUAGES.CYR ? (
        <span
          className="language"
          onClick={() => handleLangChange(LANGUAGES.LAT)}
        >
          {LANGUAGES.CYR}
        </span>
      ) : (
        <span
          className="language"
          onClick={() => handleLangChange(LANGUAGES.CYR)}
        >
          {LANGUAGES.LAT}
        </span>
      )}{" "}
      to B
    </h1>
  );
};

export default Header;

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
      {language === LANGUAGES.RUS ? (
        <span
          className="language"
          onClick={() => handleLangChange(LANGUAGES.ENG)}
        >
          Ru
        </span>
      ) : (
        <span
          className="language"
          onClick={() => handleLangChange(LANGUAGES.RUS)}
        >
          Eng
        </span>
      )}{" "}
      to B
    </h1>
  );
};

export default Header;

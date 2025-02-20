import { LANGUAGES } from "../constants";
import LanguageBtn from "./LanguageBtn";
import { path } from "../constants";
import { notePlay } from "../utils/soundMaker";

type handleLangChange = (lang: LANGUAGES) => void;

interface HeaderProps {
  language: LANGUAGES;
  handleLangChange: handleLangChange;
  inputLength: number;
}

const buttonSwitch = (
  language: LANGUAGES,
  handleLangChange: handleLangChange
) => {
  // CYR -> CYR_CRI -> LAT -> LAT_CRI
  switch (language) {
    case LANGUAGES.LAT_CRI:
      return (
        <LanguageBtn
          language={LANGUAGES.LAT_CRI}
          onClickHandler={() => handleLangChange(LANGUAGES.CYR)}
          color={"peachLight"}
        />
      );
    case LANGUAGES.CYR:
      return (
        <LanguageBtn
          language={LANGUAGES.CYR}
          onClickHandler={() => handleLangChange(LANGUAGES.CYR_CRI)}
          color={"peachLight"}
        />
      );
    case LANGUAGES.CYR_CRI:
      return (
        <LanguageBtn
          language={LANGUAGES.CYR_CRI}
          onClickHandler={() => handleLangChange(LANGUAGES.LAT)}
          color={"peachDark"}
        />
      );
    default:
      return (
        <LanguageBtn
          language={LANGUAGES.LAT}
          onClickHandler={() => handleLangChange(LANGUAGES.LAT_CRI)}
          color={"peachDark"}
        />
      );
  }
};

const Header = ({
  language,
  handleLangChange,
  inputLength = 1,
}: HeaderProps) => {
  const handleBoop = () => {
    const noteFrequency = inputLength * 5 + 500;
    notePlay(noteFrequency);
  };

  return (
    <div>
      <h3>
        {buttonSwitch(language, handleLangChange)}
        <img
          id="maxwell"
          src={path + "maxwell-cat.gif"}
          style={{ paddingTop: "0.5rem" }}
          onClick={handleBoop}
          title="boop"
        />
      </h3>
    </div>
  );
};

export default Header;

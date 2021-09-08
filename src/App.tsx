import React, { useState } from "react";

import "./App.css";
import transliterate from "./utils/transliterator";
import { LANGUAGES, MODES } from "./constants";

const Header = ({ language, mode, handleLangChange }) => {
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

const App = () => {
  const [language, setLanguage] = useState(LANGUAGES.RUS);
  const [mode, setMode] = useState(MODES.TRANSLITERATOR);
  const [inputData, setInputData] = useState("");
  const [outputData, setOutputData] = useState("");

  const handletransliterateClick = () => {
    const processedData = transliterate(inputData, language);
    navigator.clipboard.writeText(processedData);
    setOutputData(processedData);
  };

  const handleInputChange = (e: any) => {
    const value: string = e.target.value;
    setInputData(value);
  };

  const handleLangChange = (lang: string) => {
    const value: string = lang;
    setLanguage(value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handletransliterateClick();
    }
  }

  return (
    <main className="container">
      <div className="card p-5 mt-3">
        <header className="header">
          <Header
            language={language}
            mode={mode}
            handleLangChange={handleLangChange}
          />
        </header>

        <textarea
          id="input-b"
          placeholder="Enter smth"
          rows={4}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        ></textarea>
        <br />
        <button
          type="button"
          className="btn btn-secondary"
          id="transliterator-btn"
          onClick={handletransliterateClick}
        >
          Transliterate
        </button>
        <br />
        <textarea
          id="output-b"
          placeholder="Output"
          rows={4}
          value={outputData}
          disabled
        ></textarea>
      </div>
    </main>
  );
};

export default App;

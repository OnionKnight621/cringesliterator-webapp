import React, { useState } from "react";

import "./App.css";
import ModeSwitcher from "./components/modeSwitcher";
import Header from "./components/header";

import reverser from "./utils/reverser";
import transliterate from "./utils/transliterator";
import { LANGUAGES, MODES, REVERSER_MODES } from "./constants";

const App = () => {
  const [language, setLanguage] = useState(LANGUAGES.RUS);
  const [mode, setMode] = useState(MODES.TRANSLITERATOR);
  const [reverserMode, setReverserMode] = useState(REVERSER_MODES.WORD);
  const [inputData, setInputData] = useState("");
  const [outputData, setOutputData] = useState("");

  const handleActionClick = () => {
    let processedData: string;

    if (mode === MODES.TRANSLITERATOR) {
      processedData = transliterate(inputData, language);
    }
    if (mode === MODES.REVERSER) {
      processedData = reverser(inputData, reverserMode);
    }

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

  const handleModeChange = (mode: string) => {
    setMode(mode);
    console.log(mode);
  };

  const handleReverserModeChange = (mode: string) => {
    setReverserMode(mode);
  };

  const handleKeyPress = (e: any) => {
    if (e.key === "Enter" || e.key === " ") {
      handleActionClick();
    }
  };

  return (
    <main className="container">
      <div className="card p-5 mt-3">
        <header className="header">
          <Header
            language={language}
            mode={mode}
            reverserMode={reverserMode}
            handleReverserModeChange={handleReverserModeChange}
            handleLangChange={handleLangChange}
          />
          <ModeSwitcher mode={mode} handleModeChange={handleModeChange} />
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
          onClick={handleActionClick}
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

import { useState } from "react";
import transliterate from "cringesliterator";
import {
  Container,
  Button,
  Box,
  ThemeProvider,
  TextField,
} from "@mui/material";

import "./App.css";
import Header from "./components/header";
import { LANGUAGES } from "./constants";
import { theme } from "./utils/theme";
import { languageType } from "./utils/langIdentifyer";

const boxStyles = {
  backgroundColor: "#DDA77B",
  padding: "1rem",
  marginTop: "3rem",
  border: "3px solid #a99f96",
  borderRadius: "1rem",
};

const App = () => {
  const [language, setLanguage] = useState(LANGUAGES.CYR);
  const [inputData, setInputData] = useState("");
  const [outputData, setOutputData] = useState("");

  const handleActionClick = () => {
    let processedData: string;

    processedData = transliterate(inputData, language);

    navigator.clipboard.writeText(processedData);
    setOutputData(processedData);
  };

  const handleInputChange = (e: any) => {
    const value: string = e.target.value;

    const valToCheck = value.replace(/\s/g, "");
    if (valToCheck.length <= 3 && valToCheck.length > 0) {
      setLanguage(languageType(valToCheck));
    }

    setInputData(value);
  };

  const handleLangChange = (lang: string) => {
    const value: string = lang;
    setLanguage(value);
  };

  const handleKeyPress = (e: any) => {
    if (e.key === "Enter" || e.key === " ") {
      handleActionClick();
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm">
        <Box sx={boxStyles}>
          <Header language={language} handleLangChange={handleLangChange} />
          <TextField
            id="input-b"
            label="Input"
            placeholder="Enter smth"
            multiline
            fullWidth
            variant="filled"
            color="secondary"
            maxRows={6}
            minRows={3}
            onChange={handleInputChange}
            onKeyUp={handleKeyPress}
          ></TextField>
          <Button
            type="button"
            variant="contained"
            color="peach"
            size="small"
            id="transliterator-btn"
            sx={{
              width: "100%",
              margin: "0.8rem 0 1rem 0",
              fontWeight: "bold",
            }}
            onClick={handleActionClick}
          >
            Transliterate
          </Button>
          <TextField
            id="output-b"
            label="Output"
            placeholder="Get smth"
            multiline
            fullWidth
            variant="filled"
            disabled
            focused={true}
            value={outputData}
            maxRows={8}
            minRows={3}
            onChange={handleInputChange}
            onKeyUp={handleKeyPress}
          ></TextField>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default App;

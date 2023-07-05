import { useState, ChangeEvent, KeyboardEvent } from "react";
import transliterate from "cringesliterator";
import {
  Container,
  Button,
  Box,
  ThemeProvider,
  TextField,
  IconButton,
} from "@mui/material";
import { Add } from "@mui/icons-material";

import "./App.css";
import Header from "./components/header";
import { LANGUAGES } from "./constants";
import { theme } from "./utils/theme";
import { languageType } from "./utils/langIdentifyer";

const boxStyles = {
  backgroundColor: "#DDA77B",
  padding: "1rem",
  marginTop: "3rem",
  border: "4px solid #945D5E",
  borderRadius: "0.8rem",
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

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value: string = e.target.value;

    const valToCheck = value.replace(/\s/g, "");
    if (valToCheck.length <= 3 && valToCheck.length > 0) {
      setLanguage(languageType(valToCheck));
    }

    setInputData(value);
  };

  const handleLangChange = (lang: LANGUAGES) => {
    const value = lang;
    setLanguage(value);
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      handleActionClick();
    }
  };

  const handleAddButton = () => {
    console.log(123123);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md">
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
            multiline
            fullWidth
            variant="filled"
            disabled
            value={outputData}
            maxRows={8}
            minRows={3}
          ></TextField>
          {outputData && (
            <IconButton
              sx={{ float: "right", bottom: "2.5rem" }}
              onClick={handleAddButton}
            >
              <Add />
            </IconButton>
          )}
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default App;

import { useState, ChangeEvent } from "react";
import transliterate from "cringesliterator";
import {
  Button,
  Box,
  ThemeProvider,
  TextField,
  IconButton,
  Grid,
} from "@mui/material";
import { Add, Delete, CopyAll } from "@mui/icons-material";

import "./App.css";
import Header from "./components/header";
import { LANGUAGES } from "./constants";
import { theme } from "./utils/theme";
import { languageType } from "./utils/langIdentifyer";

const boxStyles = {
  backgroundColor: "#DDA77B",
  padding: "1rem",
  border: "4px solid #945D5E",
  borderRadius: "0.8rem",
};

const App = () => {
  const [language, setLanguage] = useState(LANGUAGES.CYR);
  const [inputData, setInputData] = useState("");
  const [outputData, setOutputData] = useState("");
  const [memories, setMemories] = useState([
    {
      id: "1",
      text: "something alkjhsgdiuyt qiuhdgoiuqgoi7 aoiushdpiuyaqopi qilugdo7iqg kjuh qiuygdoloqyg iugh",
    },
    { id: "2", text: "eqwqeeqw щгшцункгщ" },
  ]);

  const handleActionClick = () => {
    let processedData: string;

    processedData = transliterate(inputData, language);

    saveToClipboard(processedData);
    setOutputData(processedData);
  };

  const saveToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
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

  const handleKeyPress = () => {
    handleActionClick();
  };

  const saveMemory = (text: string) => {
    setMemories((items) => [
      ...items,
      { id: new Date().getTime().toString(), text },
    ]);
  };

  const removeMemory = (id: string) => {
    setMemories((items) => items.filter((item) => item.id !== id));
  };

  const handleAddButton = () => {
    saveMemory(outputData);
  };

  const handleRemoveButton = (id: string) => {
    removeMemory(id);
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        spacing={2}
        sx={{ marginTop: "2rem", justifyContent: "center" }}
      >
        <Grid item xs={9} sm={9} md={3}>
          {" "}
        </Grid>
        <Grid item xs={9} sm={9} md={6}>
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
        </Grid>
        <Grid item xs={9} sm={9} md={3}>
          {memories.map((item) => (
            <Box key={item.id} sx={{ ...boxStyles, marginBottom: "1rem" }}>
              <div style={{ display: 'flex'}}>
                {item.text}
                <div>
                  <IconButton onClick={() => saveToClipboard(item.text)}>
                    <CopyAll />
                  </IconButton>
                  <IconButton onClick={() => handleRemoveButton(item.id)}>
                    <Delete />
                  </IconButton>
                </div>
              </div>
            </Box>
          ))}
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default App;

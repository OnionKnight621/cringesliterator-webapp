import { useState, ChangeEvent, KeyboardEvent, useEffect } from "react";
import { transliterate } from "cringesliterator";
import {
  Button,
  Box,
  ThemeProvider,
  TextField,
  IconButton,
  Grid,
  SxProps,
  Theme,
} from "@mui/material";
import { Add } from "@mui/icons-material";

import "./App.css";
import Header from "./components/Header";
import {
  CYR_ALPHABET,
  CYR_CRI_ALPHABET,
  LANGUAGES,
  LAT_ALPHABET,
  LAT_CRI_ALPHABET,
} from "./constants";
import { theme } from "./utils/theme";
import { languageType } from "./utils/langIdentifyer";
import { deleteItem, getAllItems, storeItem } from "./utils/localStorage";
import MemoryBox from "./components/MemoryBox";
import { saveToClipboard } from "./utils/clipboard";

export type memory = {
  id: string;
  text: string;
};

const boxStyles: SxProps<Theme> = {
  backgroundColor: "#DDA77B",
  padding: "1rem",
  border: "4px solid #945D5E",
  borderRadius: "0.8rem",
};

const App = () => {
  const [language, setLanguage] = useState(LANGUAGES.CYR);
  const [inputData, setInputData] = useState("");
  const [outputData, setOutputData] = useState("");
  const [memories, setMemories] = useState<[] | memory[]>([]);

  useEffect(() => {
    setMemories(getAllItems());
  }, []);

  const handleActionClick = (clipboardSave = true) => {
    let processedData: string;

    processedData = transliterate(inputData, language);

    if (clipboardSave) saveToClipboard(processedData);
    setOutputData(processedData);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value: string = e.target.value;
    const regex = new RegExp(
      `[^${CYR_ALPHABET}${LAT_ALPHABET}${CYR_CRI_ALPHABET}${LAT_CRI_ALPHABET}]+`,
      "gi"
    );

    const valToCheck = value.replace(regex, "");
    if (valToCheck.length > 0) {
      setLanguage(languageType(valToCheck));
    }

    setInputData(value);
  };

  const handleLangChange = (lang: LANGUAGES) => {
    const value = lang;
    setLanguage(value);
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) {
      return handleActionClick(true);
    }

    return handleActionClick(false);
  };

  const saveMemory = (text: string) => {
    const id = new Date().getTime().toString();
    setMemories((items) => [...items, { id, text }]);
    storeItem({ id, text });
  };

  const removeMemory = (id: string) => {
    setMemories((items) => items.filter((item) => item.id !== id));
    deleteItem(id);
  };

  const handleAddButton = () => {
    saveMemory(outputData);
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        spacing={2}
        sx={{ marginTop: "2rem", justifyContent: "center" }}
      >
        <Grid item xs={11} sm={10} md={3}></Grid>
        <Grid item xs={11} sm={10} md={6}>
          <Box
            sx={{
              ...boxStyles,
              [theme.breakpoints.up("md")]: {
                position: "sticky",
                top: "1rem",
              },
            }}
          >
            <Header
              language={language}
              handleLangChange={handleLangChange}
              inputLength={inputData.length}
            />
            <TextField
              id="input-b"
              label="Input (normal or already cringesliterated)"
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
              onClick={() => handleActionClick()}
            >
              Transliterate / Copy to clipboard &#91; enter &#93;
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
        <Grid item xs={11} sm={10} md={3}>
          {memories.map((item) => (
            <MemoryBox
              key={item.id}
              item={item}
              boxStyles={boxStyles}
              removeMemory={removeMemory}
            />
          ))}
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default App;

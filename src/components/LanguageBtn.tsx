import { Button } from "@mui/material";

import { LANGUAGES } from "../constants";

interface LanguageBtnProps {
  language: LANGUAGES;
  onClickHandler: React.MouseEventHandler<HTMLButtonElement>;
  color: any;
}

const LanguageBtn = ({ language, onClickHandler, color }: LanguageBtnProps) => {
  return (
    <Button
      variant="contained"
      className="language"
      color={color}
      size="medium"
      sx={{ fontWeight: "bold" }}
      onClick={onClickHandler}
    >
      {language}
    </Button>
  );
};

export default LanguageBtn;

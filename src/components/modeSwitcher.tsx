import React from "react";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
} from "@mui/material";

import { MODES } from "../constants";

const ModeSwitcher = ({ mode, handleModeChange }) => {
  return (
    <FormControl component="fieldset">
      <RadioGroup aria-label="mode" name="row-radio-buttons-group" value={mode}>
        {Object.values(MODES).map((item) => (
          <FormControlLabel
            value={item}
            key={item}
            control={<Radio />}
            label={item}
            onClick={() => handleModeChange(item)}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default ModeSwitcher;

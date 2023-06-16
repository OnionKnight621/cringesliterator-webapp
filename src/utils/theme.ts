import { createTheme, PaletteColorOptions } from "@mui/material";

const { palette } = createTheme();
const createColor = (color: string) => {
  return palette.augmentColor({ color: { main: color } });
};

declare module "@mui/material/styles" {
  interface CustomPalette {
    peach: PaletteColorOptions;
    peachLight: PaletteColorOptions;
    peachDark: PaletteColorOptions;
  }
  interface Palette extends CustomPalette {}
  interface PaletteOptions extends CustomPalette {}
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    peach: true;
    peachLight: true;
    peachDark: true;
  }
}

export const theme = createTheme({
  palette: {
    peach: createColor("#945D5E"),
    peachLight: createColor("#B08282"),
    peachDark: createColor("#714747"),
  },
});

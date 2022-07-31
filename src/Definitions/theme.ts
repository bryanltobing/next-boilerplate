import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  // Add custom color
  interface SimplePaletteColorOptions {
    border?: string;
  }
}

const { typography } = createTheme();

export const theme = createTheme({
  typography: {
    fontFamily: ['"Montserrat"', "sans-serif"].join(","),
    h1: {
      fontWeight: 700,
      lineHeight: 1.15,
      fontSize: typography.pxToRem(64),
    },
    h2: {
      fontWeight: 700,
      fontSize: typography.pxToRem(24),
      lineHeight: 1.5,
    },
    body1: {
      fontWeight: 400,
      lineHeight: 1.5,
      fontSize: typography.pxToRem(20),
    },
  },
  palette: {
    primary: {
      main: "#0070f3",
      border: "#eaeaea",
    },
  },
});

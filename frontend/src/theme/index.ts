import { createTheme } from "@mui/material/styles";
import { open_sans, raleway } from "@/fonts";

export interface CustomColorPaletteOptions {
  [key: number]: string;
  main: string;
}

declare module "@mui/material/styles" {
  interface Palette {
    neutral: CustomColorPaletteOptions;
    darkMode: CustomColorPaletteOptions;
    blue: CustomColorPaletteOptions;
    green: CustomColorPaletteOptions;
  }

  interface PaletteOptions {
    neutral: CustomColorPaletteOptions;
    darkMode: CustomColorPaletteOptions;
    blue: CustomColorPaletteOptions;
    green: CustomColorPaletteOptions;
  }
}

export const palette = {
  primary: {
    main: "#264653",
  },
  secondary: {
    main: "#E76F51",
  },
  blue: {
    main: "#CFFCF4",
  },
  error: {
    main: "#FCCFCF",
  },
  green: {
    main: "#E3FCCF",
  },
  warning: {
    50: "#FFFBEB",
    main: "#FDE68A",
  },
  neutral: {
    50: "#F7F7F7",
    100: "#E7E8E8",
    200: "#D0D0D1",
    300: "#B8B9BB",
    main: "#A1A2A4",
    600: "#4A4B4D",
    700: "#323233",
  },
  darkMode: {
    50: "#383838",
    100: "#353535",
    200: "#333333",
    300: "#2F2F2F",
    400: "#2C2C2C",
    main: "#272727",
    600: "#252525",
    700: "#232323",
    800: "#1E1E1E",
    900: "#121212",
  },
};

export const baseTheme = createTheme({
  palette: {
    mode: "light",
    ...palette,
    background: {
      default: "#f7f7f7",
    },
  },
  typography: {
    fontFamily: [
      open_sans.style.fontFamily,
      raleway.style.fontFamily,
      "PP Eiko",
    ].join(", "),
    h1: {
      fontFamily: "PP Eiko",
      lineHeight: "115%",
      fontSize: "3em",
      fontWeight: 500,
      color: palette.primary.main,
    },
    h2: {
      fontFamily: raleway.style.fontFamily,
      lineHeight: "115%",
      fontSize: "2.25em",
      color: palette.neutral[700],
    },
    h3: {
      fontFamily: raleway.style.fontFamily,
      lineHeight: "115%",
      fontSize: "2em",
      color: palette.neutral[700],
    },
    h6: {
      color: palette.neutral[700],
    },
  },
  breakpoints: {
    values: {
      // extra-small
      xs: 0,
      // small
      sm: 600,
      // medium
      md: 960,
      // large
      lg: 1200,
      // extra-large
      xl: 1440,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: "PP Eiko",
          fontcolor: palette.neutral[50],
          fontWeight: 900,
          textTransform: "none",
          fontSize: "1em",
          borderRadius: "12px",
          padding: "12px 48px",
          boxShadow: "none",
          lineHeight: "100%",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "0px",
          boxShadow: "none",
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          borderRadius: "24px !important",
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: palette.neutral[100],
        },
      },
    },

    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'PP Eiko';
          font-style: normal;
          font-display: swap;
          font-weight: 900;
          src: url(/fonts/pp_eiko/PPEiko-Heavy.otf) format('opentype');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
        @font-face {
          font-family: 'PP Eiko';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: url(/fonts/pp_eiko/PPEiko-Medium.otf) format('opentype');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
        @font-face {
          font-family: 'PP Eiko';
          font-style: normal;
          font-display: swap;
          font-weight: 100;
          src: url(/fonts/pp_eiko/PPEiko-Thin.otf) format('opentype');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
  },
});

export const darkTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: "dark",
    ...palette,
    background: {
      default: "#121212",
    },
  },
  typography: {
    fontFamily: [
      open_sans.style.fontFamily,
      raleway.style.fontFamily,
      "PP Eiko",
    ].join(", "),
    h1: {
      fontFamily: "PP Eiko",
      lineHeight: "115%",
      fontSize: "3em",
      fontWeight: 500,
      color: palette.primary.main,
    },
    h2: {
      fontFamily: raleway.style.fontFamily,
      lineHeight: "115%",
      fontSize: "2.25em",
      color: palette.neutral[50],
    },
    h3: {
      fontFamily: raleway.style.fontFamily,
      lineHeight: "115%",
      fontSize: "2em",
      color: palette.neutral[50],
    },
    h6: {
      color: palette.neutral[50],
    },
  },
});

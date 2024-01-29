import { createTheme } from "@mui/material/styles";
import { open_sans, raleway } from "@/fonts";
import { useWindowSize } from "@uidotdev/usehooks";
import React from "react";
import { getCookie, setCookie } from "@/hooks";

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
    lightRed: CustomColorPaletteOptions;
  }

  interface PaletteOptions {
    neutral: CustomColorPaletteOptions;
    darkMode: CustomColorPaletteOptions;
    blue: CustomColorPaletteOptions;
    green: CustomColorPaletteOptions;
    lightRed: CustomColorPaletteOptions;
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
    main: "#DC2626",
  },
  green: {
    main: "#E3FCCF",
  },
  warning: {
    50: "#FFFBEB",
    main: "#FDE68A",
  },
  lightRed: {
    main: "#FCCFCF",
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

export const useIsMobile = () => {
  const { width } = useWindowSize();

  const isMobile = !!width && width <= 600;
  return isMobile;
};

export const useBaseTheme = () => {
  const isMobile = useIsMobile();

  const spacing = isMobile ? 6 : 8;
  const h1FontSize = isMobile ? "2em" : "3em";
  const h2FontSize = isMobile ? "1.5em" : "2.25em";
  const h3FontSize = isMobile ? "1.5em" : "2em";
  const h6FontSize = isMobile ? "1em" : "1.25em";
  return createTheme({
    spacing,
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
        fontSize: h1FontSize,
        fontWeight: 500,
        color: palette.primary.main,
      },
      h2: {
        fontFamily: raleway.style.fontFamily,
        lineHeight: "115%",
        fontSize: h2FontSize,
        color: palette.neutral[700],
      },
      h3: {
        fontFamily: raleway.style.fontFamily,
        lineHeight: "115%",
        fontSize: h3FontSize,
        color: palette.neutral[700],
      },
      h6: {
        fontSize: h6FontSize,
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
};

export const useDarkTheme = () => {
  const baseTheme = useBaseTheme();
  const isMobile = useIsMobile();

  const h1FontSize = isMobile ? "2em" : "3em";
  const h2FontSize = isMobile ? "1.5em" : "2.25em";
  const h3FontSize = isMobile ? "1.5em" : "2em";
  const h6FontSize = isMobile ? "1em" : "1.25em";

  return createTheme({
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
        fontWeight: 500,
        fontSize: h1FontSize,
        color: palette.primary.main,
      },
      h2: {
        fontFamily: raleway.style.fontFamily,
        lineHeight: "115%",
        fontSize: h2FontSize,

        color: palette.neutral[50],
      },
      h3: {
        fontFamily: raleway.style.fontFamily,
        lineHeight: "115%",
        fontSize: h3FontSize,
        color: palette.neutral[50],
      },
      h6: {
        fontSize: h6FontSize,
        color: palette.neutral[50],
      },
    },
    components: {
      MuiAccordion: {
        styleOverrides: {
          root: {
            boxShadow: "none",
            borderRadius: "24px !important",
            background: palette.darkMode[400],
          },
        },
      },
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
};

export const usePortfolioDarkTheme = () => {
  const baseTheme = useBaseTheme();
  const darkTheme = useDarkTheme();
  return createTheme({
    ...baseTheme,
    ...darkTheme,
    palette: {
      mode: "dark",
      ...palette,
      background: {
        default: "#232323",
      },
    },
    components: {
      MuiAccordion: {
        styleOverrides: {
          root: {
            boxShadow: "none",
            borderRadius: "24px !important",
            background: palette.darkMode[400],
          },
        },
      },
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
};

type ThemeContextType = "light" | "dark";

const ThemeContext = React.createContext<any>({});

export const PortfolioThemeProvider = ({ children }: any) => {
  const lightTheme = useBaseTheme();
  const darkTheme = usePortfolioDarkTheme();
  const [theme, setTheme] = React.useState<ThemeContextType>(
    getCookie("moe-als-theme-type") === "dark" ? "dark" : "light"
  );
  const activeTheme = theme === "dark" ? darkTheme : lightTheme;

  const toggleTheme = React.useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
    setCookie("moe-als-theme-type", theme === "dark" ? "light" : "dark");
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        toggleTheme,
        activeTheme,
        theme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const usePortfolioTheme = () => {
  return React.useContext(ThemeContext);
};

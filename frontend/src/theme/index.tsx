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
  const h1FontSize = isMobile ? "32px" : "48px";
  const h2FontSize = isMobile ? "24px" : "36px";
  const h3FontSize = isMobile ? "24px" : "32px";
  const h6FontSize = isMobile ? "16px" : "20px";
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
        raleway.style.fontFamily,
      ].join(", "),
      h1: {
        fontFamily: raleway.style.fontFamily,
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
      body1: {
        fontSize: "20px",
      },
      body2: {
        fontSize: "16px",
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
      MuiTypography: {
        defaultProps: {
          variant: "body2",
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
      MuiButton: {
        styleOverrides: {
          root: {
            fontFamily: raleway.style.fontFamily,
            fontcolor: palette.neutral[50],
            fontWeight: 700,
            textTransform: "none",
            fontSize: "16px",
            borderRadius: "12px",
            padding: "12px 48px",
            boxShadow: "none",
            lineHeight: "100%",
          },
        },
      },
    },
  });
};

export const useDarkTheme = () => {
  const baseTheme = useBaseTheme();
  const isMobile = useIsMobile();

  const spacing = isMobile ? 6 : 8;
  const h1FontSize = isMobile ? "32px" : "48px";
  const h2FontSize = isMobile ? "24px" : "36px";
  const h3FontSize = isMobile ? "24px" : "32px";
  const h6FontSize = isMobile ? "16px" : "20px";
  return createTheme({
    ...baseTheme,
    spacing,
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
        raleway.style.fontFamily,
      ].join(", "),
      h1: {
        fontFamily: raleway.style.fontFamily,
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
      body1: {
        fontSize: "20px",
      },
      body2: {
        fontSize: "16px",
      },
    },
    components: {
      MuiTypography: {
        defaultProps: {
          variant: "body2",
        },
      },
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
            fontFamily: raleway.style.fontFamily,
            fontcolor: palette.neutral[50],
            fontWeight: 700,
            textTransform: "none",
            fontSize: "16px",
            borderRadius: "12px",
            padding: "12px 48px",
            boxShadow: "none",
            lineHeight: "100%",
          },
        },
      },
    },
  });
};

export const usePortfolioDarkTheme = () => {
  const darkTheme = useDarkTheme();
  const isMobile = useIsMobile();

  const spacing = isMobile ? 6 : 8;
  const h1FontSize = isMobile ? "32px" : "48px";
  const h2FontSize = isMobile ? "24px" : "36px";
  const h3FontSize = isMobile ? "24px" : "32px";
  const h6FontSize = isMobile ? "16px" : "20px";
  return createTheme({
    ...darkTheme,
    spacing,
    palette: {
      mode: "dark",
      ...palette,
      background: {
        default: "#232323",
      },
    },
    typography: {
      fontFamily: [
        open_sans.style.fontFamily,
        raleway.style.fontFamily,
        raleway.style.fontFamily,
      ].join(", "),
      h1: {
        fontFamily: raleway.style.fontFamily,
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
      body1: {
        fontSize: "20px",
      },
      body2: {
        fontSize: "16px",
      },
    },
    components: {
      MuiTypography: {
        defaultProps: {
          variant: "body2",
        },
      },
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
            fontFamily: raleway.style.fontFamily,
            fontcolor: palette.neutral[50],
            fontWeight: 700,
            textTransform: "none",
            fontSize: "16px",
            borderRadius: "12px",
            padding: "12px 48px",
            boxShadow: "none",
            lineHeight: "100%",
          },
        },
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

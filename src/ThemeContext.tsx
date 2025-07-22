import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [mode, setMode] = useState("light");

  const toggle = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  const theme = createTheme({
    palette: {
      mode,
      primary: {
        main: "#1976d2",
      },
      background: {
        default: mode === "light" ? "#fafafa" : "#121212",
        paper: mode === "light" ? "#fff" : "#1e1e1e1",
      },
    },
  });

  return (
    <ThemeContext.Provider value={{ toggle, mode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;

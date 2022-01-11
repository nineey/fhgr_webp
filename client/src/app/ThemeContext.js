import { createContext, useState } from "react";
import GlobalStyle from "./globalStyle";

// Create context for theme state across all components
const ThemeContext = createContext();

// Get last theme from local storage. If no theme is set, turn on dark mode (true)
const getInitalTheme = () => {
  const savedTheme = localStorage.getItem("darkTheme");
  const initialValue = JSON.parse(savedTheme);
  if (initialValue === null) return true;
  return initialValue;
};

export const ThemeProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(getInitalTheme());

  return (
    <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
      <GlobalStyle darkTheme={darkTheme} />
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;

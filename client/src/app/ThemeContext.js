import { createContext, useState } from "react";
import GlobalStyle from "./globalStyle";

// create context for theme state across all components
const ThemeContext = createContext();

// get last theme value from local storage. if no theme is set, turn on dark mode (true)
function getInitalTheme() {
  const savedTheme = localStorage.getItem("darkTheme");
  const initialValue = JSON.parse(savedTheme);
  if (initialValue === null) return true;
  return initialValue;
}

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

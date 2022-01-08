import React, { useContext } from "react";
import { Switch } from "react-darkreader";
import ThemeContext from "../../app/ThemeContext";

export default function ThemeToggle() {
  const { darkTheme, setDarkTheme } = useContext(ThemeContext);

  // Set theme value (darkTheme: true/false) to localStorage whenever switch is toggled
  localStorage.setItem("darkTheme", JSON.stringify(darkTheme));

  return (
    <>
      <Switch checked={darkTheme} onChange={setDarkTheme} />
    </>
  );
}

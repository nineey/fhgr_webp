import React, { useContext } from "react";
import { Switch } from "react-darkreader";
import { ThemeContext } from "../../app/App";

export default function ThemeToggle() {
  const [darkTheme, setDarkTheme] = useContext(ThemeContext);

  // set theme value to localStorage whenever switch is toggled
  localStorage.setItem("darkTheme", JSON.stringify(darkTheme));

  return (
    <>
      <Switch checked={darkTheme} onChange={setDarkTheme} />
    </>
  );
}

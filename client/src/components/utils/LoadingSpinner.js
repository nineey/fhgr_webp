// Source: https://www.npmjs.com/package/react-loader-spinner

import React, { useContext } from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { ThemeContext } from "../../app/App";

export default function LoadingSpinner() {
  const [darkTheme] = useContext(ThemeContext);
  const spinnerColor = darkTheme === true ? "#fff" : "#18181B";
  return (
    <Loader
      className="m-5"
      type="TailSpin"
      color={spinnerColor}
      height={50}
      width={50}
    />
  );
}

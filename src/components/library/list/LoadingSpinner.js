// Source: https://www.npmjs.com/package/react-loader-spinner

import React from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

export default function LoadingSpinner() {
  return (
    <Loader
      className="mt-3"
      type="TailSpin"
      color="#ffffff"
      height={50}
      width={50}
    />
  );
}

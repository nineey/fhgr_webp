// Source: https://www.npmjs.com/package/react-loader-spinner

import React from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

class LoadingSpinner extends React.Component {
  render() {
    return <Loader type="TailSpin" color="#ffffff" height={80} width={80} />;
  }
}

export default LoadingSpinner;

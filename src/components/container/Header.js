import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div className="app-header mt-5">
        <div>
          <h1>
            FilmUp
            <br />
          </h1>
          <h2>2016 – 2021</h2>
        </div>
        <div className="lead">
          We present you a full list of every Netflix show available in the US.
          <br />
          Jump into Stats to get more details about the library's development
          since 2016.
        </div>
      </div>
    );
  }
}

export default Header;

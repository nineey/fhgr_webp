import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div className="app-header mt-5">
        <div>
          <h1>
            Netflix
            <br />
          </h1>
          <h2>
            2016 – 2021 (currently using mock data)
            <br />
          </h2>
        </div>
      </div>
    );
  }
}

export default Header;

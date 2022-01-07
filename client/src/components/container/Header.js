import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="app-header">
      <div>
        <h1>
          <NavLink to="/">FilmUp!</NavLink>
          <br />
        </h1>
        <h2>The Netflix Library &#38; Stats</h2>
      </div>
      <div>
        We present you a full list of every Netflix show available in the US.
        <br />
        Jump into stats to get more details about the library's development
        since 2015.
      </div>
    </div>
  );
}

import React from "react";

export default function Header() {
  return (
    <div className="app-header mt-5">
      <div>
        <h1>
          FilmUp!
          <br />
        </h1>
        <h2>The Ultimate Netflix Library &#38; Stats</h2>
      </div>
      <div className="lead">
        We present you a full list of every Netflix show available in the US.
        <br />
        Jump into stats to get more details about the library's development
        since 2015.
      </div>
    </div>
  );
}

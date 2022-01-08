import React, { useContext } from "react";
import ThemeContext from "../../../app/ThemeContext";

export default function TypeFilter({ activeType, setActiveType, setPage }) {
  const { darkTheme } = useContext(ThemeContext);

  // Used for handling active class of a button
  const className =
    darkTheme === true ? "btn btn-outline-light" : "btn btn-outline-dark";

  return (
    <div className="btn-group" role="group" aria-label="Basic example">
      <button
        type="button"
        className={className + (!activeType ? " active" : "")}
        onClick={() => {
          setActiveType(null);
          setPage(1);
        }}
      >
        All
      </button>
      <button
        type="button"
        className={className + (activeType === "Movie" ? " active" : "")}
        onClick={() => {
          setActiveType("Movie");
          setPage(1);
        }}
      >
        Movies
      </button>
      <button
        type="button"
        className={className + (activeType === "TV Show" ? " active" : "")}
        onClick={() => {
          setActiveType("TV Show");
          setPage(1);
        }}
      >
        TV Shows
      </button>
    </div>
  );
}

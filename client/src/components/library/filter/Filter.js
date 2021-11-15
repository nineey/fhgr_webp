import React from "react";

export default function Filter({ activeType, setActiveType }) {
  // Used for handling active class of a button
  const className = "btn btn-outline-light";

  return (
    <div className="btn-group" role="group" aria-label="Basic example">
      <button
        type="button"
        className={className + (!activeType ? " active" : "")}
        onClick={() => setActiveType(null)}
      >
        All
      </button>
      <button
        type="button"
        className={className + (activeType === "Movie" ? " active" : "")}
        onClick={() => setActiveType("Movie")}
      >
        Movies
      </button>
      <button
        type="button"
        className={className + (activeType === "TV Show" ? " active" : "")}
        onClick={() => setActiveType("TV Show")}
      >
        TV Shows
      </button>
    </div>
  );
}

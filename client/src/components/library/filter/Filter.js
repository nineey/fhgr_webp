import React from "react";

export default function Filter(props) {
  // Used for handling active class of a button
  const className = "btn btn-outline-light";

  return (
    <div className="btn-group" role="group" aria-label="Basic example">
      <button
        type="button"
        className={className + (props.activeType === null ? " active" : "")}
        onClick={() => props.setActiveType(null)}
      >
        All
      </button>
      <button
        type="button"
        className={className + (props.activeType === "Movie" ? " active" : "")}
        onClick={() => props.setActiveType("Movie")}
      >
        Movies
      </button>
      <button
        type="button"
        className={
          className + (props.activeType === "TV Show" ? " active" : "")
        }
        onClick={() => props.setActiveType("TV Show")}
      >
        TV Shows
      </button>
    </div>
  );
}

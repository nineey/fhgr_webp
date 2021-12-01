import React from "react";

export default function ChartFilter({
  activeChartFilter,
  setActiveChartFilter,
}) {
  const className = "btn btn-outline-light";
  const classNameActive = "btn btn-outline-light active";

  return (
    <>
      <div className="btn-group" role="group" aria-label="Basic example">
        <button
          type="button"
          className={activeChartFilter === "" ? classNameActive : className}
          onClick={() => setActiveChartFilter("")}
        >
          All
        </button>
        <button
          type="button"
          className={
            activeChartFilter === "movie" ? classNameActive : className
          }
          onClick={() => setActiveChartFilter("movie")}
        >
          Movies
        </button>

        <button
          type="button"
          className={
            activeChartFilter === "tv show" ? classNameActive : className
          }
          onClick={() => setActiveChartFilter("tv show")}
        >
          TV Shows
        </button>
      </div>
    </>
  );
}

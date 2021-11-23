import React from "react";

export default function ChartFilter({
  activeChartFilter,
  setActiveChartFilter,
}) {
  const className = "btn btn-outline-light m-3";
  const classNameActive = "btn btn-outline-light m-3 active";

  return (
    <>
      <div>ChartFilter – What do you want to see? (work in progress)</div>
      <button
        type="button"
        className={activeChartFilter === "movie" ? classNameActive : className}
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
    </>
  );
}

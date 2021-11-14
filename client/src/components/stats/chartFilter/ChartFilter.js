import React from "react";

export default function ChartFilter({ setActiveChartFilter }) {
  return (
    <>
      <div>ChartFilter – What do you want to see? (work in progress)</div>
      <button
        type="button"
        className="btn btn-light mt-3"
        onClick={() => setActiveChartFilter("movies")}
      >
        Movies
      </button>
      <br />
      <button
        type="button"
        className="btn btn-light mt-3"
        onClick={() => setActiveChartFilter("tvshows")}
      >
        TV Shows
      </button>
    </>
  );
}

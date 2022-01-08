import React, { useContext } from "react";
import ThemeContext from "../../../app/ThemeContext";

export default function ChartFilter({
  activeChartFilter,
  setActiveChartFilter,
}) {
  const { darkTheme } = useContext(ThemeContext);

  // Handling style for active/inactive buttons
  const className =
    darkTheme === true ? "btn btn-outline-light" : "btn btn-outline-dark";
  const classNameActive =
    darkTheme === true
      ? "btn btn-outline-light active"
      : "btn btn-outline-dark active";

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

import React, { useEffect, useState } from "react";
import axios from "axios";

export default function RandomInfo({ activeChartFilter, statsData }) {
  const [totalNums, setTotalNums] = useState({});

  useEffect(() => {
    const getTotalNumsMovies = async () => {
      const data = (await axios.get(`/api/stats/total/duration/movies`)).data;
      setTotalNums(data);
    };

    const getTotalNumsTvShows = async () => {
      const data = (await axios.get(`/api/stats/total/duration/tvshows`)).data;
      setTotalNums(data);
    };

    activeChartFilter === "movie"
      ? getTotalNumsMovies()
      : getTotalNumsTvShows();
    return () => console.log("cleaned up");
  }, [activeChartFilter]);

  return (
    <>
      <h3>Did you know? </h3>
      {activeChartFilter === "movie" ? (
        <>
          <p>The library has {statsData["totalSum"]} Movies</p>
          <p>Watching every movie would take you:</p>
          <ol>
            <li>{totalNums["m"]} minutes</li>
            <li>that equals {totalNums["h"]} hours</li>
            <li>or {totalNums["d"]} days</li>
          </ol>
        </>
      ) : activeChartFilter === "tv show" ? (
        <>
          <p>The library has {statsData["totalSum"]} TV shows</p>
          <p>Total {totalNums["seasons"]} Seasons</p>
        </>
      ) : (
        <p>The library has {statsData["totalSum"]} Movies and TV shows</p>
      )}
    </>
  );
}

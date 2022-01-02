import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

export default function RandomInfo({ activeChartFilter, statsData }) {
  // Stats about movies / tv shows and genres
  const [totalNumsMovies, setTotalNumsMovies] = useState({});
  const [totalNumsShows, setTotalNumsShows] = useState({});
  const [genreStats, setGenreStats] = useState({});

  useEffect(() => {
    const getTotalNumsMovies = async () => {
      const data = (await axios.get(`/api/stats/total/duration/movies`)).data;
      setTotalNumsMovies(data);
    };

    const getTotalNumsTvShows = async () => {
      const data = (await axios.get(`/api/stats/total/duration/tvshows`)).data;
      setTotalNumsShows(data);
    };

    const getGenres = async () => {
      const data = (await axios.get(`/api/stats/bygenre`)).data;
      setGenreStats(data);
    };

    getGenres();
    getTotalNumsMovies();
    getTotalNumsTvShows();
  }, []);

  return (
    <Fade>
      <h3>Did you know? </h3>
      {activeChartFilter === "movie" ? (
        <>
          <div className="lead mt-5">
            The library includes <BigNum>{statsData.totalSum}</BigNum> Movies.
          </div>
          <div className="lead mt-3 mb-3">Watching every movie would take</div>

          <div className="lead">
            <BigNum>{totalNumsMovies["m"]}</BigNum> minutes
          </div>
          <div className="lead">
            that's <BigNum>{totalNumsMovies["h"]}</BigNum> hours
          </div>
          <div className="lead">
            or <BigNum>{totalNumsMovies["d"]}</BigNum> days.
          </div>
        </>
      ) : activeChartFilter === "tv show" ? (
        <>
          <div className="lead mt-5">
            The library includes <BigNum>{statsData.totalSum}</BigNum> TV Shows.
          </div>
          <div className="lead mt-3 mb-3">All TV shows together have</div>

          <div className="lead">
            <BigNum>{totalNumsShows["seasons"]}</BigNum> seasons.
          </div>
        </>
      ) : (
        <>
          <div className="lead mt-5">
            The library includes <BigNum>{statsData.totalSum}</BigNum> Movies
            and TV shows
          </div>
          <div className="lead">
            from <BigNum>{genreStats["totalOfGenres"]}</BigNum> different
            genres.
          </div>
        </>
      )}
    </Fade>
  );
}

const BigNum = styled.strong`
  font-size: 1.5em;
  font-weight: 500;
  margin-top: -15px;
`;

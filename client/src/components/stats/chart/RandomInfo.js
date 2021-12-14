import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

export default function RandomInfo({ activeChartFilter, statsData }) {
  // Stats about movies / tv shows and genres
  const [totalNums, setTotalNums] = useState({});
  const [genreStats, setGenreStats] = useState({});

  useEffect(() => {
    const getTotalNumsMovies = async () => {
      const data = (await axios.get(`/api/stats/total/duration/movies`)).data;
      setTotalNums(data);
    };

    const getTotalNumsTvShows = async () => {
      const data = (await axios.get(`/api/stats/total/duration/tvshows`)).data;
      setTotalNums(data);
    };

    const getGenres = async () => {
      const data = (await axios.get(`/api/stats/bygenre`)).data;
      setGenreStats(data);
    };

    if (activeChartFilter === null) getGenres();
    if (activeChartFilter === "movie") getTotalNumsMovies();
    if (activeChartFilter === "tv show") getTotalNumsTvShows();
  }, [activeChartFilter]);

  return (
    <StyledContainer>
      <h3>Did you know? </h3>
      {activeChartFilter === "movie" ? (
        <>
          <div className="lead mt-5 mb-3">Watching every movie would take:</div>

          <div className="lead">
            <BigNum>{totalNums["m"]}</BigNum> minutes
          </div>
          <div className="lead">
            that's <BigNum>{totalNums["h"]}</BigNum> hours
          </div>
          <div className="lead">
            or <BigNum>{totalNums["d"]}</BigNum> days
          </div>
        </>
      ) : activeChartFilter === "tv show" ? (
        <>
          <div className="lead mt-5 mb-3">All TV shows together have:</div>

          <div className="lead">
            <BigNum>{totalNums["seasons"]}</BigNum> seasons
          </div>
        </>
      ) : (
        <>
          <div className="lead mt-5">
            The library has <BigNum>{statsData["totalSum"]}</BigNum> Movies and
            TV shows
          </div>
          <div className="lead">
            from <BigNum>{genreStats["totalOfGenres"]}</BigNum> different
            genres.
          </div>
        </>
      )}
    </StyledContainer>
  );
}

const BigNum = styled.strong`
  font-size: 1.5em;
  font-weight: 500;
  margin-top: -15px;
`;

const StyledContainer = styled.div`
  height: 16em !important;
`;

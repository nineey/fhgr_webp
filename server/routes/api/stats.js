const express = require("express");
const router = express.Router();
const netflixLibrary = require("../../data/netflixData.json");

/* ----------------------------------------
NUMBER OF TITLES GROUPED BY YEAR
----------------------------------------- */

router.get("/byYear", (req, res) => {
  const { type } = req.query;
  let filteredData = netflixLibrary;

  if (type) {
    filteredData = netflixLibrary.filter(
      (netflixTitle) => netflixTitle.type.toLowerCase() === type.toLowerCase()
    );
  }

  // Create array with all year dates
  const allDates = filteredData.map((e) => {
    return new Date(e.date_added).getFullYear();
  });

  // How to group an array: https://stackoverflow.com/questions/52711740/group-array-and-get-count/52711775
  const getNumsByYear = allDates.reduce(
    (r, c) => ((r[c] = (r[c] || 0) + 1), r),
    {}
  );
  // For some reason, not every element in the data set has a proper year date. Remove NaN and entries before year 2015
  ["2008", "2009", "2010", "2011", "2012", "2013", "2014", "NaN"].forEach(
    (e) => delete getNumsByYear[e]
  );

  // Get total number of items of all years
  const totalSum = Object.values(getNumsByYear).reduce(
    (sum, currentValue) => sum + currentValue,
    0
  );

  // add totalSum to responseData
  Object.assign(getNumsByYear, { totalSum: totalSum });
  const reponseData = getNumsByYear;
  res.send(reponseData);
});

/* ----------------------------------------
NUMBER OF TITLES GROUPED BY GENRE
----------------------------------------- */

router.get("/byGenre", (req, res) => {
  const getAllGenres = netflixLibrary.map((e) => {
    // Extract the genre array
    const getGenre = e.listed_in;
    // Split array on commas to get single elements
    const splittedGenre = getGenre.split(", ");
    return splittedGenre;
  });

  // Group by genre and count the entries
  // How to group an array: https://stackoverflow.com/questions/52711740/group-array-and-get-count/52711775
  const getNumsByGenre = getAllGenres
    .flat()
    .reduce((r, c) => ((r[c] = (r[c] || 0) + 1), r), {});

  // count the number of different genres and add result to responseData
  const gerneCounter = Object.keys(getNumsByGenre);
  const reponseData = {
    totalOfGenres: gerneCounter.length,
    totalByGenre: getNumsByGenre,
  };
  res.send(reponseData);
});

/* ----------------------------------------
TOTAL MINUTES OF ALL MOVIES
----------------------------------------- */

router.get("/total/duration/movies", (req, res) => {
  const getAllMovies = netflixLibrary.filter((e) => e.type === "Movie");

  const getAllDuration = getAllMovies.map((e) => {
    // Extract the duration
    const getDuration = e.duration;
    // Remove "... min" at the end and parse to Integer
    const getNumOnly = parseInt(getDuration.slice(0, -4));
    return getNumOnly;
  });

  // Filter data for integers only (remove null)
  const filterIntegers = getAllDuration.filter((e) => Number.isInteger(e));

  const getSum = filterIntegers.reduce(
    (sum, currentValue) => parseInt(sum) + parseInt(currentValue),
    0
  );

  const reponseData = {
    m: getSum,
    h: Math.round(getSum / 60),
    d: Math.round(getSum / 60 / 24),
  };
  res.send(reponseData);
});

/* ----------------------------------------
TOTAL SEASONS OF ALL TV SHOWS
----------------------------------------- */

router.get("/total/duration/tvshows", (req, res) => {
  const getAllTvShows = netflixLibrary.filter((e) => e.type === "TV Show");

  const getAllDuration = getAllTvShows.map((e) => {
    // Extract the duration
    const getDuration = e.duration;
    // Remove "... Seasons" at the end and parse to Integer
    const getNumOnly = parseInt(getDuration.slice(0, -6));
    return getNumOnly;
  });

  // Filter data for integers only (remove null)
  const filterIntegers = getAllDuration.filter((e) => Number.isInteger(e));

  const getSum = filterIntegers.reduce(
    (sum, currentValue) => parseInt(sum) + parseInt(currentValue),
    0
  );

  const reponseData = {
    seasons: getSum,
  };
  res.send(reponseData);
});

module.exports = router;

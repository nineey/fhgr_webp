const express = require("express");
const router = express.Router();
const netflixLibrary = require("../../data/netflixData.json");
const sliceResultByPage = require("../../utils/sliceResultByPage");

router.get("/", (req, res) => {
  const { type, genre, search, page } = req.query;
  let filteredData = netflixLibrary;
  let filteredAndSearchedData;

  // filter for genre and type first
  if (genre && !type) {
    filteredData = netflixLibrary.filter((netflixTitle) =>
      netflixTitle.listed_in.toLowerCase().includes(genre.toLowerCase())
    );
  }

  if (type && !genre) {
    filteredData = netflixLibrary.filter(
      (netflixTitle) => netflixTitle.type.toLowerCase() === type.toLowerCase()
    );
  }

  if (type && genre) {
    filteredData = netflixLibrary.filter(
      (netflixTitle) =>
        netflixTitle.type.toLowerCase() === type.toLowerCase() &&
        netflixTitle.listed_in.toLowerCase().includes(genre.toLowerCase())
    );
  }

  // filter again with searchQuery
  search
    ? (filteredAndSearchedData = filteredData.filter((netflixTitle) =>
        netflixTitle.title
          .toString()
          .toLowerCase()
          .includes(search.toString().toLowerCase())
      ))
    : (filteredAndSearchedData = filteredData);

  // count the number of items in the filtered list
  const itemCounter = filteredAndSearchedData.length;

  // slice the filtered list for pagination
  if (page) {
    filteredAndSearchedData = sliceResultByPage(filteredAndSearchedData, page);
  }

  // prepare an array which is used as response || index 0 = #items / index 1 = filtered list
  const responseData = [itemCounter, filteredAndSearchedData];

  res.send(responseData);
});

module.exports = router;

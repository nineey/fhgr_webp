const express = require("express");
const router = express.Router();
const netflixLibrary = require("../../data/netflixData.json");

router.get("/all", (req, res) => {
  const getAllGenres = netflixLibrary.map((e) => {
    const getGenre = e.listed_in;
    const splittedGenre = getGenre.split(", ");
    return splittedGenre;
  });

  const genreSplittedAll = getAllGenres.flat();

  // delete duplicates: https://dev.to/soyleninjs/3-ways-to-remove-duplicates-in-an-array-in-javascript-259o
  const responseData = [...new Set(genreSplittedAll)].sort();
  res.send(responseData);
});

module.exports = router;

const express = require("express");
const router = express.Router();
const netflixLibrary = require("../../data/netflixData.json");

/* Challenge with the data set: 
Multiple genres are written in strings, i.e.: listed_in: "Fantasy, Documentary, ..." */

router.get("/all", (req, res) => {
  const getAllGenres = netflixLibrary.map((e) => {
    // Extract the genre array
    const getGenre = e.listed_in;
    // Split array on commas to get single elements
    const splittedGenre = getGenre.split(", ");
    return splittedGenre;
  });

  // Flatten the arrays to get one array only
  const genreSplittedAll = getAllGenres.flat();

  // Delete duplicates: https://dev.to/soyleninjs/3-ways-to-remove-duplicates-in-an-array-in-javascript-259o
  const responseData = [...new Set(genreSplittedAll)].sort();
  res.send(responseData);
});

module.exports = router;

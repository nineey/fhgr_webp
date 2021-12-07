const express = require("express");
const router = express.Router();
const netflixLibrary = require("../../data/netflixData.json");

router.get("/", (req, res) => {
  const { type } = req.query;
  let filteredData = netflixLibrary;

  if (type) {
    filteredData = netflixLibrary.filter(
      (netflixTitle) => netflixTitle.type.toLowerCase() === type.toLowerCase()
    );
  }

  // create array with all year dates
  const allDates = filteredData.map((e) => {
    return new Date(e.date_added).getFullYear();
  });

  // how to group an array: https://stackoverflow.com/questions/52711740/group-array-and-get-count/52711775
  const getNumsByYear = allDates.reduce(
    (r, c) => ((r[c] = (r[c] || 0) + 1), r),
    {}
  );
  // For some reason, not every element in the data set has a proper year date. Hence, remove NaN
  delete getNumsByYear["NaN"];
  const reponseData = getNumsByYear;
  res.send(reponseData);
});

module.exports = router;

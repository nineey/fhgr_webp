const express = require("express");
const router = express.Router();
const netflixLibrary = require("../../data/netflixData.json");
const sliceResultByPage = require("../../utils/sliceResultByPage");

// This route is not in use. For testing only.

router.get("/", (req, res) => {
  const { page } = req.query;
  let responseData = netflixLibrary;
  const itemCounter = responseData.length;

  // Slice the filtered list for pagination
  if (page) {
    responseData = sliceResultByPage(netflixLibrary, page);
  }

  responseData = [itemCounter, responseData];

  res.send(responseData);
});

module.exports = router;

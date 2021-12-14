const express = require("express");
const router = express.Router();
const netflixLibrary = require("../../data/netflixData.json");

// find a single element by showID
router.get("/", (req, res) => {
  const { showId } = req.query;
  const responseData = netflixLibrary.find(
    (element) => element.show_id === showId
  );
  res.send(responseData);
});

module.exports = router;

const express = require("express");
const router = express.Router();
const netflixLibrary = require("../../data/netflixData.json");
const sliceResultByPage = require("../../utils/sliceResultByPage");

router.get("/", (req, res) => {
  const { page } = req.query;
  let responseData = netflixLibrary;
  const itemCounter = responseData.length;
  if (page) {
    responseData = sliceResultByPage(netflixLibrary, page);
  }

  responseData = [itemCounter, responseData];

  res.send(responseData);
});

module.exports = router;

// router.get("/", (req, res) => {
//   const { page } = req.query;
//   let responseData = netflixLibrary;
//   const itemCounter = responseData.length;
//   if (page) {
//     responseData = sliceData(netflixLibrary, page);
//   }

//   responseData = [itemCounter, responseData];

//   res.send(responseData);
// });

// router.get("/", (req, res) => {
//   res.send("User List");
// });

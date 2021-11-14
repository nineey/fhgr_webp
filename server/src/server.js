import express from "express";

const app = express();
const PORT = 8000;

const netflixLibrary = require("./netflixData.json");

// slice data for pagination
function sliceData(data, start) {
  const startIndex = (parseInt(start) - 1) * 5;
  const endIndex = startIndex + 5;

  return data.slice(startIndex, endIndex);
}

// app routes
app.get("/api/", (req, res) => {
  const sliceStart = req.query.page;
  let dataToSend = netflixLibrary;
  if (sliceStart) {
  dataToSend = sliceData(netflixLibrary, sliceStart);
  }

  res.send(dataToSend);
});

app.get("/api/filters/", (req, res) => {
  const {type, genre, page} = req.query;

  let responseData = netflixLibrary.filter((netflixTitle) =>
          netflixTitle.listed_in.toLowerCase().includes(genre.toLowerCase())
        );

  if (page) {
  responseData = sliceData(responseData, page);
  }

  res.send(responseData);
});

// start server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

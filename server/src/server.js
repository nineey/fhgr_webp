import express from "express";

const app = express();
const PORT = 8000;

const netflixLibrary = require("./netflixData.json");

// slice data for pagination
function sliceData(data, start) {
  const startIndex = (parseInt(start) - 1) * 5;
  const endIndex = startIndex + 10;

  return data.slice(startIndex, endIndex);
}

// app routes
app.get("/api/unfiltered", (req, res) => {
  const { page } = req.query;
  let responseData = netflixLibrary;
  const itemCounter = responseData.length;
  if (page) {
    responseData = sliceData(netflixLibrary, page);
  }

  responseData = [itemCounter, responseData];

  res.send(responseData);
});

app.get("/api/find/", (req, res) => {
  const { showId } = req.query;
  let responseData = netflixLibrary.find(
    (element) => element.show_id === showId
  );
  res.send(responseData);
});

app.get("/api/filter/", (req, res) => {
  const { type, genre, page } = req.query;
  let responseData;

  if (genre && !type) {
    responseData = netflixLibrary.filter((netflixTitle) =>
      netflixTitle.listed_in.toLowerCase().includes(genre.toLowerCase())
    );
  }

  if (type && !genre) {
    responseData = netflixLibrary.filter(
      (netflixTitle) => netflixTitle.type.toLowerCase() === type.toLowerCase()
    );
  }

  if (type && genre) {
    responseData = netflixLibrary.filter(
      (netflixTitle) =>
        netflixTitle.type.toLowerCase() === type.toLowerCase() &&
        netflixTitle.listed_in.toLowerCase().includes(genre.toLowerCase())
    );
  }

  const itemCounter = responseData.length;

  if (page) {
    responseData = sliceData(responseData, page);
  }

  responseData = [itemCounter, responseData];

  res.send(responseData);
});

app.get("/api/search/", (req, res) => {
  const { query, page } = req.query;
  let responseData;

  if (query) {
    responseData = netflixLibrary.filter((element) =>
      element.title
        .toString()
        .toLowerCase()
        .includes(query.toString().toLowerCase())
    );
  }

  if (page) {
    responseData = sliceData(responseData, page);
  }

  res.send(responseData);
});

// start server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

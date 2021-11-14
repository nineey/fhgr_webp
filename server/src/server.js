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
app.get("/api/", (req, res) => {
  const { page } = req.query;
  let dataToSend = netflixLibrary;
  if (page) {
    dataToSend = sliceData(netflixLibrary, page);
  }

  res.send(dataToSend);
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

  if (type || genre) {
    responseData = netflixLibrary.filter((netflixTitle) =>
      netflixTitle.listed_in.toLowerCase().includes(genre.toLowerCase())
    );
  }

  if (page) {
    responseData = sliceData(responseData, page);
  }

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

  res.send(page);
});

// start server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

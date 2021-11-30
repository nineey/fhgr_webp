const express = require("express");

const app = express();
const PORT = process.env.PORT || 8000;

// read full data set into server memory
const netflixLibrary = require("./netflixData.json");

/*********** HELPER FUNCTIONS ************/

// slice data for pagination
function sliceData(data, start) {
  const startIndex = (parseInt(start) - 1) * 10;
  const endIndex = startIndex + 10;

  return data.slice(startIndex, endIndex);
}

/*********** ALL DATA ************/

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

/*********** FIND A SINGLE OBJECT BY ID ************/

app.get("/api/find/", (req, res) => {
  const { showId } = req.query;
  let responseData = netflixLibrary.find(
    (element) => element.show_id === showId
  );
  res.send(responseData);
});

/*********** GET ALL GENRES **************/

app.get("/api/get/genres", (req, res) => {
  let genreUnformatted = [];
  let genreSplitted = [];
  let genreSplittedAll = [];

  netflixLibrary.map((e) => genreUnformatted.push(e.listed_in));

  genreUnformatted.map((e) => {
    const singleGenre = e.split(", ");
    return genreSplitted.push(singleGenre);
  });

  genreSplitted.map((e) => genreSplittedAll.push(...e));

  // delete duplicates: https://dev.to/soyleninjs/3-ways-to-remove-duplicates-in-an-array-in-javascript-259o
  const responseData = [...new Set(genreSplittedAll)].sort();
  res.send(responseData);
});

/*********** FILTERS & SEARCH ************/

app.get("/api/filter/", (req, res) => {
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

  // further, filter again with searchQuery
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
    filteredAndSearchedData = sliceData(filteredAndSearchedData, page);
  }

  // prepare an array which is used as response || index 0 = #items / index 1 = filtered list
  const responseData = [itemCounter, filteredAndSearchedData];

  res.send(responseData);
});

/*********** STATS ************/

app.get("/api/stats/", (req, res) => {
  const { type } = req.query;
  let filteredData = netflixLibrary;

  if (type) {
    filteredData = netflixLibrary.filter(
      (netflixTitle) => netflixTitle.type.toLowerCase() === type.toLowerCase()
    );
  }

  let allDates = [];
  filteredData.map((e) => {
    const newDate = new Date(e.date_added).getFullYear();
    allDates.push(newDate);
  });

  // how to group an array: https://stackoverflow.com/questions/52711740/group-array-and-get-count/52711775
  const getNumsByYear = allDates.reduce(
    (r, c) => ((r[c] = (r[c] || 0) + 1), r),
    {}
  );
  delete getNumsByYear["NaN"];
  const reponseData = getNumsByYear;
  res.send(reponseData);
});

// tutorial: https://www.youtube.com/watch?v=71wSzpLyW9k
// serve frontend in production and trust proxy
if (process.env.NODE_ENV === "production") {
  // set static folder
  app.use(express.static("../client/build"));

  app.get("*", (req, res) => {
    res.sendFile(
      path.resolve(__dirname, "..", "client", "build", "index.html")
    );
  });

  app.enable("trust proxy");
}

// start server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

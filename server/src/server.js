import express from "express";

const app = express();
const PORT = 8000;

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
  const { byType } = req.query;
  let countByYear = { 2016: 0, 2017: 0, 2018: 0, 2019: 0, 2020: 0, 2021: 0 };

  if (byType) {
    netflixLibrary.forEach((element) => {
      const date = element.date_added;
      const type = element.type.toLowerCase();
      if (date.includes("2021") && type === byType.toLowerCase()) {
        countByYear[2021] += 1;
      } else if (date.includes("2020") && type === byType.toLowerCase()) {
        countByYear[2020] += 1;
      } else if (date.includes("2019") && type === byType.toLowerCase()) {
        countByYear[2019] += 1;
      } else if (date.includes("2018") && type === byType.toLowerCase()) {
        countByYear[2018] += 1;
      } else if (date.includes("2017") && type === byType.toLowerCase()) {
        countByYear[2017] += 1;
      } else if (date.includes("2016") && type === byType.toLowerCase()) {
        countByYear[2016] += 1;
      } else {
      }
    });
  }

  if (!byType) {
    netflixLibrary.forEach((element) => {
      const date = element.date_added;
      if (date.includes("2021")) {
        countByYear[2021] += 1;
      } else if (date.includes("2020")) {
        countByYear[2020] += 1;
      } else if (date.includes("2019")) {
        countByYear[2019] += 1;
      } else if (date.includes("2018")) {
        countByYear[2018] += 1;
      } else if (date.includes("2017")) {
        countByYear[2017] += 1;
      } else if (date.includes("2016")) {
        countByYear[2016] += 1;
      } else {
      }
    });
  }

  const reponseData = {
    2016: countByYear[2016],
    2017: countByYear[2016] + countByYear[2017],
    2018: countByYear[2016] + countByYear[2017] + countByYear[2018],
    2019:
      countByYear[2016] +
      countByYear[2017] +
      countByYear[2018] +
      countByYear[2019],
    2020:
      countByYear[2016] +
      countByYear[2017] +
      countByYear[2018] +
      countByYear[2019] +
      countByYear[2020],
    2021:
      countByYear[2016] +
      countByYear[2017] +
      countByYear[2018] +
      countByYear[2019] +
      countByYear[2020] +
      countByYear[2021],
  };

  res.send(reponseData);
});

// start server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

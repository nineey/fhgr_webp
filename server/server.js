const express = require("express");
const app = express();
const path = require("path");

/***** Set up routes *****/

// Get all, unfiltered data
// params: page
app.use("/api/unfiltered", require("./routes/api/unfiltered"));

// Get a single element by ID
// Params: showId
app.use("/api/find", require("./routes/api/find"));

// Get filtered data
// Params: type, genre, search, page
app.use("/api/filter", require("./routes/api/filter"));

// Get stats about date added on Netflix
// Params: type
app.use("/api/stats", require("./routes/api/stats"));

// Get all available genres
app.use("/api/genre", require("./routes/api/genre"));

// Serve frontend in production and trust proxy
// Tutorial: https://www.youtube.com/watch?v=71wSzpLyW9k

if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("../client/build"));

  app.get("/*", (req, res) => {
    res.sendFile(
      path.resolve(__dirname, "..", "client", "build", "index.html")
    );
  });

  app.enable("trust proxy");
}

// Set port and start server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

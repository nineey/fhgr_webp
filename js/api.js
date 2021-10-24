const api_url = "https://data.nicolasneeser.ch/netflix_data_short.json";

// full data set
// const api_url = "https://data.nicolasneeser.ch/netflix_data_all.json";

// Fetch the data via API
async function getNetflixData() {
  // Get data as a very long string
  const response = await fetch(api_url);
  // Convert the response into json format
  const netflixData = await response.json();

  return netflixData;
}

export { getNetflixData };

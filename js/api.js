const api_url = "https://data.nicolasneeser.ch/netflix_data_short.json";

// Fetch the data via API
async function getNetflixData() {
  // Get data as a very long string
  const response = await fetch(api_url);
  // Convert the response into json format
  const netflixData = await response.json();

  console.log(netflixData);
  return netflixData;
}

export { getNetflixData };

import { getNetflixData } from "./api.js";

async function filter_netflix_data(type) {
  const db = await getNetflixData();
  let filtered_array = [];

  db.forEach((element) => {
    if (element.type == type) {
      filtered_array.push(element);
    }
  });
  return filtered_array;
}

export { filter_netflix_data };

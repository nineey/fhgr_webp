import { getNetflixData } from "./api.js";

let params = new URLSearchParams(document.location.search.substring(1));
let show_id = params.get("show_id");

async function getShowDetails(id) {
  let db = await getNetflixData();

  const showDetails = db.find(({ show_id }) => show_id === id);

  const ph_title = document.getElementById("details_title");
  const ph_description = document.getElementById("details_description");
  const ph_cast = document.getElementById("details_cast");

  const data_title = `${showDetails.title}`;
  const data_description = `${showDetails.description}`;
  const data_cast = `${showDetails.cast}`;

  ph_title.innerHTML = data_title;
  ph_description.innerHTML = data_description;
  ph_cast.innerHTML = data_cast;
}

getShowDetails(show_id);

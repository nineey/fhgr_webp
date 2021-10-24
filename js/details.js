import { getNetflixData } from "./api.js";

let params = new URLSearchParams(document.location.search.substring(1));
let show_id = params.get("show_id");

async function getShowDetails(id) {
  let db = await getNetflixData();

  const showDetails = db.find(({ show_id }) => show_id === id);

  const ph_title = document.getElementById("details_title");
  const ph_description = document.getElementById("details_description");
  const ph_cast = document.getElementById("details_cast");
  const ph_type = document.getElementById("details_type");
  const ph_director = document.getElementById("details_director");
  const ph_duration = document.getElementById("details_duration");
  const ph_added = document.getElementById("details_added");

  const data_title = `${showDetails.title}`;
  const data_description = `${showDetails.description}`;
  const data_cast = `${showDetails.cast}`;
  const data_type = `${showDetails.type}`;
  const data_director = `${showDetails.director}`;
  const data_duration = `${showDetails.duration}`;
  const data_added = `${showDetails.date_added}`;

  ph_title.innerHTML = data_title;
  ph_description.innerHTML = data_description;
  ph_cast.innerHTML = data_cast;
  ph_type.innerHTML = data_type;
  ph_director.innerHTML = data_director;
  ph_duration.innerHTML = data_duration;
  ph_added.innerHTML = data_added;
}

getShowDetails(show_id);

import { getNetflixData } from "./api.js";

async function displayAllShows() {
  const db = await getNetflixData();
  let tbody = document.getElementById("append_netflix_list");

  db.forEach((element) => {
    const tr = document.createElement("tr");
    tbody.appendChild(tr);

    // create table data
    const td_type = document.createElement("td");
    const td_title = document.createElement("td");
    const td_genre = document.createElement("td");
    const td_more = document.createElement("td");
    td_type.innerHTML = `${element.type}`;
    td_title.innerHTML = `${element.title}`;
    td_genre.innerHTML = `${element.listed_in}`;
    tr.appendChild(td_type);
    tr.appendChild(td_title);
    tr.appendChild(td_genre);

    // // create URL with param
    let url = new URL(window.location.origin + "/details.html");
    const searchParams = url.searchParams;
    searchParams.set("show_id", element.show_id);

    td_more.innerHTML = `<a href="${url}"> Details </a>`;
    console.log(td_more);
    tr.appendChild(td_more);
  });
}

displayAllShows();

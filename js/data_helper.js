import { getNetflixData } from "./api.js";
import { filter_netflix_data } from "./filters.js";

// load data after DOM is rendered
window.addEventListener("DOMContentLoaded", async (loadData) => {
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

    // create URL with param
    let url = new URL(window.location.origin + "/details.html");
    const searchParams = url.searchParams;
    searchParams.set("show_id", element.show_id);

    td_more.innerHTML = `<a href="${url}"> <i class="bi bi-info-circle-fill" style="font-size: 1.5rem; color: white;"></i>
    </a>`;
    tr.appendChild(td_more);

    // disable button "All"
    document.getElementById("btnradio1").disabled = true;
  });
});

// functionality for filter buttons

document
  .getElementById("btnradio1")
  .addEventListener("click", async (showAll) => {
    const db = await getNetflixData();
    let tbody = document.getElementById("append_netflix_list");
    tbody.innerHTML = null;

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

      td_more.innerHTML = `<a href="${url}"> <i class="bi bi-info-circle-fill" style="font-size: 1.5rem; color: white;"></i> </a>`;
      tr.appendChild(td_more);

      // enable / disable buttons
      document.getElementById("btnradio1").disabled = true;
      document.getElementById("btnradio2").disabled = false;
      document.getElementById("btnradio3").disabled = false;
    });
  });

document
  .getElementById("btnradio2")
  .addEventListener("click", async (filtershowsOnly) => {
    const showsOnly = await filter_netflix_data("Movie");
    let tbody = document.getElementById("append_netflix_list");
    tbody.innerHTML = null;

    showsOnly.forEach((element) => {
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

      td_more.innerHTML = `<a href="${url}"> <i class="bi bi-info-circle-fill" style="font-size: 1.5rem; color: white;"></i> </a>`;
      tr.appendChild(td_more);

      // enable / disable buttons
      document.getElementById("btnradio1").disabled = false;
      document.getElementById("btnradio2").disabled = true;
      document.getElementById("btnradio3").disabled = false;
    });
  });

// btn TV Shows
document
  .getElementById("btnradio3")
  .addEventListener("click", async (filterShowsOnly) => {
    const showsOnly = await filter_netflix_data("TV Show");
    let tbody = document.getElementById("append_netflix_list");
    tbody.innerHTML = null;

    showsOnly.forEach((element) => {
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

      td_more.innerHTML = `<a href="${url}"> <i class="bi bi-info-circle-fill" style="font-size: 1.5rem; color: white;"></i> </a>`;
      tr.appendChild(td_more);

      // enable / disable buttons
      document.getElementById("btnradio1").disabled = false;
      document.getElementById("btnradio2").disabled = false;
      document.getElementById("btnradio3").disabled = true;
    });
  });

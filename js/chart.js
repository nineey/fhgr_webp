import { getNetflixData } from "./api.js";

const data_count = await filterNums();
console.log(data_count[2021]);
const ctx = document.getElementById("myChart").getContext("2d");
const myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["2016", "2017", "2018", "2019", "2020", "2021"],
    datasets: [
      {
        label: "# of Movies / TV Shows",
        data: [
          data_count[2016],
          data_count[2017],
          data_count[2018],
          data_count[2019],
          data_count[2020],
          data_count[2021],
        ],
        backgroundColor: [
          "rgba(255, 255, 255, 255)",
          "rgba(255, 255, 255, 255)",
          "rgba(255, 255, 255, 255)",
          "rgba(255, 255, 255, 255)",
          "rgba(255, 255, 255, 255)",
          "rgba(255, 255, 255, 255)",
        ],
      },
    ],
  },
  options: {
    legend: {
      labels: {
        fontColor: "rgba(255, 255, 255, 255)",
      },
    },

    scales: {
      xAxes: [
        {
          ticks: {
            fontColor: "white",
            fontSize: 18,
            beginAtZero: true,
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            fontColor: "white",
            fontSize: 18,
            beginAtZero: true,
            stepSize: 1,
          },
        },
      ],
    },
  },
});

async function filterNums() {
  const netflixShows = await getNetflixData();
  let countByYear = { 2016: 0, 2017: 0, 2018: 0, 2019: 0, 2020: 0, 2021: 0 };

  netflixShows.forEach((element) => {
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
      //
    }
  });
  console.log(countByYear);
  return countByYear;
}

async function totalNumberEntries() {
  const netflixShows = await getNetflixData();
  let counter = 0;

  netflixShows.forEach((element) => {
    counter += 1;
  });

  return counter;
}

const ul = document.getElementById("statsList");
const li = document.createElement("li");
const number = await totalNumberEntries();
li.innerHTML = `Die Bibliothek hat insgesamt ${number} Einträge`;
console.log(totalNumberEntries);
ul.appendChild(li);

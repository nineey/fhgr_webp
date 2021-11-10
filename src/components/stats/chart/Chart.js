import React from "react";
// Source: https://recharts.org/en-US/examples/SimpleBarChart
import {
  BarChart,
  Bar,
  // Cell,
  XAxis,
  YAxis,
  // CartesianGrid,
  // Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const dataMovies = [
  { name: "2016", data: 2400 },
  { name: "2017", data: 1398 },
  { name: "2018", data: 2334 },
  { name: "2019", data: 3908 },
  { name: "2020", data: 5666 },
  { name: "2021", data: 7898 },
];

const dataShows = [
  { name: "2016", data: 3455 },
  { name: "2017", data: 6788 },
  { name: "2018", data: 63567 },
  { name: "2019", data: 3456 },
  { name: "2020", data: 43567 },
  { name: "2021", data: 4576 },
];

export default function ShowChart({ activeChartFilter }) {
  let data;
  if (activeChartFilter === "movies" ? (data = dataMovies) : (data = dataShows))
    return (
      <>
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <BarChart
            className="chart"
            width={1000}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Legend />
            <Bar dataKey="data" fill="#ffffff" />
          </BarChart>
        </ResponsiveContainer>
      </>
    );
}

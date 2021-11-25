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

export default function ShowChart({ activeChartFilter, statsData }) {
  const data = [
    { name: "2016", Movies: statsData[2016], TVShows: statsData[2016] },
    { name: "2017", Movies: statsData[2017], TVShows: statsData[2016] },
    { name: "2018", Movies: statsData[2018], TVShows: statsData[2016] },
    { name: "2019", Movies: statsData[2019], TVShows: statsData[2016] },
    { name: "2020", Movies: statsData[2020], TVShows: statsData[2016] },
    { name: "2021", Movies: statsData[2021], TVShows: statsData[2016] },
  ];

  if (!data) return "Loading ...";
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
          <Bar dataKey="Movies" stackId="a" fill="#ffffff" />
          {/* <Bar dataKey="TVShows" stackId="b" fill="#519E34" /> */}
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}

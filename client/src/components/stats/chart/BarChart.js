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
  // Legend,
  ResponsiveContainer,
} from "recharts";

export default function ShowChart({ activeChartFilter, statsData }) {
  const data = [
    { name: "2015", chartBarData: statsData[2015] },
    { name: "2016", chartBarData: statsData[2016] },
    { name: "2017", chartBarData: statsData[2017] },
    { name: "2018", chartBarData: statsData[2018] },
    { name: "2019", chartBarData: statsData[2019] },
    { name: "2020", chartBarData: statsData[2020] },
    { name: "2021", chartBarData: statsData[2021] },
  ];

  if (!data) return "Loading ...";
  return (
    <>
      <h3 className="mb-5">
        {activeChartFilter === "movie"
          ? "Movies"
          : activeChartFilter === "tv show"
          ? "TV Shows"
          : "Movies & TV Shows"}{" "}
        added per year
      </h3>
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
          <YAxis type="number" domain={[0, 2016]} />
          <Bar dataKey="chartBarData" stackId="a" fill="#ffffff" />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}
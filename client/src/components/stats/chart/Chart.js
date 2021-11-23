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
    { name: "2016", data: statsData[2016] },
    { name: "2017", data: statsData[2017] },
    { name: "2018", data: statsData[2018] },
    { name: "2019", data: statsData[2019] },
    { name: "2020", data: statsData[2020] },
    { name: "2021", data: statsData[2021] },
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
          <Bar dataKey="data" fill="#ffffff" />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}

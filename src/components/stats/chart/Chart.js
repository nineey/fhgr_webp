import React from "react";
// source: https://recharts.org/en-US/examples/SimpleBarChart
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "2016",
    uv: 4000,
    Movies: 2400,
    amt: 2400,
  },
  {
    name: "2017",
    uv: 3000,
    Movies: 1398,
    amt: 2210,
  },
  {
    name: "2018",
    uv: 2000,
    Movies: 9800,
    amt: 2290,
  },
  {
    name: "2019",
    uv: 2780,
    Movies: 3908,
    amt: 2000,
  },
  {
    name: "2020",
    uv: 1890,
    Movies: 4800,
    amt: 2181,
  },
  {
    name: "2021",
    uv: 2390,
    Movies: 2000,
    amt: 2500,
  },
];

export default function ShowChart() {
  return (
    <>
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
        <Bar dataKey="Movies" fill="#ffffff" />
      </BarChart>
    </>
  );
}

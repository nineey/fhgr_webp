import React, { Component } from "react";
import Chart from "./chart/Chart";
import ChartFilter from "./chartFilter/ChartFilter";

export class Stats extends Component {
  render() {
    return (
      <>
        <ChartFilter />
        <Chart />
      </>
    );
  }
}

export default Stats;

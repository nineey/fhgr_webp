import React, { Component } from "react";
import Chart from "./chart/Chart";
import ChartFilter from "./chartFilter/ChartFilter";

export class Stats extends Component {
  render() {
    return (
      <>
        <ChartFilter />

        <div class="row">
          <div class="col-sm-6">
            <Chart />
          </div>
        </div>
      </>
    );
  }
}

export default Stats;

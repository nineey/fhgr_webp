import React from "react";
import Chart from "./chart/Chart";
import ChartFilter from "./chartFilter/ChartFilter";

export default function Stats() {
  return (
    <>
      <ChartFilter />

      <div className="row">
        <div className="col-sm-6">
          <Chart />
        </div>
      </div>
    </>
  );
}

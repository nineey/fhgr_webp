import React, { useState } from "react";
import styled from "styled-components";
import Chart from "./chart/Chart";
import ChartFilter from "./chartFilter/ChartFilter";

export default function Stats() {
  // Hooks
  const [activeChartFilter, setActiveChartFilter] = useState("movies");

  return (
    <>
      <div className="row mt-5">
        <div className="col-md-6">
          <ChartFilter setActiveChartFilter={setActiveChartFilter} />
        </div>
        <div className="col-md-6">
          <ChartContainer>
            <Chart activeChartFilter={activeChartFilter} />
          </ChartContainer>
        </div>
      </div>
    </>
  );
}

const ChartContainer = styled.div`
  width: 100%;
  height: 25em;
`;

import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import Chart from "./chart/Chart";
import ChartFilter from "./chartFilter/ChartFilter";
import axios from "axios";

export default function Stats() {
  const [activeChartFilter, setActiveChartFilter] = useState("");
  const [statsData, setStatsData] = useState({});

  // Get stats data from server
  // Response is an object: {year: counter, year: counter, ...}
  const getStats = useCallback(async () => {
    const statsData = (
      await axios.get(`/api/stats`, {
        params: { type: activeChartFilter },
      })
    ).data;
    setStatsData(statsData);
  }, [activeChartFilter]);

  useEffect(() => {
    getStats();
  }, [getStats]);

  return (
    <>
      <div className="row">
        <div className="col">
          <ChartFilter
            activeChartFilter={activeChartFilter}
            setActiveChartFilter={setActiveChartFilter}
          />
        </div>
      </div>
      <div className="row mt-5">
        <div className="col">
          <ChartContainer>
            <Chart
              statsData={statsData}
              activeChartFilter={activeChartFilter}
            />
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

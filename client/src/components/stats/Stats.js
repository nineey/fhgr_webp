import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import Chart from "./chart/Chart";
import ChartFilter from "./chartFilter/ChartFilter";
import axios from "axios";

export default function Stats() {
  // Hooks
  const [activeChartFilter, setActiveChartFilter] = useState("movie");
  const [statsData, setStatsData] = useState({});

  const getStats = useCallback(async () => {
    const statsData = (
      await axios.get(`/api/stats`, {
        params: { byType: activeChartFilter },
      })
    ).data;
    setStatsData(statsData);
  }, [activeChartFilter]);

  useEffect(() => {
    getStats();
  }, [getStats]);

  return (
    <>
      <div className="row mt-5">
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

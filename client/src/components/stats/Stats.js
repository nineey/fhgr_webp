import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import BarChart from "./chart/BarChart";
import TypeFilter from "./chartFilter/TypeFilter";
import axios from "axios";
import RandomInfo from "./chart/RandomInfo";

export default function Stats() {
  const [activeChartFilter, setActiveChartFilter] = useState("");
  const [statsData, setStatsData] = useState({});

  // Get stats data from server
  // Response is an object: {year: counter, year: counter, ... totalSum: sum}
  const getStats = useCallback(async () => {
    const statsData = (
      await axios.get(`/api/stats/byYear`, {
        params: { type: activeChartFilter },
      })
    ).data;
    setStatsData(statsData);
  }, [activeChartFilter]);

  useEffect(() => {
    getStats();
    return () => console.log("cleaned up");
  }, [getStats]);

  return (
    <>
      <div className="row">
        <div className="col">
          <TypeFilter
            activeChartFilter={activeChartFilter}
            setActiveChartFilter={setActiveChartFilter}
          />
        </div>
      </div>
      <div className="row mt-5">
        <div className="col">
          <ChartContainer>
            <RandomInfo
              activeChartFilter={activeChartFilter}
              statsData={statsData}
            />
          </ChartContainer>
        </div>
        <div className="col">
          <ChartContainer>
            <BarChart
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

/* ----------------------------------------
 This component represents the page "/stats"
----------------------------------------- */

import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import BarChart from "./chart/BarChart";
import TypeFilter from "./chartFilter/TypeFilter";
import axios from "axios";
import RandomInfo from "./chart/RandomInfo";
import LoadingSpinner from "../utils/LoadingSpinner";

export default function Stats() {
  const [activeChartFilter, setActiveChartFilter] = useState("");
  const [statsData, setStatsData] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Get stats data on first render and everytime when chart filter changes
  // Response is an object: {year: counter, year: counter, ... totalSum: sum}
  const getStats = useCallback(async () => {
    try {
      const statsData = (
        await axios.get(`/api/stats/byYear`, {
          params: { type: activeChartFilter },
        })
      ).data;
      setStatsData(statsData);
    } catch (error) {
      console.error(error);
      setError("Can't connect to the server...");
    }
    setLoading(false);
  }, [activeChartFilter]);

  useEffect(() => {
    getStats();
  }, [getStats]);

  if (isLoading) return <LoadingSpinner />;
  if (error) return <div>{error}</div>;

  return (
    <>
      <div className="row">
        <div className="col-md-6">
          <TypeFilter
            activeChartFilter={activeChartFilter}
            setActiveChartFilter={setActiveChartFilter}
          />
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-6">
          <RandomInfoContainer>
            <RandomInfo
              activeChartFilter={activeChartFilter}
              statsData={statsData}
            />
          </RandomInfoContainer>
        </div>
        <div className="col-md-6 mt-3 mt-md-0">
          <hr className="d-block d-md-none mb-4" />
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
  height: 18em;
`;

const RandomInfoContainer = styled.div`
  @media only screen and (min-width: 768px) {
    min-height: 20.5em;
  }
`;

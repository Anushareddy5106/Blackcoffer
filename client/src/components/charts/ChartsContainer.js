import React from "react";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import RadarChart from "./RadarChart";
import ScatterChart from "./ScatterChart";
import PolarAreaChart from "./PolarAreaChart";

import "./styles.css";

const ChartsContainer = ({ data }) => {
  return (
    <div className="charts">
      <BarChart data={data} />
      <LineChart data={data} />
      <PieChart data={data} />
      <RadarChart data={data} />
      <ScatterChart data={data} />
      <PolarAreaChart data={data} />
    </div>
  );
};

export default ChartsContainer;

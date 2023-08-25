import React, { useState, useEffect } from "react";
import Chart from "chart.js/auto";
import Filter from "../Filter";

import { average } from "../../utils/average";

import "./styles.css";

let chart = 0;
const LineChart = ({ data }) => {
  const [filter, setFilter] = useState("end_year");

  useEffect(() => {
    const averageIntensities = average(data, filter, "intensity");
    const averageLikelihoods = average(data, filter, "likelihood");
    const averageRelevances = average(data, filter, "relevance");

    const createChart = () => {
      const labels = averageIntensities.map((d) =>
        d.filterOption === "null" ? "Others" : d.filterOption
      );

      //console.log(labels);
      const ctx = document.getElementById("line_chart").getContext("2d");

      let configuration = {
        type: "line",
        data: {
          labels: labels,
          datasets: [
            {
              label: "Intensity",
              data: averageIntensities.map((d) => d.average),
              backgroundColor: "blue",
              borderWidth: 1,
            },
            {
              label: "Likelihood",
              data: averageLikelihoods.map((d) => d.average),
              backgroundColor: "black",
              borderWidth: 1,
            },
            {
              label: "Relevance",
              data: averageRelevances.map((d) => d.average),
              backgroundColor: "yellow",
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,

          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      };

      if (chart) {
        chart.destroy();
        chart = new Chart(ctx, configuration);
      } else {
        chart = new Chart(ctx, configuration);
      }
      chart.resize(2000, 700);
    };

    if (data.length > 0) {
      createChart();
    }
  }, [data, filter]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="chart_box" id="line_id">
      <div className="chart-head">
        <h2>Line Chart</h2>
        <Filter id={"line-filter"} filter={filter} setFilter={setFilter} />
      </div>
      <div className="canvas-container">
        <canvas id="line_chart" className="chart-canvas"></canvas>
      </div>
    </div>
  );
};

export default LineChart;

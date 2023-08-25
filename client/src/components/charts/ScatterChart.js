import React, { useState, useEffect } from "react";
import Chart from "chart.js/auto";
import Filter from "../Filter";

import { average } from "../../utils/average";

import "./styles.css";

let chart = 0;

const ScatterChart = ({ data }) => {
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
      const ctx = document.getElementById("scatter_chart").getContext("2d");

      let configuration = {
        type: "scatter",
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
    };

    if (data.length > 0) {
      createChart();
    }
  }, [data, filter]);

  return (
    <div className="chart_box" id="scatter_id">
      <div className="chart-head">
        <h2>Scatter Chart</h2>
        <Filter id={"scatter-filter"} filter={filter} setFilter={setFilter} />
      </div>
      <canvas id="scatter_chart" className="chart-canvas"></canvas>
    </div>
  );
};

export default ScatterChart;

import React, { useState, useEffect } from "react";
import Chart from "chart.js/auto";
import Filter from "../Filter";

import { average } from "../../utils/average";

import "./styles.css";

let chart = 0;

const PolarAreaChart = ({ data }) => {
  const [filter, setFilter] = useState("start_year");

  useEffect(() => {
    const averageIntensities = average(data, filter, "intensity");
    const averageLikelihoods = average(data, filter, "likelihood");
    const averageRelevances = average(data, filter, "relevance");

    const createChart = () => {
      const labels = averageIntensities.map((d) =>
        d.filterOption === "null" ? "Others" : d.filterOption
      );
      console.log(averageIntensities);
      //console.log(labels);
      const ctx = document.getElementById("polar_chart").getContext("2d");

      let configuration = {
        type: "polarArea",
        data: {
          labels: labels,
          datasets: [
            {
              label: "Intensity",
              data: averageIntensities.map((d) => d.average),
              backgroundColor: [
                "rgba(255, 99, 132, 0.6)",
                "rgba(54, 162, 235, 0.6)",
                "rgba(255, 206, 86, 0.6)",
                "rgba(75, 192, 192, 0.6)",
                "rgba(153, 102, 255, 0.6)",
              ],
              //borderColor: "rgba(75, 192, 192, 1)",
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
    <div className="chart_box" id="polar_id">
      <div className="chart-head">
        <h2>Polar Area Chart</h2>
        <Filter
          id={"polar-area-filter"}
          filter={filter}
          setFilter={setFilter}
        />
      </div>
      <canvas id="polar_chart" className="chart-canvas"></canvas>
    </div>
  );
};

export default PolarAreaChart;

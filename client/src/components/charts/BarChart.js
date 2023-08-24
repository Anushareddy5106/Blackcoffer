import React, { useState, useEffect } from "react";
import Chart from "chart.js/auto";
import "./styles.css";

let chart = 0;

const BarChart = ({ data }) => {
  useEffect(() => {
    const avg = () => {
      const intensityByYear = {};

      data.map((entry) => {
        if (entry.start_year in intensityByYear) {
          intensityByYear[entry.start_year].push(entry.intensity);
        } else {
          intensityByYear[entry.start_year] = [entry.intensity];
        }
      });

      console.log(intensityByYear);

      const averageIntensities = Object.entries(intensityByYear).map(
        ([year, intensities]) => {
          const sum = intensities.reduce((acc, val) => acc + val, 0);
          return { year, averageIntensity: sum / intensities.length };
        }
      );

      console.log(averageIntensities);

      return averageIntensities;
    };
    const averageIntensities = avg();
    const createChart = () => {
      // const intensityData = data
      //   .map((d) => d.end_year >= 2017 && d.end_year <= 2030 && d.intensity)
      //   .filter((d) => d !== false);

      // const labels = data
      //   .map((d) => d.end_year >= 2017 && d.end_year <= 2030 && d.end_year)
      //   .filter((d) => d !== false);

      const intensityData = averageIntensities.map((d) => d.averageIntensity);
      const labels = averageIntensities.map((d) => d.year);

      //console.log(labels);
      const ctx = document.getElementById("bar_chart").getContext("2d");

      let configuration = {
        type: "bar",
        data: {
          labels: labels,
          datasets: [
            {
              label: "Intensity",
              data: intensityData,
              backgroundColor: [
                "rgba(255, 99, 132, 0.6)",
                "rgba(54, 162, 235, 0.6)",
                "rgba(255, 206, 86, 0.6)",
                "rgba(75, 192, 192, 0.6)",
                "rgba(153, 102, 255, 0.6)",
              ],
              borderColor: "rgba(75, 192, 192, 1)",
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
  }, [data]);

  return (
    <div className="chart_box" id="bar_id">
      <h2>Intensity and Likelihood Visualization</h2>
      <canvas id="bar_chart"></canvas>
    </div>
  );
};

export default BarChart;

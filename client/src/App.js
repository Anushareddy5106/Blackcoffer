import React, { useState, useEffect } from "react";
import axios from "axios";
import PieChart from "./components/PieChart.js";
import BarChart from "./components/BarChart.js";
import "./styles/style.css";
import LineChart from "./components/LineChart.js";
import CardList from "./components/CardList.js";

function App() {
  return (
    <div className="App">
      <h1>Data Visualization Dashboard</h1>
      <div className="charts">
        {/* <BarChart />
        <LineChart />
        <PieChart /> */}
        <CardList />
      </div>
    </div>
  );
}

export default App;

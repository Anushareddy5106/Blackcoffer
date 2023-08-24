import React, { useState, useEffect } from "react";
import axios from "axios";
import "./global.css";
// import PieChart from "./components/PieChart.js";
// import BarChart from "./components/BarChart.js";
// import "./styles/style.css";
// import LineChart from "./components/LineChart.js";
// import CardList from "./components/CardList.js";

import NavBar from "./components/NavBar.js";
import Home from "./components/Home.js";

function App() {
  const [chart, setChart] = useState(true);

  return (
    <div className="App">
      {/* <div className="charts">
         <BarChart />
         <LineChart /> 
        <PieChart />
         <CardList /> 
         </div>  */}
      <NavBar setChart={setChart} />
      <Home chart={chart} />
    </div>
  );
}

export default App;

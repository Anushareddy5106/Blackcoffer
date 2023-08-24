import React from "react";
import "./styles.css";

const NavBar = ({ setChart }) => {
  return (
    <nav>
      {" "}
      <div className="leftnav">BlackCoffer</div>
      <div className="rightnav">
        <span className="sidebtn" onClick={() => setChart(true)}>
          Charts
        </span>
        <span className="sidebtn" onClick={() => setChart(false)}>
          Cards
        </span>
      </div>
    </nav>
  );
};

export default NavBar;

import React from "react";
import FilterButton from "../assets/icons8-filter-100.png";

const Filter = ({ id, filter, setFilter }) => {
  return (
    <div className="filter">
      <label for={id}>
        <img src={FilterButton} className="filter-button" alt="Filter by:" />
      </label>
      <select
        id={id}
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="end_year">End Year</option>
        <option value="sector">Sector</option>
        <option value="topic">Topic</option>
        <option value="region">Region</option>
        <option value="start_year"> Start Year</option>
        <option value="country">Country</option>
        <option value="pestle">Pestle</option>
        <option value="source">Source</option>
      </select>
    </div>
  );
};

export default Filter;

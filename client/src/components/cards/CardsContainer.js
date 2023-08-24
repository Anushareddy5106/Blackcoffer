import React from "react";
import ReactPaginate from "react-paginate";
import { useState, useEffect } from "react";
import Card from "./Card.js";

import "./styles.css";

const CardsContainer = ({ data }) => {
  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = data.slice(startIndex, endIndex);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  return (
    <>
      {" "}
      <div className="card_list">
        {currentItems.map((i) => (
          <Card report={i} />
          // <span>{i.title}</span>
        ))}
      </div>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        breakLabel={"..."}
        pageCount={totalPages}
        onPageChange={handlePageChange}
        containerClassName={"pagination"}
        activeClassName={"active"}
      />
    </>
  );
};

export default CardsContainer;

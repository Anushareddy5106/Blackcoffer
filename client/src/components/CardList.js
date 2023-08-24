import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Card from "./Card.js";

const API = axios.create({ baseURL: "http://localhost:5000" });

const CardList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await API.get("/api/data");
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="card_list">
      {/* {data.map((i) => (
        <Card report={i} />
      ))} */}
    </div>
  );
};

export default CardList;

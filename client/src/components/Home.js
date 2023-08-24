import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";
import ChartsContainer from "./charts/ChartsContainer";
import CardsContainer from "./cards/CardsContainer";

const API = axios.create({ baseURL: "http://localhost:5000" });

const Home = ({ chart }) => {
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
    <div className="home">
      {" "}
      {chart ? (
        <>
          <ChartsContainer data={data} />{" "}
        </>
      ) : (
        <>
          <CardsContainer data={data} />{" "}
        </>
      )}
    </div>
  );
};

export default Home;

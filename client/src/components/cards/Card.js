import React from "react";
import "./styles.css";

const Card = ({ report }) => {
  // console.log(report);
  const year = report && report.added.split(" ")[2];
  const month = report && report.added.split(" ")[0].slice(0, 3);
  const day = report && report.added.split(" ")[1];

  return (
    <div className="card">
      <div className="date-container ll">
        <span>{year}</span>
        <span className="separator"></span>
        <span>{month + " " + day} </span>
      </div>
      <div className="card-content ">
        <p className="insight-c ll bold">{report.insight && report.insight}</p>
        <span className="spt-c ll">
          {report.sector && report.sector + ","}{" "}
          {report.pestle && report.pestle + ","} {report.topic && report.topic}
        </span>
        <p className="country-c ll bold">
          &#xe567;{report.country && report.country}
        </p>
        <div className="ll">
          <span className="intensity-c">Intensity : {report.intensity}</span>
          <span className="likelihood-c">Likelihood : {report.likelihood}</span>
          <span className="relevance-c">Relevance : {report.relevance}</span>
          <p className="title-c ll">
            <h5>Title</h5>: {report.title && report.title}
          </p>
        </div>
        <p className="source-c ll">-- {report.source}</p>
      </div>
    </div>
  );
};

export default Card;

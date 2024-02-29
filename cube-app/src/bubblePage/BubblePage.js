import React from "react";
import "./BubblePage.css";
import { useParams, useLocation, Link } from "react-router-dom";
import { weatherSvg } from "../algo/weatherSvg";

const BubblePage = () => {
  const { state } = useLocation();
  let fixedPrice = state?.price.toFixed(4);
  console.log("Location State:", state);

  //const svgName = weatherSvg(state?.value);

  return (
    <div
      className="bubble-page-container"
      style={{ background: weatherSvg(state?.value), backgroundSize: "cover" }}
    >
      <h2 className="bubble__coin__name">{state?.name} </h2>

      <div className="bubble-container__data">
        <div className="bubble__coin__row">
          <label className="bubble__coin__label">ticker </label>
          <div className="bubble__data">{state?.ticker}</div>
        </div>
        <div className="bubble__coin__row">
          <label className="bubble__coin__label"> price</label>
          <div className="bubble__data">${fixedPrice}</div>
        </div>
        <div className="bubble__coin__row">
          <label className="bubble__coin__label">Change 24h</label>
          <div className="bubble__data"> {state?.value}%</div>
        </div>
        <Link to="/">
          <div className="link__homepage">Back to homepage</div>
        </Link>
      </div>
    </div>
  );
};

export default BubblePage;

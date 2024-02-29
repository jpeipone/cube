import React from "react";
import "./HomePage.css";
import BubblesMove from "../bubbles/BubblesMove";
import BubblePage from "../bubblePage/BubblePage";

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="row__24__colors">
        <h1 className="header__24">Crypto weather 24h</h1>
      </div>
      <div className="bubbles-window">
        <BubblesMove />
      </div>
      <div className="terms__of__use">
        <br />
        <label className="powered__coinpaprika">Powered by Coinpaprika </label>
        <br />
        <br />
        <br />
        <p>
          Not ment for a financial advice or any other form of advice. Do your
          own research, no warranties for the accuracy or updatedness of the
          content.
        </p>
      </div>
    </div>
  );
};

export default HomePage;

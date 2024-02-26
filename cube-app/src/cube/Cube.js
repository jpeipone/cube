import { useState, useEffect } from "react";
import axios from "axios";
import "./Cube.css";
import { ColorOfCube } from "../algo/colorOfCube";

const Cube = () => {
  const [coins, setCoins] = useState([]);

  //Fetch data from coinpaprika api
  useEffect(() => {
    const axiosGetCoins = async () => {
      try {
        const response = await axios.get(
          "https://api.coinpaprika.com/v1/tickers?limit=100"
        );

        setCoins(response?.data);
      } catch (error) {
        console.error(error);
      }
    };
    axiosGetCoins();
  }, []);

  console.log("fetched coins", coins);

  let coin = 0;

  let colorBe = ColorOfCube(coin);
  return (
    <div className="cube-container">
      <div className="cube-grid">
        {coins.map((coin) => (
          <div
            className={
              coin?.quotes?.USD?.percent_change_24h > 0
                ? "coin-wrapper__green"
                : "coin-wrapper__red"
            }
            key={coin?.id}
            style={{
              backgroundColor: ColorOfCube(
                coin?.quotes?.USD?.percent_change_24h
              ),
            }}
          >
            <div className="coin__name">{coin?.symbol}</div>
            <div className="coin__change__24h">
              {coin?.quotes?.USD?.percent_change_24h}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cube;

import React, { useEffect, useState } from "react";
import Bubbles from "./Bubbles";
import axios from "axios";

const Colliding = (bubble1, bubble2) => {
  const dx = bubble1.left + 50 - (bubble2.left + 50);
  const dy = bubble1.top + 50 - (bubble2.top + 50);
  const distance = Math.sqrt(dx * dx + dy * dy);
  return distance < 100;
};

const BubblesMove = () => {
  //Fetch data from coinpaprika api
  const [coinsBubble, setCoinsBubble] = useState([]);
  const [bubbles, setBubbles] = useState([]);
  useEffect(() => {
    const axiosGetCoins = async () => {
      try {
        const response = await axios.get(
          "https://api.coinpaprika.com/v1/tickers?limit=21"
        );

        setCoinsBubble(response?.data);
      } catch (error) {
        console.error(error);
      }
    };
    axiosGetCoins();
  }, []);

  // console.log("crypto data", coinsBubble); shows axios response data
  //initial array of crypto Bubbles data and position
  useEffect(() => {
    setBubbles(
      coinsBubble.map((coin) => ({
        id: coin?.id,
        ticker: coin?.symbol,
        value: coin?.quotes?.USD?.percent_change_24h,
        price: coin?.quotes?.USD?.price,
        name: coin?.name,
        x: Math.random() * (window.innerWidth - 100), //stays on view (debending that bubble width is 100)
        y: Math.random() * (window.innerHeight - 100), //stays on view
      }))
    );
  }, [coinsBubble]);

  useEffect(() => {
    const handleCollision = () => {
      const updatedBubbles = bubbles.map((bubble, index) => {
        let newX = bubble.x;
        let newY = bubble.y;
        let collided = false;

        // Check for collisions with other bubbles
        for (let i = 0; i < bubbles.length; i++) {
          if (
            i !== index &&
            Colliding(
              { left: newX, top: newY },
              { left: bubbles[i].x, top: bubbles[i].y }
            )
          ) {
            // Collision new X and Y position
            newX += Math.random() * 9 - 5;
            newY += Math.random() * 9 - 5;
            collided = true;

            //right side
            if (window.width - 100 < newX) {
              newX = newX - 50;
            }
            //top side
            else if (newY > window.height - 90) {
              newY = newY + 50;
            }
            //left side
            else if (newX < 90) {
              newX = newX + 50;
            }
            //bottom
            else if (newY > window.height - 100) {
              newY = newY + 50;
            }
          }
        }

        // Collision happened, update new position
        return collided ? { ...bubble, x: newX, y: newY } : bubble;
      });

      setBubbles(updatedBubbles);
    };

    const intervalId = setInterval(handleCollision, 1000); //1000ms = 1 s

    return () => clearInterval(intervalId);
  }, [bubbles]);

  return (
    <div>
      {bubbles.map((bubble) => (
        <Bubbles
          key={bubble?.id}
          ticker={bubble?.ticker}
          value={bubble?.value}
          x={bubble?.x}
          y={bubble?.y}
          name={bubble?.name}
          price={bubble?.price}
        />
      ))}
    </div>
  );
};

export default BubblesMove;

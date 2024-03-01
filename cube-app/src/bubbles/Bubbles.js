import React, { useState } from "react";
import "./Bubbles.css";
import { useSpring, animated } from "react-spring";
import { weatherSvg } from "../algo/weatherSvg";
import { Link } from "react-router-dom";

const Bubbles = React.memo(({ ticker, value, x, y, name, price }) => {
  const [isDragging, setDragging] = useState(false);
  const [position, setPosition] = useState({ x, y });

  const animation = useSpring({
    from: { left: x, top: y },
    to: async (next) => {
      while (1) {
        await next({
          left: position?.x + Math.random() * 50 - 25,
          top: Math.max(
            0,
            Math.min(window.innerHeight, position?.y + Math.random() * 50 - 25)
          ),
        });
      }
    },
    config: { duration: 1800 },
  });

  const handleMouseDown = () => {
    setDragging(true);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const newX = e.clientX - 50;
      const newY = e.clientY - 50;

      setPosition({ x: newX, y: newY });
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  const handleOnClick = () => {
    console.log("show price: " + price + " name: " + name);
  };

  const stringName = JSON.stringify(name);
  const dataObject = { name: "Hello!", price: price };
  // console.log("dataobject", dataObject);
  return (
    <animated.div
      style={{
        ...animation,
        position: "absolute",
        borderRadius: "50%",
        width: "130px",
        height: "130px",

        cursor: isDragging ? "grabbing" : "grab",
        background: weatherSvg(value),
        backgroundSize: "cover",
      }}
      className={value > 0 ? "bubble-wrapper__green" : "bubble-wrapper__red"}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onClick={handleOnClick}
    >
      <Link
        to="/bubble"
        state={{ price: price, name: name, ticker: ticker, value: value }}
      >
        <div className="bubble__ticker">{ticker}</div>
      </Link>

      <div className="bubble__change__24h">{value}%</div>
    </animated.div>
  );
});

export default Bubbles;

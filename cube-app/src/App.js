import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import Bubbles from "./bubbles/Bubbles";
import React, { useEffect, useRef, useState } from "react";
import ColorScale from "./colorScale/ColorScale";
import Cube from "./cube/Cube";
import BubblesMove from "./bubbles/BubblesMove";
import BubblePage from "./bubblePage/BubblePage";
import HomePage from "./homepage/HomePage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/bubble" element={<BubblePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

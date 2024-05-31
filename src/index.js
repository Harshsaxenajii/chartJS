// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

// Import Chart.js and required adapters
import { Chart, registerables } from "chart.js";
import "chartjs-adapter-date-fns";

// Register Chart.js components
Chart.register(...registerables);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

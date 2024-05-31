// src/components/TopDestPortsChart.jsx
import React from "react";
import { Bar } from "react-chartjs-2";

const TopDestPortsChart = ({ data }) => {
  const destPorts = data.map((alert) => alert.dest_port);
  const destPortCounts = destPorts.reduce((acc, port) => {
    acc[port] = (acc[port] || 0) + 1;
    return acc;
  }, {});

  const sortedDestPorts = Object.entries(destPortCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10);

  const chartData = {
    labels: sortedDestPorts.map((entry) => entry[0]),
    datasets: [
      {
        label: "Number of Alerts",
        data: sortedDestPorts.map((entry) => entry[1]),
        backgroundColor: "orange",
      },
    ],
  };

  return <Bar data={chartData} />;
};

export default TopDestPortsChart;

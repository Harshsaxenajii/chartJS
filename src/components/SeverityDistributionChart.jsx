// src/components/SeverityDistributionChart.jsx
import React from "react";
import { Pie } from "react-chartjs-2";

const SeverityDistributionChart = ({ data }) => {
  const severities = data.map((alert) => alert["alert.severity"]);
  const severityCounts = severities.reduce((acc, severity) => {
    acc[severity] = (acc[severity] || 0) + 1;
    return acc;
  }, {});

  const chartData = {
    labels: Object.keys(severityCounts),
    datasets: [
      {
        data: Object.values(severityCounts),
        backgroundColor: ["red", "yellow", "green"],
      },
    ],
  };

  return <Pie data={chartData} />;
};

export default SeverityDistributionChart;

// src/components/TimeSeriesChart.js
import React from "react";
import { Line } from "react-chartjs-2";
import "chartjs-adapter-date-fns";

const TimeSeriesChart = ({ data }) => {
  const processedData = data.reduce((acc, alert) => {
    const time = new Date(alert.timestamp).getTime();
    acc[time] = (acc[time] || 0) + 1;
    return acc;
  }, {});

  const chartData = {
    labels: Object.keys(processedData),
    datasets: [
      {
        label: "Number of Alerts Over Time",
        data: Object.values(processedData),
        borderColor: "cyan",
        backgroundColor: "rgba(0, 255, 255, 0.2)",
      },
    ],
  };

  return <Line data={chartData} />;
};

export default TimeSeriesChart;

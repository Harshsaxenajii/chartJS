// src/components/TimeSeriesChart.jsx
import React from "react";
import { Line } from "react-chartjs-2";

const TimeSeriesChart = ({ data }) => {
  console.log(data);
  const processedData = data.reduce((acc, alert) => {
    const time = new Date(alert.timestamp).getTime();
    acc[time] = (acc[time] || 0) + 1;
    return acc;
  }, {});

  const chartData = {
    labels: Object.keys(processedData).map((time) => new Date(parseInt(time))),
    datasets: [
      {
        label: "Number of Alerts Over Time",
        data: Object.values(processedData),
        borderColor: "cyan",
        backgroundColor: "rgba(0, 255, 255, 0.2)",
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: "time",
        time: {
          unit: "minute",
        },
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default TimeSeriesChart;

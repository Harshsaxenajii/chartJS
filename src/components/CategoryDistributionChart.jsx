// src/components/CategoryDistributionChart.jsx
import React from "react";
import { Bar } from "react-chartjs-2";

const CategoryDistributionChart = ({ data }) => {
  const categories = data.map((alert) => alert["alert.category"]);
  const categoryCounts = categories.reduce((acc, category) => {
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {});

  const sortedCategories = Object.entries(categoryCounts).sort(
    (a, b) => b[1] - a[1]
  );

  const chartData = {
    labels: sortedCategories.map((entry) => entry[0]),
    datasets: [
      {
        label: "Number of Alerts",
        data: sortedCategories.map((entry) => entry[1]),
        backgroundColor: "blue",
      },
    ],
  };

  return <Bar data={chartData} />;
};

export default CategoryDistributionChart;

// src/components/TopSourceIPsChart.jsx
import React from 'react';
import { Bar } from 'react-chartjs-2';

const TopSourceIPsChart = ({ data }) => {
  const sourceIPs = data.map(alert => alert.src_ip);
  const sourceIPCounts = sourceIPs.reduce((acc, ip) => {
    acc[ip] = (acc[ip] || 0) + 1;
    return acc;
  }, {});

  const sortedSourceIPs = Object.entries(sourceIPCounts).sort((a, b) => b[1] - a[1]).slice(0, 10);

  const chartData = {
    labels: sortedSourceIPs.map(entry => entry[0]),
    datasets: [
      {
        label: 'Number of Alerts',
        data: sortedSourceIPs.map(entry => entry[1]),
        backgroundColor: 'purple',
      },
    ],
  };

  return <Bar data={chartData} />;
};

export default TopSourceIPsChart;

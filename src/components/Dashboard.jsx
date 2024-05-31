// src/components/Dashboard.jsx
import React from "react";
import useDataFetch from "./UseDataFetch";
import TimeSeriesChart from "./TimeSeriesChart";
import TopSourceIPsChart from "./TopSourceIPsChart";
import TopDestPortsChart from "./TopDestPortsChart";
import SeverityDistributionChart from "./SeverityDistributionChart";
import CategoryDistributionChart from "./CategoryDistributionChart";

const Dashboard = () => {
  const { data, loading } = useDataFetch();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div
      style={{
        backgroundColor: "#121212",
        color: "#fff",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h1>Security Alerts Dashboard</h1>
      <TimeSeriesChart data={data} />
      <TopSourceIPsChart data={data} />
      <TopDestPortsChart data={data} />
      <SeverityDistributionChart data={data} />
      <CategoryDistributionChart data={data} />
    </div>
  );
};

export default Dashboard;

import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Dashboard = () => {
  const bookData = useLoaderData();

  return (
    <div className="overflow-auto">
      <LineChart
        width={1900}
        height={450}
        data={bookData}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="bookName" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="totalPages" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
};

export default Dashboard;

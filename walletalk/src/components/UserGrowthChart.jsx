import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";

Chart.register(CategoryScale, LinearScale, PointElement, LineElement);

const UserGrowthChart = () => {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Users Joined",
        data: [12, 19, 25, 22, 30, 35, 40],
        fill: false,
        borderColor: "#38bdf8",
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="bg-[#0f172a] p-4 rounded-xl border border-[#38bdf8]">
      <h3 className="text-[#a78bfa] text-xl font-semibold mb-4">
        📈 User Growth This Week
      </h3>
      <Line data={data} />
    </div>
  );
};

export default UserGrowthChart;

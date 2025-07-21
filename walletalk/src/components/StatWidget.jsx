import React from "react";

const StatWidget = ({ title, value }) => (
  <div className="bg-[#1a2233] p-4 rounded-lg w-48 text-center border border-[#a78bfa]">
    <p className="text-[#38bdf8] text-2xl font-bold">{value}</p>
    <p className="text-white text-sm">{title}</p>
  </div>
);

export default StatWidget;

import React from "react";

const FeatureCard = ({ icon, title, desc }) => (
  <div className="bg-[#1a2233] p-6 rounded-lg border border-[#38bdf8]">
    <h4 className="text-xl font-bold text-[#a78bfa] mb-2">
      {icon} {title}
    </h4>
    <p className="text-[#94a3b8]">{desc}</p>
  </div>
);

export default FeatureCard;

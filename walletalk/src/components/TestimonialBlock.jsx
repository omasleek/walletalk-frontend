import React from "react";

const TestimonialBlock = ({ name, quote }) => (
  <div className="bg-[#1a2233] p-6 rounded-lg border-l-4 border-[#a78bfa]">
    <p className="text-white text-sm italic">“{quote}”</p>
    <p className="text-[#38bdf8] font-bold mt-2">– {name}</p>
  </div>
);

export default TestimonialBlock;

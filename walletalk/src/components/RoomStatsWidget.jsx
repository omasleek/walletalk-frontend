import React from "react";
import { chatRooms } from "../data";

const RoomStatsWidget = () => {
  return (
    <div className="bg-[#0f172a] p-4 rounded-xl border border-[#38bdf8]">
      <h3 className="text-[#a78bfa] text-xl font-semibold mb-4">
        📊 Active Rooms
      </h3>
      <ul className="text-white text-sm space-y-3">
        {chatRooms.map((room) => (
          <li key={room.id} className="border-b border-[#1ea8e6] pb-2">
            <strong className="text-[#38bdf8]">{room.name}</strong> —{" "}
            {room.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RoomStatsWidget;

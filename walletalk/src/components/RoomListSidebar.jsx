import React from "react";
import { users } from "../data";

const RoomListSidebar = () => {
  return (
    <div className="bg-[#0f172a] w-64 p-4 border-r border-[#1ea8e6] hidden lg:flex flex-col space-y-4">
      <h2 className="text-[#a78bfa] text-xl font-bold mb-2">Rooms & Friends</h2>
      {users.map((user) => (
        <div
          key={user.id}
          className="flex items-center justify-between p-2 rounded-lg hover:bg-[#1a2233]"
        >
          <div>
            <p className="text-[#38bdf8] font-semibold">
              {user.avatar} {user.name}
            </p>
            <p className="text-white text-xs">{user.role}</p>
          </div>
          <span
            className={`w-3 h-3 rounded-full ${
              user.status === "online" ? "bg-green-400" : "bg-gray-500"
            }`}
          />
        </div>
      ))}
    </div>
  );
};

export default RoomListSidebar;

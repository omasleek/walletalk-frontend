import React from "react";
import RoomListSidebar from "../components/RoomListSidebar";
import ChatWindow from "../components/ChatWindow";
import UserProfilePanel from "../components/UserProfilePanel";

import { useParams } from "react-router-dom";

const WalleTalkChatBoard = () => {
  const { roomId } = useParams();

  return (
    <div className="flex flex-col h-screen bg-[#0f172a] text-white overflow-hidden">
      {/* Top Header */}
      <div className="p-4 border-b border-[#1ea8e6] text-xl font-semibold text-[#a78bfa]">
        🧩 Room: {roomId}
      </div>

      {/* Main Layout */}
      <div className="flex flex-1">
        <RoomListSidebar />
        <ChatWindow />
        <UserProfilePanel />
      </div>
    </div>
  );
};

export default WalleTalkChatBoard;

import React from "react";
import { adminStats } from "../data";
import UserGrowthChart from "../components/UserGrowthChart";
import RoomStatsWidget from "../components/RoomStatsWidget";
import ModerationPanel from "../components/ModerationPanel";
import WalletTracker from "../components/WalletTracker";


const AdminDashboard = () => {
  return (
    <div className="max-w-5xl mx-auto mt-24 px-6">
      <h1 className="text-[#a78bfa] text-3xl font-bold mb-6">
        Admin Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <UserGrowthChart />
        <RoomStatsWidget />
        <ModerationPanel />
        <WalletTracker />

        {/* User Stats */}
        <div className="bg-[#0f172a] p-6 rounded-lg shadow-md border border-[#38bdf8]">
          <h3 className="text-[#38bdf8] text-xl font-semibold">
            👥 User Stats
          </h3>
          <p className="text-white mt-2">
            Active users: {adminStats.usersOnline}
          </p>
        </div>

        {/* Message Volume */}
        <div className="bg-[#0f172a] p-6 rounded-lg shadow-md border border-[#38bdf8]">
          <h3 className="text-[#38bdf8] text-xl font-semibold">
            💬 Message Volume
          </h3>
          <p className="text-white mt-2">
            Today: {adminStats.messagesToday} messages
          </p>
        </div>

        {/* Alerts Panel */}
        <div className="bg-[#0f172a] p-6 rounded-lg shadow-md border border-[#38bdf8] md:col-span-2">
          <h3 className="text-[#38bdf8] text-xl font-semibold">
            📢 System Alerts
          </h3>
          <ul className="mt-4 text-sm text-white list-disc list-inside space-y-2">
            {adminStats.recentAlerts.map((alert, index) => (
              <li key={index}>{alert}</li>
            ))}
          </ul>
        </div>

        {/* Tools */}
        <div className="bg-[#0f172a] p-6 rounded-lg shadow-md border border-[#38bdf8] md:col-span-2">
          <h3 className="text-[#38bdf8] text-xl font-semibold">🛠️ Tools</h3>
          <button className="mt-4 bg-[#38bdf8] hover:bg-[#1ea8e6] text-white font-medium px-4 py-2 rounded">
            Create New Room
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

import React from "react";

const SidebarWidget = () => {
  return (
    <div className="hidden lg:block w-72 bg-[#1a2233] text-white p-4 rounded-xl shadow-md">
      <h3 className="text-[#a78bfa] text-lg font-semibold mb-2">
        Quick Access
      </h3>
      <ul className="space-y-2 text-sm text-[#38bdf8]">
        <li>🔐 Wallet Status</li>
        <li>🕒 Recent Messages</li>
        <li>📢 Notifications</li>
        <li>📁 Room Archives</li>
        <li>📜 Terms & Privacy</li>
      </ul>
    </div>
  );
};

export default SidebarWidget;

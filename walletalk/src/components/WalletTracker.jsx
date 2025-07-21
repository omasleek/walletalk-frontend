import React from "react";

const WalletTracker = () => {
  const recentLogins = [
    "0xC1A0...AA91",
    "0x7Fb9...E26C",
    "0xB0B4...DD29",
    "0x45F3...002A",
  ];

  return (
    <div className="bg-[#0f172a] p-4 rounded-xl border border-[#38bdf8]">
      <h3 className="text-[#a78bfa] text-xl font-semibold mb-4">
        🔐 Wallet Logins
      </h3>
      <ul className="text-white text-sm font-mono space-y-2">
        {recentLogins.map((addr, i) => (
          <li key={i} className="text-[#38bdf8]">
            {addr}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WalletTracker;

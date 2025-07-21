import React from "react";

const ModerationPanel = () => {
  const bannedUsers = ["0xDeadBeef", "0xRogueNode", "0xSpamLord"];

  return (
    <div className="bg-[#0f172a] p-4 rounded-xl border border-[#38bdf8]">
      <h3 className="text-[#a78bfa] text-xl font-semibold mb-4">
        🚨 Moderation Panel
      </h3>
      <ul className="text-white text-sm space-y-2">
        {bannedUsers.map((user, i) => (
          <li key={i} className="text-red-400 font-mono">
            {user}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ModerationPanel;

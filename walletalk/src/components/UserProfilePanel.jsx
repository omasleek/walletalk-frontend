import React from "react";

const UserProfilePanel = () => {
  const profile = {
    name: "Chioma Okeke",
    role: "Frontend Developer",
    avatar: "💁‍♀️",
    location: "Lagos, Nigeria",
    sharedFiles: ["📄 BugList.pdf", "🎨 DesignMockup.png", "🎵 VoiceNote.mp3"],
  };

  return (
    <div className="bg-[#0f172a] w-64 p-4 border-l border-[#1ea8e6] hidden lg:flex flex-col space-y-4">
      <h2 className="text-[#a78bfa] text-xl font-bold mb-2">Profile Panel</h2>

      <div className="bg-[#1a2233] rounded-lg p-3 space-y-2">
        <p className="text-[#38bdf8] font-semibold text-lg">
          {profile.avatar} {profile.name}
        </p>
        <p className="text-white text-sm">{profile.role}</p>
        <p className="text-[#94a3b8] text-xs">{profile.location}</p>
      </div>

      <div>
        <h3 className="text-white font-semibold mb-2">Shared Files</h3>
        <ul className="text-sm space-y-1 text-[#38bdf8]">
          {profile.sharedFiles.map((file, i) => (
            <li key={i}>{file}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserProfilePanel;

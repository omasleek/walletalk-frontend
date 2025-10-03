import React, { useState, useEffect } from "react";
import { userAPI } from "../services/api";
import { shortenAddress } from "../utils/web3Utils";

const UserProfilePanel = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    // Always use dummy profile for demo
    setProfile({
      address: localStorage.getItem('walletalk_wallet') || '0xDummy',
      ensName: 'Demo User',
      role: 'User',
      createdAt: new Date().toISOString()
    });
    setLoading(false);
  };

  if (loading) {
    return (
      <div className="bg-[#0f172a] w-64 p-4 border-l border-[#1ea8e6] hidden lg:flex flex-col space-y-4">
        <p className="text-gray-400">Loading profile...</p>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="bg-[#0f172a] w-64 p-4 border-l border-[#1ea8e6] hidden lg:flex flex-col space-y-4">
        <p className="text-gray-400">No profile data</p>
      </div>
    );
  }

  return (
    <div className="bg-[#0f172a] w-64 p-4 border-l border-[#1ea8e6] hidden lg:flex flex-col space-y-4">
      <h2 className="text-[#a78bfa] text-xl font-bold mb-2">Profile Panel</h2>

      <div className="bg-[#1a2233] rounded-lg p-3 space-y-2">
        <p className="text-[#38bdf8] font-semibold text-lg">
          {profile.ensName || shortenAddress(profile.address)}
        </p>
        <p className="text-white text-sm">Role: {profile.role}</p>
        <p className="text-[#94a3b8] text-xs">Wallet: {shortenAddress(profile.address)}</p>
      </div>

      <div>
        <h3 className="text-white font-semibold mb-2">Account Info</h3>
        <p className="text-sm text-[#38bdf8]">Joined: {new Date(profile.createdAt).toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default UserProfilePanel;

import React, { useState } from 'react';

const Profile = () => {
  const [avatar, setAvatar] = useState('');
  const [ens, setEns] = useState('');
  const [stealthMode, setStealthMode] = useState(false);

  const handleAvatarChange = (e) => {
    // Dummy NFT avatar selection
    setAvatar(e.target.value);
  };

  const handleEnsChange = (e) => {
    setEns(e.target.value);
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-white px-6 py-24">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-[#a78bfa] mb-8">Profile Settings</h1>

        <div className="bg-[#1a2233] p-8 rounded-lg border border-[#38bdf8] space-y-6">
          {/* NFT Avatar */}
          <div>
            <label className="block text-[#38bdf8] mb-2">NFT Avatar</label>
            <select
              value={avatar}
              onChange={handleAvatarChange}
              className="w-full px-4 py-2 rounded bg-[#0f172a] border border-[#94a3b8] text-white"
            >
              <option value="">Select NFT</option>
              <option value="bayc">Bored Ape Yacht Club</option>
              <option value="azuki">Azuki</option>
              <option value="doodle">Doodle</option>
            </select>
          </div>

          {/* ENS Domain */}
          <div>
            <label className="block text-[#38bdf8] mb-2">ENS Domain</label>
            <input
              type="text"
              value={ens}
              onChange={handleEnsChange}
              placeholder="yourname.eth"
              className="w-full px-4 py-2 rounded bg-[#0f172a] border border-[#94a3b8] text-white"
            />
          </div>

          {/* Stealth Mode */}
          <div>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={stealthMode}
                onChange={(e) => setStealthMode(e.target.checked)}
                className="mr-2"
              />
              <span className="text-[#94a3b8]">Enable Stealth Mode (hide wallet ID)</span>
            </label>
          </div>

          {/* Multi-Wallet Linking */}
          <div>
            <label className="block text-[#38bdf8] mb-2">Linked Wallets</label>
            <div className="space-y-2">
              <div className="flex justify-between items-center bg-[#0f172a] p-2 rounded">
                <span>Main Wallet: {localStorage.getItem('walletalk_wallet')?.slice(0, 10)}...</span>
                <span className="text-green-400">Active</span>
              </div>
              <button className="text-[#38bdf8] hover:text-white">+ Link Another Wallet</button>
            </div>
          </div>

          <button className="w-full bg-[#38bdf8] hover:bg-[#1ea8e6] text-white py-2 rounded transition">
            Save Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
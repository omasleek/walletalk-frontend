import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const recentChats = [
    { id: 1, name: 'Web3 News', lastMessage: 'New DeFi protocol launched!', time: '2m ago' },
    { id: 2, name: 'NFT Lounge', lastMessage: 'Check out this rare BAYC!', time: '5m ago' },
    { id: 3, name: 'Dev Collab', lastMessage: 'Smart contract review needed', time: '10m ago' },
  ];

  const stats = [
    { label: 'Active Rooms', value: '12', icon: '💬' },
    { label: 'Messages Today', value: '247', icon: '📈' },
    { label: 'Online Users', value: '89', icon: '👥' },
    { label: 'Your NFTs', value: '5', icon: '🖼️' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white pt-16">
      {/* Back Button */}
      <div className="px-6 py-4">
        <button
          onClick={() => navigate('/')}
          className="text-[#38bdf8] hover:text-white transition duration-300 flex items-center gap-2"
        >
          ← Back to Home
        </button>
      </div>

      <div className="px-6 py-8 sm:px-12 md:px-24 lg:px-32">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-[#a78bfa] to-[#38bdf8] bg-clip-text text-transparent mb-4">
              WalleTalk Dashboard
            </h1>
            <p className="text-xl text-[#94a3b8] max-w-2xl">
              Your Web3 communication hub. Connect, chat, and transact with wallet-powered security.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="bg-[#1a2233]/50 backdrop-blur-sm p-6 rounded-xl border border-[#38bdf8]/20 hover:border-[#38bdf8]/40 transition-all duration-300">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-[#38bdf8]">{stat.value}</div>
                <div className="text-sm text-[#94a3b8]">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Main Actions */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <Link to="/chatrooms" className="group">
              <div className="bg-gradient-to-br from-[#1a2233] to-[#0f172a] p-8 rounded-xl border border-[#38bdf8]/30 hover:border-[#38bdf8] transition-all duration-300 hover:scale-105">
                <div className="text-4xl mb-4">💬</div>
                <h3 className="text-xl font-semibold text-[#38bdf8] mb-2 group-hover:text-white">Chat Rooms</h3>
                <p className="text-[#94a3b8] mb-4">Join token-gated communities and connect with Web3 enthusiasts.</p>
                <span className="text-[#a78bfa] group-hover:text-[#38bdf8]">Explore Rooms →</span>
              </div>
            </Link>

            <Link to="/create-room" className="group">
              <div className="bg-gradient-to-br from-[#1a2233] to-[#0f172a] p-8 rounded-xl border border-[#38bdf8]/30 hover:border-[#38bdf8] transition-all duration-300 hover:scale-105">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold text-[#38bdf8] mb-2 group-hover:text-white">Create Room</h3>
                <p className="text-[#94a3b8] mb-4">Launch your own Web3 community with advanced features.</p>
                <span className="text-[#a78bfa] group-hover:text-[#38bdf8]">Create Now →</span>
              </div>
            </Link>

            <Link to="/profile" className="group">
              <div className="bg-gradient-to-br from-[#1a2233] to-[#0f172a] p-8 rounded-xl border border-[#38bdf8]/30 hover:border-[#38bdf8] transition-all duration-300 hover:scale-105">
                <div className="text-4xl mb-4">👤</div>
                <h3 className="text-xl font-semibold text-[#38bdf8] mb-2 group-hover:text-white">Profile</h3>
                <p className="text-[#94a3b8] mb-4">Manage your ENS, NFTs, and wallet settings.</p>
                <span className="text-[#a78bfa] group-hover:text-[#38bdf8]">View Profile →</span>
              </div>
            </Link>
          </div>

          {/* Recent Chats */}
          <div className="bg-[#1a2233]/30 backdrop-blur-sm rounded-xl p-8 border border-[#38bdf8]/20 mb-12">
            <h3 className="text-2xl font-semibold text-[#a78bfa] mb-6">Recent Conversations</h3>
            <div className="space-y-4">
              {recentChats.map((chat) => (
                <div key={chat.id} className="flex items-center justify-between p-4 bg-[#0f172a]/50 rounded-lg hover:bg-[#0f172a]/70 transition">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#38bdf8] to-[#a78bfa] rounded-full flex items-center justify-center text-white font-bold">
                      {chat.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{chat.name}</h4>
                      <p className="text-sm text-[#94a3b8]">{chat.lastMessage}</p>
                    </div>
                  </div>
                  <span className="text-xs text-[#94a3b8]">{chat.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#1a2233]/30 backdrop-blur-sm rounded-xl p-8 border border-[#38bdf8]/20">
              <h3 className="text-xl font-semibold text-[#a78bfa] mb-4">💰 Wallet Actions</h3>
              <div className="space-y-3">
                <button className="w-full bg-[#38bdf8] hover:bg-[#1ea8e6] text-white py-2 rounded transition">
                  Send Tokens
                </button>
                <button className="w-full bg-[#a78bfa] hover:bg-[#7f5cf4] text-white py-2 rounded transition">
                  View NFTs
                </button>
                <button className="w-full bg-[#7f5cf4] hover:bg-[#a78bfa] text-white py-2 rounded transition">
                  DAO Voting
                </button>
              </div>
            </div>

            <div className="bg-[#1a2233]/30 backdrop-blur-sm rounded-xl p-8 border border-[#38bdf8]/20">
              <h3 className="text-xl font-semibold text-[#a78bfa] mb-4">📊 Analytics</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-[#94a3b8]">Messages Sent</span>
                  <span className="text-white font-semibold">1,247</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#94a3b8]">Active Communities</span>
                  <span className="text-white font-semibold">8</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#94a3b8]">Tokens Tipped</span>
                  <span className="text-white font-semibold">0.5 ETH</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
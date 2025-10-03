import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { chatAPI } from "../services/api";

const staticRooms = [
  { name: "🎉 Fun Zone", slug: "fun-zone" },
  { name: "📰 Web3 News", slug: "web3-news" },
  { name: "💘 Finding Love", slug: "finding-love" },
  { name: "👄 Gossip Lounge", slug: "gossip-lounge" },
  { name: "🎮 Gaming Chat", slug: "gaming-chat" },
  { name: "🖼️ NFT Showoff", slug: "nft-showoff" },
  { name: "🧠 Deep Discussions", slug: "deep-discussions" },
  { name: "🤝 Dev Collab", slug: "dev-collab" },
  { name: "🌍 Web3 Culture", slug: "web3-culture" },
  { name: "💬 General Vibes", slug: "general-vibes" },
  { name: "🤖 AI Assistant", slug: "ai-assistant" },
];

const ChatRoomList = () => {
  const [chatRooms, setChatRooms] = useState(staticRooms);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchRooms = async () => {
      const token = localStorage.getItem('walletalk_token');
      if (token) {
        setLoading(true);
        try {
          const response = await chatAPI.getRooms();
          if (response.data && response.data.length > 0) {
            setChatRooms(response.data.map(room => ({
              name: room.name,
              slug: room._id || room.slug
            })));
          }
        } catch (error) {
          console.error('Failed to fetch rooms:', error);
          // Keep static rooms if fetch fails
        } finally {
          setLoading(false);
        }
      }
    };

    fetchRooms();
  }, []);
  return (
    <div className="min-h-screen bg-[#0f172a] text-white px-6 py-24">
      <h2 className="text-4xl font-bold text-[#38bdf8] mb-10">
        Explore Chat Rooms
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {chatRooms.map((room) => (
          <Link
            to={`/chat/${room.slug}`}
            key={room.slug}
            className="bg-[#1a2233] p-6 rounded-lg border border-[#38bdf8] hover:bg-[#1ea8e6] hover:text-white hover:scale-105 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold">{room.name}</h3>
            <p className="text-sm text-[#94a3b8] mt-2 hover:text-white transition-colors duration-300">
              Tap to join the convo →
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ChatRoomList;

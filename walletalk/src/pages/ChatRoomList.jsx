import React from "react";
import { Link } from "react-router-dom";

const chatRooms = [
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
];

const ChatRoomList = () => {
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
            className="bg-[#1a2233] p-6 rounded-lg border border-[#38bdf8] hover:bg-[#1ea8e6] hover:text-white transition-all duration-300"
          >
            <h3 className="text-xl font-semibold">{room.name}</h3>
            <p className="text-sm text-[#94a3b8] mt-2">
              Tap to join the convo →
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ChatRoomList;

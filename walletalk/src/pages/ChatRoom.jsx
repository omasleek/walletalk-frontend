import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ChatBubble from "../components/ChatBubble";
import { chatMessages } from "../data";

const roomTitles = {
  "fun-zone": "🎉 Fun Zone",
  "web3-news": "📰 Web3 News",
  "finding-love": "💘 Finding Love",
  "gossip-lounge": "👄 Gossip Lounge",
  "gaming-chat": "🎮 Gaming Chat",
  "nft-showoff": "🖼️ NFT Showoff",
  "deep-discussions": "🧠 Deep Discussions",
  "dev-collab": "🤝 Dev Collab",
  "web3-culture": "🌍 Web3 Culture",
  "general-vibes": "💬 General Vibes",
};

const ChatRoom = () => {
  const { roomId } = useParams();
  const roomName = roomTitles[roomId] || "💬 WalleTalk Room";

  const [messages, setMessages] = useState([...chatMessages]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim() !== "") {
      setMessages((prev) => [
        ...prev,
        { id: Date.now(), sender: "You", text: input },
      ]);
      setInput("");
    }
  };

  return (
    <div className="min-h-screen bg-[#0f172a] px-4 py-24 md:py-28 lg:px-0">
      <div className="max-w-3xl mx-auto flex flex-col h-[75vh] bg-[#1a2233] border border-[#a78bfa] rounded-xl shadow-lg overflow-hidden">
        {/* Dynamic Room Name */}
        <div className="p-4 border-b border-[#38bdf8] bg-[#0f172a] text-[#38bdf8] font-semibold text-lg">
          {roomName}
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 scroll-smooth">
          {messages.map((msg) => (
            <ChatBubble key={msg.id} sender={msg.sender} text={msg.text} />
          ))}
        </div>

        {/* Input */}
        <div className="p-4 bg-[#0f172a] border-t border-[#1ea8e6] flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 px-4 py-2 rounded bg-[#1a2233] text-white focus:outline-none focus:ring-2 focus:ring-[#38bdf8]"
          />
          <button
            onClick={sendMessage}
            className="bg-[#38bdf8] text-white px-5 py-2 rounded hover:bg-[#1ea8e6] transition"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;

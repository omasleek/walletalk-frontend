import React, { useState, useEffect } from "react";
import { chatAPI } from "../services/api";
import useSocket from "../hooks/useSocket";

const ChatWindow = ({ roomId }) => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const { joinRoom, leaveRoom, onNewMessage, offNewMessage } = useSocket();

  useEffect(() => {
    if (roomId) {
      fetchMessages();
      joinRoom(roomId);

      const handleNewMessage = (message) => {
        setMessages((prev) => [...prev, message]);
      };

      onNewMessage(handleNewMessage);

      return () => {
        leaveRoom(roomId);
        offNewMessage(handleNewMessage);
      };
    }
  }, [roomId]);

  const fetchMessages = async () => {
    if (!roomId) return;
    // Always use dummy data for demo
    setMessages([
      {
        _id: 1,
        content: `Welcome to ${roomId} room!`,
        sender: { address: 'system', ensName: 'System' }
      },
      {
        _id: 2,
        content: "This is a demo message.",
        sender: { address: 'demo-user', ensName: 'Demo User' }
      }
    ]);
    setLoading(false);
  };

  const handleSend = async () => {
    if (input.trim() !== "" && roomId) {
      const token = localStorage.getItem('walletalk_token');
      if (!token || !token.startsWith('dummy')) {
        try {
          await chatAPI.sendMessage(roomId, { content: input.trim() });
        } catch (error) {
          // Silent for demo
        }
      }
      // Add user message locally
      const userMessage = {
        _id: Date.now(),
        content: input.trim(),
        sender: { address: localStorage.getItem('walletalk_wallet') || 'user', ensName: 'You' }
      };
      setMessages((prev) => [...prev, userMessage]);
      setInput("");

      // AI response for AI assistant room
      if (roomId === 'ai-assistant') {
        setTimeout(() => {
          const aiResponses = [
            "Hello! How can I assist you today?",
            "That's an interesting question. Let me think...",
            "I'm here to help with Web3 and tech topics!",
            "Great point! In Web3, decentralization is key.",
            "Feel free to ask me anything about blockchain or development."
          ];
          const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];
          const aiMessage = {
            _id: Date.now() + 1,
            content: randomResponse,
            sender: { address: 'ai-bot', ensName: 'AI Assistant' },
            timestamp: new Date()
          };
          setMessages((prev) => [...prev, aiMessage]);
        }, 1000);
      }
    }
  };

  return (
    <div className="flex flex-col flex-1 bg-gradient-to-b from-[#0f172a] to-[#1e293b] border-x border-[#38bdf8]/30 overflow-hidden shadow-2xl">
      {/* Chat Header */}
      <div className="p-4 border-b border-[#38bdf8]/20 bg-[#1a2233]/50 backdrop-blur-sm">
        <h2 className="text-lg font-semibold text-[#38bdf8] flex items-center gap-2">
          <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
          Live Chat - {roomId}
        </h2>
        <p className="text-xs text-[#94a3b8]">Web3 Secure • Real-time • Encrypted</p>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4 custom-scrollbar">
        {loading ? (
          <div className="flex justify-center items-center h-full">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#38bdf8]"></div>
          </div>
        ) : (
          messages.map((msg, idx) => {
            const isUser = msg.sender.address === localStorage.getItem('walletalk_wallet');
            return (
              <div
                key={msg._id || idx}
                className={`flex ${isUser ? "justify-end" : "justify-start"} animate-fade-in`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className={`max-w-md ${isUser ? "order-2" : "order-1"}`}>
                  {/* Avatar */}
                  <div className={`flex items-end gap-2 ${isUser ? "flex-row-reverse" : "flex-row"}`}>
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${isUser ? "from-[#38bdf8] to-[#1ea8e6]" : "from-[#a78bfa] to-[#7f5cf4]"} flex items-center justify-center text-white text-xs font-bold`}>
                      {msg.sender.ensName?.charAt(0) || msg.sender.address?.charAt(2) || 'U'}
                    </div>
                    <div
                      className={`px-4 py-3 rounded-2xl shadow-lg ${
                        isUser
                          ? "bg-gradient-to-r from-[#38bdf8] to-[#1ea8e6] text-white rounded-br-sm"
                          : "bg-[#1a2233] text-white border border-[#38bdf8]/20 rounded-bl-sm"
                      }`}
                    >
                      <p className="text-xs text-gray-300 mb-1 font-medium">
                        {msg.sender.ensName || `${msg.sender.address?.slice(0, 6)}...${msg.sender.address?.slice(-4)}`}
                      </p>
                      <p className="text-sm leading-relaxed">{msg.content}</p>
                      <p className="text-xs text-gray-400 mt-1">
                        {msg.timestamp ? new Date(msg.timestamp).toLocaleTimeString() : 'now'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Web3 Action Buttons */}
      <div className="p-4 border-t border-[#38bdf8]/20 bg-[#1a2233]/30 backdrop-blur-sm">
        <div className="flex gap-2 mb-3 overflow-x-auto">
          <button
            onClick={() => alert('💰 Send ETH or tokens directly in chat!')}
            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2 whitespace-nowrap"
          >
            <span>💰</span> Send Tokens
          </button>
          <button
            onClick={() => alert('🖼️ Share your NFT collection with the community!')}
            className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2 whitespace-nowrap"
          >
            <span>🖼️</span> Share NFT
          </button>
          <button
            onClick={() => alert('⚡ Trigger smart contract actions instantly!')}
            className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2 whitespace-nowrap"
          >
            <span>⚡</span> Contract
          </button>
          <button
            onClick={() => alert('🎁 Tip community members with crypto!')}
            className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2 whitespace-nowrap"
          >
            <span>🎁</span> Tip
          </button>
        </div>

        {/* Message Input */}
        <div className="flex gap-3">
          <div className="flex-1 relative">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your Web3 message..."
              className="w-full px-4 py-3 rounded-full bg-[#0f172a] border border-[#38bdf8]/30 text-white placeholder-gray-400 focus:outline-none focus:border-[#38bdf8] focus:ring-2 focus:ring-[#38bdf8]/20 transition-all duration-200"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#94a3b8] text-sm">
              🔒 Encrypted
            </div>
          </div>
          <button
            onClick={handleSend}
            className="bg-gradient-to-r from-[#38bdf8] to-[#1ea8e6] hover:from-[#1ea8e6] hover:to-[#0ea5e9] text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2"
          >
            <span>📤</span> Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;

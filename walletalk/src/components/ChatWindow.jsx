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
    try {
      setLoading(true);
      const response = await chatAPI.getMessages(roomId);
      setMessages(response.data);
    } catch (error) {
      console.error("Error fetching messages:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSend = async () => {
    if (input.trim() !== "" && roomId) {
      try {
        await chatAPI.sendMessage(roomId, { content: input.trim() });
        setInput("");
      } catch (error) {
        console.error("Error sending message:", error);
      }
    }
  };

  return (
    <div className="flex flex-col flex-1 h-[60vh] md:h-[70vh] lg:h-[80vh] bg-[#0f172a] border-x border-[#1ea8e6] overflow-hidden">
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {loading ? (
          <p className="text-center text-gray-400">Loading messages...</p>
        ) : (
          messages.map((msg, idx) => {
            const isUser = msg.sender.address === localStorage.getItem('walletalk_wallet'); // Assuming wallet address is stored
            return (
              <div
                key={msg._id || idx}
                className={`flex ${isUser ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-sm px-4 py-2 rounded-xl ${
                    isUser ? "bg-[#38bdf8] text-white" : "bg-white text-[#0f172a]"
                  }`}
                >
                  <p className="font-bold text-sm mb-1">
                    {msg.sender.ensName || msg.sender.address?.slice(0, 6) + "..."}
                  </p>
                  <p>{msg.content}</p>
                </div>
              </div>
            );
          })
        )}
      </div>

      <div className="p-4 flex gap-2 border-t border-[#1ea8e6] bg-[#0f172a]">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Type a message..."
          className="flex-1 px-4 py-2 rounded bg-[#1a2233] text-white focus:outline-none"
        />
        <button
          onClick={handleSend}
          className="bg-[#38bdf8] hover:bg-[#1ea8e6] text-white font-semibold px-4 py-2 rounded"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;

import React, { useState } from "react";
import { messages } from "../data";

const ChatWindow = () => {
  const [input, setInput] = useState("");
  const [chat, setChat] = useState(messages);

  const handleSend = () => {
    if (input.trim() !== "") {
      const newMsg = {
        sender: "You",
        text: input,
      };
      setChat([...chat, newMsg]);
      setInput("");
    }
  };

  return (
    <div className="flex flex-col flex-1 h-[80vh] bg-[#0f172a] border-x border-[#1ea8e6] overflow-hidden">
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {chat.map((msg, idx) => {
          const isUser = msg.sender === "You";
          return (
            <div
              key={idx}
              className={`flex ${isUser ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-sm px-4 py-2 rounded-xl ${
                  isUser ? "bg-[#38bdf8] text-white" : "bg-white text-[#0f172a]"
                }`}
              >
                <p className="font-bold text-sm mb-1">{msg.sender}</p>
                <p>{msg.text}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="p-4 flex gap-2 border-t border-[#1ea8e6] bg-[#0f172a]">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
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

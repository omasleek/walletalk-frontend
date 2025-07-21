import React from "react";

const ChatBubble = ({ sender, text }) => {
  const isUser = sender === "You";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-sm px-4 py-2 rounded-lg ${
          isUser ? "bg-[#38bdf8] text-white" : "bg-white text-[#0f172a]"
        }`}
      >
        <p className="font-bold text-sm">{sender}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ChatBubble;

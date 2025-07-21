import React, { useState } from "react";

const CreateRoom = () => {
  const [roomName, setRoomName] = useState("");
  const [description, setDescription] = useState("");

  const handleCreate = () => {
    console.log("Creating room:", roomName, description);
    // Connect to backend endpoint here
  };

  return (
    <div className="max-w-lg mx-auto mt-10 bg-[#0f172a] p-6 rounded-xl shadow-lg text-white">
      <h2 className="text-[#a78bfa] text-2xl font-bold mb-4">
        Create Chat Room
      </h2>
      <input
        type="text"
        placeholder="Room Name"
        value={roomName}
        onChange={(e) => setRoomName(e.target.value)}
        className="w-full mb-4 px-4 py-2 rounded bg-[#1a2233] focus:outline-none"
      />
      <textarea
        placeholder="Room Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full mb-4 px-4 py-2 rounded bg-[#1a2233] focus:outline-none"
      />
      <button
        onClick={handleCreate}
        className="w-full bg-[#38bdf8] hover:bg-[#1ea8e6] py-2 rounded font-semibold"
      >
        Create Room
      </button>
    </div>
  );
};

export default CreateRoom;

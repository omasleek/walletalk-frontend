import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { chatAPI } from "../services/api";

const RoomListSidebar = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newRoomName, setNewRoomName] = useState("");
  const [newRoomDesc, setNewRoomDesc] = useState("");

  useEffect(() => {
    fetchRooms();
  }, []);

  const fetchRooms = async () => {
    // Always use dummy data for demo
    setRooms([]);
    setLoading(false);
  };

  const handleCreateRoom = async (e) => {
    e.preventDefault();
    if (!newRoomName.trim()) return;

    try {
      await chatAPI.createRoom({
        name: newRoomName.trim(),
        description: newRoomDesc.trim(),
      });
      setNewRoomName("");
      setNewRoomDesc("");
      setShowCreateForm(false);
      fetchRooms(); // Refresh list
    } catch (error) {
      console.error("Error creating room:", error);
    }
  };

  return (
    <div className="bg-[#0f172a] w-64 p-4 border-r border-[#1ea8e6] hidden lg:flex flex-col space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-[#a78bfa] text-xl font-bold">Rooms</h2>
        <button
          onClick={() => setShowCreateForm(!showCreateForm)}
          className="bg-[#38bdf8] hover:bg-[#1ea8e6] text-white px-2 py-1 rounded text-sm"
        >
          +
        </button>
      </div>

      {showCreateForm && (
        <form onSubmit={handleCreateRoom} className="space-y-2">
          <input
            type="text"
            placeholder="Room name"
            value={newRoomName}
            onChange={(e) => setNewRoomName(e.target.value)}
            className="w-full px-2 py-1 rounded bg-[#1a2233] text-white text-sm"
            required
          />
          <input
            type="text"
            placeholder="Description (optional)"
            value={newRoomDesc}
            onChange={(e) => setNewRoomDesc(e.target.value)}
            className="w-full px-2 py-1 rounded bg-[#1a2233] text-white text-sm"
          />
          <div className="flex gap-2">
            <button
              type="submit"
              className="bg-[#38bdf8] hover:bg-[#1ea8e6] text-white px-2 py-1 rounded text-sm"
            >
              Create
            </button>
            <button
              type="button"
              onClick={() => setShowCreateForm(false)}
              className="bg-gray-600 hover:bg-gray-500 text-white px-2 py-1 rounded text-sm"
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      <div className="space-y-2">
        {loading ? (
          <p className="text-gray-400 text-sm">Loading rooms...</p>
        ) : (
          rooms.map((room) => (
            <Link
              key={room._id}
              to={`/chat/${room._id}`}
              className="block p-2 rounded-lg hover:bg-[#1a2233] text-white"
            >
              <p className="font-semibold text-[#38bdf8]">{room.name}</p>
              <p className="text-xs text-gray-400">{room.description}</p>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default RoomListSidebar;

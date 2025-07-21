import React from "react";
import Pages from "./pages/Pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Blog from "./pages/Blog";
import ChatRoomList from "./pages/ChatRoomList";
import ChatRoom from "./pages/ChatRoom";
import AdminDashboard from "./pages/AdminDashboard";
import CreateRoom from "./pages/CreateRoom";
import WalleTalkChatBoard from "./pages/WalleTalkChatBoard";
const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/chat/:roomId" element={<WalleTalkChatBoard />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/create-room" element={<CreateRoom />} />
          <Route path="/chat/:roomId/admin" element={<AdminDashboard />} />
          <Route path="/chat/:roomId" element={<ChatRoom />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/chatrooms" element={<ChatRoomList />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;


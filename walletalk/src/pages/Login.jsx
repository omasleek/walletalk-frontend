import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc"; // Google icon

const Login = () => {
  const [showUsernameForm, setShowUsernameForm] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Google login handler
  const loginWithGoogle = async () => {
    try {
      console.log("Google login triggered");
      // TODO: Add Firebase or OAuth logic here
    } catch (err) {
      console.error("Google login failed:", err);
    }
  };

  // Wallet connection handler
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        console.log("Connected wallet:", accounts[0]);
        // TODO: store account in global state or session
      } catch (err) {
        console.error("User rejected connection:", err);
      }
    } else {
      alert("MetaMask not found. Please install it to continue.");
    }
  };

  // Username login submit (simulated)
  const handleUsernameLogin = (e) => {
    e.preventDefault();
    console.log("Logging in with:", username, password);
    // TODO: send to backend for authentication
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-white flex flex-col px-6 py-10 sm:px-12 md:px-24 lg:px-32">
      <div className="flex items-center justify-center min-h-screen bg-[#0f172a] px-6 py-10 sm:px-12 md:px-24 lg:px-32">
        <div className="w-full max-w-xl space-y-8 bg-[#1a2233] p-10 rounded-lg border border-[#38bdf8] shadow-lg">
          <h2 className="text-3xl font-bold text-[#a78bfa]">
            Login to WalleTalk
          </h2>

          <div className="space-y-6">
            {/* Google Login */}
            <button
              onClick={loginWithGoogle}
              className="w-full px-4 py-3 flex items-center justify-center gap-3 bg-white text-[#0f172a] rounded hover:bg-[#f3f3f3] border"
            >
              <FcGoogle size={20} />
              Login with Google 🌐
            </button>

            {/* Username Login */}
            <button
              onClick={() => setShowUsernameForm(!showUsernameForm)}
              className="w-full px-4 py-3 bg-[#7f5cf4] text-white rounded hover:bg-[#a78bfa] transition"
            >
              Login with Username 🔐
            </button>

            {/* Wallet Login */}
            <button
              onClick={connectWallet}
              className="w-full px-4 py-3 border border-[#38bdf8] text-[#38bdf8] rounded hover:bg-[#1a2233] transition"
            >
              Login with Wallet Address 💳
            </button>
          </div>

          {/* Username Form */}
          {showUsernameForm && (
            <form onSubmit={handleUsernameLogin} className="space-y-4 pt-6">
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                className="w-full px-4 py-2 rounded bg-[#0f172a] border border-[#94a3b8] text-white"
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full px-4 py-2 rounded bg-[#0f172a] border border-[#94a3b8] text-white"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-[#38bdf8] text-white rounded hover:bg-[#1ea8e6] transition"
              >
                Submit 🔓
              </button>
            </form>
          )}

          {/* Footer */}
          <p className="text-[#94a3b8] text-sm pt-2 text-center">
            Don’t have an account?{" "}
            <Link to="/register" className="text-[#a78bfa] hover:underline">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

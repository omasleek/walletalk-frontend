import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc"; // Google icon
import useWallet from "../hooks/useWallet";
import { shortenAddress } from "../utils/web3Utils";
import { userAPI } from "../services/api";

const Login = () => {
  const [showUsernameForm, setShowUsernameForm] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [authLoading, setAuthLoading] = useState(false);
  const { account, connected, connectWallet, signer } = useWallet();
  const navigate = useNavigate();

  useEffect(() => {
    if (connected && account && !localStorage.getItem('walletalk_token')) {
      handleWalletAuth();
    }
  }, [connected, account]);

  const handleWalletAuth = async () => {
    if (!account || !signer) return;

    try {
      setAuthLoading(true);

      // Request nonce
      const nonceResponse = await userAPI.requestNonce(account);
      const { nonce } = nonceResponse.data;

      // Sign the message
      const message = nonce;
      const signature = await signer.signMessage(message);

      // Verify signature
      const verifyResponse = await userAPI.verifySignature({
        walletAddress: account,
        signature,
        nonce,
      });

      const { token } = verifyResponse.data;

      // Store token and wallet
      localStorage.setItem('walletalk_token', token);
      localStorage.setItem('walletalk_wallet', account);

      // Redirect to home
      navigate('/');

    } catch (error) {
      console.error('Wallet auth failed:', error);
      alert('Authentication failed. Please try again.');
    } finally {
      setAuthLoading(false);
    }
  };

  // Google login handler
  const loginWithGoogle = async () => {
    try {
      console.log("Google login triggered");
      // TODO: Add Firebase or OAuth logic here
    } catch (err) {
      console.error("Google login failed:", err);
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
              disabled={connected || authLoading}
              className={`w-full px-4 py-3 border border-[#38bdf8] rounded transition ${
                connected || authLoading
                  ? "bg-[#38bdf8] text-white cursor-not-allowed"
                  : "text-[#38bdf8] hover:bg-[#1a2233]"
              }`}
            >
              {authLoading
                ? "Authenticating..."
                : connected
                ? `Connected: ${shortenAddress(account)} ✅`
                : "Login with Wallet Address 💳"}
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

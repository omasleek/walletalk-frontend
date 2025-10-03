import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import useWallet from "../hooks/useWallet";
import { shortenAddress } from "../utils/web3Utils";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { account, connected } = useWallet();
  const location = useLocation();

  const activeLink =
    "bg-yellow-300 text-black px-3 py-2 rounded transition duration-300";
  const defaultLink =
    "text-[#38bdf8] hover:text-white px-3 py-2 transition duration-300";

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0f172a]/95 backdrop-blur-md px-6 py-3 sm:px-8 lg:px-16 shadow-lg border-b border-[#38bdf8]/20">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo - Left */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="WalleTalk Logo"
            className="w-8 sm:w-10 md:w-12 lg:w-14 h-auto"
          />
          <span className="text-xl font-bold text-[#38bdf8] hidden sm:block">WalleTalk</span>
        </div>

        {/* Wallet Display */}
        {connected && (
          <div className="hidden md:flex items-center gap-2 text-[#38bdf8] text-sm">
            <span>🔗</span>
            <span>{shortenAddress(account)}</span>
          </div>
        )}

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 font-medium text-sm">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? activeLink : defaultLink
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive ? activeLink : defaultLink
              }
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/chatrooms"
              className={({ isActive }) =>
                isActive ? activeLink : defaultLink
              }
            >
              Chat Rooms
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive ? activeLink : defaultLink
              }
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive ? activeLink : defaultLink
              }
            >
              Profile
            </NavLink>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-[#a78bfa] text-xl font-bold"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Animated Mobile Dropdown */}
      <div
        className={`absolute left-0 top-full w-full bg-[#0f172a] transition-all duration-300 ease-in-out overflow-hidden ${
          menuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-4 px-6 py-4 font-medium text-base">
          <li>
            <NavLink
              to="/"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive ? activeLink : defaultLink
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive ? activeLink : defaultLink
              }
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/chatrooms"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive ? activeLink : defaultLink
              }
            >
              Chat Rooms
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive ? activeLink : defaultLink
              }
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive ? activeLink : defaultLink
              }
            >
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/chat/room123"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive ? activeLink : defaultLink
              }
            >
              Chat
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

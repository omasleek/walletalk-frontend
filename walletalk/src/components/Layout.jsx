import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Cursor from "./Cursor";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white relative">
      <div className="animated-bg"></div>
      <Cursor />
      <Navbar />
      <main className="p-4 sm:p-8 lg:p-12 relative z-10">{children}</main>
      <Footer />
    </div>
  );
};


export default Layout;

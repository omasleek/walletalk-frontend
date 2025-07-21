import React from "react";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="mt-12 bg-[#0f172a] text-white border-t border-[#1ea8e6] py-8 px-6">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="space-y-2 text-sm">
          <p>
            📧 Email:{" "}
            <a
              href="mailto:support@walletalk.xyz"
              className="text-[#38bdf8] hover:underline"
            >
              support@walletalk.xyz
            </a>
          </p>
          <p>
            🌐 Website:{" "}
            <a
              href="https://walletalk.xyz"
              className="text-[#38bdf8] hover:underline"
            >
              walletalk.xyz
            </a>
          </p>
          <p>
            📞 Phone:{" "}
            <a
              href="tel:+2348001234567"
              className="text-[#38bdf8] hover:underline"
            >
              +234 800 123 4567
            </a>
          </p>
        </div>

        {/* Social Links with Icons */}
        <div className="space-y-3 text-sm">
          <p className="font-semibold text-[#a78bfa]">Connect with us</p>
          <div className="flex gap-4 text-[#38bdf8] text-xl">
            <a
              href="https://twitter.com/walletalk"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 hover:text-[#1DA1F2] transition-transform duration-300"
            >
              <FaTwitter />
            </a>
            <a
              href="https://facebook.com/walletalk"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 hover:text-[#4267B2] transition-transform duration-300"
            >
              <FaFacebook />
            </a>
            <a
              href="https://instagram.com/walletalk"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 hover:text-[#E4405F] transition-transform duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com/company/walletalk"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 hover:text-[#0A66C2] transition-transform duration-300"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

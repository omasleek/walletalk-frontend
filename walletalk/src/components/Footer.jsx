import React from "react";

const Footer = () => {
  return (
    <footer className="mt-12 bg-[#0f172a] text-white border-t border-[#1ea8e6] py-8 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Contact Info */}
        <div className="space-y-2 text-sm">
          <p>
            📧 Email:{" "}
            <a
              href="mailto:omachilda.dev@gmail.com"
              className="text-[#38bdf8] hover:underline"
            >
              omachilda.dev@gmail.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

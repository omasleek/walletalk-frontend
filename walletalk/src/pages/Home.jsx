import React from "react";
import FeatureCard from "../components/FeatureCard";
import StatWidget from "../components/StatWidget";
import TestimonialBlock from "../components/TestimonialBlock";
import { features, stats, testimonials } from "../data";
import { Link } from "react-router-dom";
import Image from "../assets/walletalk-hero.png";

const Home = () => {
  return (
    <div className="bg-[#0f172a] text-white min-h-screen">
      {/* Header */}

      {/* Hero Section with Image */}
      <section className="flex flex-col lg:flex-row items-center lg:items-start gap-10 px-6 md:px-12 lg:px-20 py-20 md:py-24 lg:py-32 max-w-7xl mx-auto">
        {/* BIG Hero Image */}
        <div className="w-full lg:w-3/5">
          <img
            src={Image}
            alt="WalleTalk Interface"
            className=" w-full object-cover"
          />
        </div>

        {/* Text Content (aligned right) */}
        <div className="w-full lg:w-2/5 text-left space-y-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#38bdf8]">
            Join a Global Network of Web3 Thinkers, Builders & Explorers 🌍
          </h2>
          <p className="text-[#94a3b8] text-base md:text-lg">
            Real-time chat powered by wallets, Web3, and a rich community.
            Whether you're from Metaverse or Universe, you belong here.
          </p>

          {/* 👇 Dual CTA Buttons */}
          <div className="flex gap-4 flex-wrap">
            <Link to="/chat/room123">
              <button className="px-6 py-3 bg-[#d4b710] text-white rounded border border-[#38bdf8] hover:bg-[#7f5cf4] hover:border-[#7f5cf4]">
                Start Chatting Now 
              </button>
            </Link>

            <Link to="/login">
              <button className="px-6 py-3 text-[#38bdf8] border-2 border-[#a78bfa] rounded hover:bg-[#1a2233]">
                Get Started 
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 py-10 px-6 border-y border-[#1ea8e6]">
        {stats.map((stat, i) => (
          <StatWidget key={i} title={stat.title} value={stat.value} />
        ))}
      </section>

      {/* Features */}
      <section className="py-16 px-6 max-w-6xl mx-auto text-left">
        <h3 className="text-3xl font-semibold text-[#a78bfa] mb-8 animate-fade-in">
          Core Features
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feat, i) => (
            <div key={i} className="animate-slide-up" style={{ animationDelay: `${i * 0.2}s` }}>
              <FeatureCard
                icon={feat.icon}
                title={feat.title}
                desc={feat.desc}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Demo */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-left">
        <h3 className="text-3xl font-semibold text-[#a78bfa] mb-8">
          Try It Out: Live Demo 🚀
        </h3>
        <div className="bg-[#1a2233] p-8 rounded-lg border border-[#38bdf8]">
          <p className="text-[#94a3b8] mb-4">Experience WalleTalk's features in action:</p>
          <div className="grid md:grid-cols-2 gap-4">
            <button
              onClick={() => alert('Wallet connection demo!')}
              className="bg-[#38bdf8] hover:bg-[#1ea8e6] text-white px-4 py-2 rounded transition"
            >
              Connect Wallet
            </button>
            <button
              onClick={() => alert('AI Assistant activated!')}
              className="bg-[#a78bfa] hover:bg-[#7f5cf4] text-white px-4 py-2 rounded transition"
            >
              Chat with AI
            </button>
          </div>
        </div>
      </section>

      {/* Advanced Web3 Features */}
      <section className="py-16 px-6 max-w-7xl mx-auto text-left">
        <h3 className="text-3xl font-semibold text-[#38bdf8] mb-8">
          Advanced Web3 Features
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-[#1a2233] p-6 rounded-lg border border-[#38bdf8]">
            <h4 className="text-xl font-semibold text-[#a78bfa] mb-2">🔒 Anti-Spam & Privacy</h4>
            <ul className="text-sm text-[#94a3b8] space-y-1">
              <li>• Proof-of-Activity Gating</li>
              <li>• Message Requests</li>
              <li>• Stealth Mode</li>
            </ul>
          </div>
          <div className="bg-[#1a2233] p-6 rounded-lg border border-[#38bdf8]">
            <h4 className="text-xl font-semibold text-[#a78bfa] mb-2">🆔 Web3 Identity</h4>
            <ul className="text-sm text-[#94a3b8] space-y-1">
              <li>• ENS Integration</li>
              <li>• NFT Avatars</li>
              <li>• Cross-App Inbox</li>
            </ul>
          </div>
          <div className="bg-[#1a2233] p-6 rounded-lg border border-[#38bdf8]">
            <h4 className="text-xl font-semibold text-[#a78bfa] mb-2">💰 Built-in Actions</h4>
            <ul className="text-sm text-[#94a3b8] space-y-1">
              <li>• Send Tokens in Chat</li>
              <li>• NFT Sharing</li>
              <li>• Smart Contract Triggers</li>
            </ul>
          </div>
          <div className="bg-[#1a2233] p-6 rounded-lg border border-[#38bdf8]">
            <h4 className="text-xl font-semibold text-[#a78bfa] mb-2">🔐 Security & Control</h4>
            <ul className="text-sm text-[#94a3b8] space-y-1">
              <li>• Self-Destruct Messages</li>
              <li>• Multi-Wallet Linking</li>
              <li>• On-Chain Moderation</li>
            </ul>
          </div>
          <div className="bg-[#1a2233] p-6 rounded-lg border border-[#38bdf8]">
            <h4 className="text-xl font-semibold text-[#a78bfa] mb-2">👥 Community Features</h4>
            <ul className="text-sm text-[#94a3b8] space-y-1">
              <li>• Token-Gated Groups</li>
              <li>• Voice & Video Calls</li>
              <li>• Community Tipping</li>
            </ul>
          </div>
          <div className="bg-[#1a2233] p-6 rounded-lg border border-[#38bdf8]">
            <h4 className="text-xl font-semibold text-[#a78bfa] mb-2">💼 Monetization</h4>
            <ul className="text-sm text-[#94a3b8] space-y-1">
              <li>• Freemium Model</li>
              <li>• Transaction Fees</li>
              <li>• Web3-Native Ads</li>
            </ul>
          </div>
          <div className="bg-[#1a2233] p-6 rounded-lg border border-[#38bdf8]">
            <h4 className="text-xl font-semibold text-[#a78bfa] mb-2">🔧 Developer Tools</h4>
            <ul className="text-sm text-[#94a3b8] space-y-1">
              <li>• B2B API Integration</li>
              <li>• Push Notifications</li>
              <li>• Cross-Platform UX</li>
            </ul>
          </div>
          <div className="bg-[#1a2233] p-6 rounded-lg border border-[#38bdf8]">
            <h4 className="text-xl font-semibold text-[#a78bfa] mb-2">🤖 AI Assistant</h4>
            <ul className="text-sm text-[#94a3b8] space-y-1">
              <li>• Chat with AI</li>
              <li>• Scam Detection</li>
              <li>• Transaction Explanations</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-left">
        <h3 className="text-2xl font-semibold text-[#38bdf8] mb-8">
          Voices From the Devverse 💬
        </h3>
        <div className="space-y-6">
          {testimonials.map((t, i) => (
            <TestimonialBlock key={i} name={t.name} quote={t.quote} />
          ))}
        </div>
      </section>

      {/* CTA Footer */}
      <footer className="bg-[#1a2233] py-8 px-6 text-left">
        <p className="text-lg text-white mb-4">
          Join thousands building the future — together
        </p>
        <Link to="/chat/room123">
          <button className="px-6 py-2 bg-[#38bdf8] text-white rounded hover:bg-[#1ea8e6]">
            🚀 Jump Into Chat
          </button>
        </Link>
      </footer>
    </div>
  );
};

export default Home;

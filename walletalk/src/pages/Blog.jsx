// src/pages/Blog.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const Blog = () => {
  const navigate = useNavigate();

  const blogs = [
    {
      id: 1,
      title: "The Future of Web3: Decentralized Social Networks",
      excerpt: "Explore how blockchain is revolutionizing social media, giving users control over their data and fostering true digital ownership.",
      date: "2023-10-01",
      category: "Web3"
    },
    {
      id: 2,
      title: "React Best Practices for Scalable Applications",
      excerpt: "Learn essential tips and tricks for building maintainable React apps, from component architecture to state management.",
      date: "2023-09-15",
      category: "Tech"
    },
    {
      id: 3,
      title: "NFTs and Digital Art: A New Era of Creativity",
      excerpt: "Discover how NFTs are empowering artists and collectors in the digital art world, with real-world success stories.",
      date: "2023-08-20",
      category: "Web3"
    },
    {
      id: 4,
      title: "Building Secure Smart Contracts with Solidity",
      excerpt: "A comprehensive guide to writing secure smart contracts, covering common vulnerabilities and best practices.",
      date: "2023-07-10",
      category: "Tech"
    },
    {
      id: 5,
      title: "The Rise of DeFi: Decentralized Finance Explained",
      excerpt: "Understand the basics of decentralized finance and how it's changing traditional banking systems.",
      date: "2023-06-05",
      category: "Web3"
    },
    {
      id: 6,
      title: "Optimizing Performance in Modern Web Apps",
      excerpt: "Techniques for improving load times and user experience in contemporary web applications.",
      date: "2023-05-12",
      category: "Tech"
    },
    {
      id: 7,
      title: "Cryptocurrency Mining: Pros and Cons",
      excerpt: "An in-depth look at cryptocurrency mining, its environmental impact, and future sustainability.",
      date: "2023-04-18",
      category: "Web3"
    },
    {
      id: 8,
      title: "Introduction to TypeScript for JavaScript Developers",
      excerpt: "Why TypeScript is becoming essential for modern web development and how to get started.",
      date: "2023-03-22",
      category: "Tech"
    },
    {
      id: 9,
      title: "DAO Governance: How Decentralized Autonomous Organizations Work",
      excerpt: "Understanding the mechanics of DAOs and their role in decentralized decision-making.",
      date: "2023-02-14",
      category: "Web3"
    },
    {
      id: 10,
      title: "Progressive Web Apps: The Future of Mobile Web",
      excerpt: "Building PWAs that offer native app-like experiences on the web.",
      date: "2023-01-08",
      category: "Tech"
    },
    {
      id: 11,
      title: "Blockchain Interoperability: Connecting Different Networks",
      excerpt: "Exploring solutions for seamless communication between various blockchain ecosystems.",
      date: "2022-12-01",
      category: "Web3"
    },
    {
      id: 12,
      title: "GraphQL vs REST: Choosing the Right API Architecture",
      excerpt: "Comparing GraphQL and REST APIs for efficient data fetching in modern applications.",
      date: "2022-11-15",
      category: "Tech"
    },
    {
      id: 13,
      title: "Web3 Gaming: Play-to-Earn Revolution",
      excerpt: "How blockchain is transforming the gaming industry with true ownership and rewards.",
      date: "2022-10-20",
      category: "Web3"
    },
    {
      id: 14,
      title: "Microservices Architecture: Benefits and Challenges",
      excerpt: "Breaking down monolithic applications into scalable microservices.",
      date: "2022-09-10",
      category: "Tech"
    },
    {
      id: 15,
      title: "Zero-Knowledge Proofs: Privacy in Blockchain",
      excerpt: "How ZKPs enable private transactions and verifiable computations on blockchain.",
      date: "2022-08-05",
      category: "Web3"
    },
    {
      id: 16,
      title: "Serverless Computing: Pros, Cons, and Use Cases",
      excerpt: "Exploring serverless architecture for cost-effective and scalable applications.",
      date: "2022-07-12",
      category: "Tech"
    },
    {
      id: 17,
      title: "Layer 2 Solutions: Scaling Ethereum",
      excerpt: "Understanding rollups, sidechains, and other L2 technologies for faster, cheaper transactions.",
      date: "2022-06-18",
      category: "Web3"
    },
    {
      id: 18,
      title: "CSS Grid vs Flexbox: When to Use Which",
      excerpt: "Mastering modern CSS layout techniques for responsive web design.",
      date: "2022-05-22",
      category: "Tech"
    },
    {
      id: 19,
      title: "Metaverse Development: Building Virtual Worlds",
      excerpt: "Tools and frameworks for creating immersive metaverse experiences.",
      date: "2022-04-14",
      category: "Web3"
    },
    {
      id: 20,
      title: "DevOps Best Practices for Web Developers",
      excerpt: "Integrating development and operations for faster, more reliable deployments.",
      date: "2022-03-08",
      category: "Tech"
    },
    {
      id: 21,
      title: "Stablecoins: Bridging Crypto and Traditional Finance",
      excerpt: "How stablecoins provide price stability in the volatile crypto market.",
      date: "2022-02-01",
      category: "Web3"
    },
    {
      id: 22,
      title: "React Hooks: Advanced Patterns and Use Cases",
      excerpt: "Deep dive into custom hooks and advanced React patterns.",
      date: "2022-01-15",
      category: "Tech"
    },
    {
      id: 23,
      title: "Decentralized Identity: Self-Sovereign Digital Identities",
      excerpt: "How blockchain enables users to own and control their digital identities.",
      date: "2021-12-20",
      category: "Web3"
    },
    {
      id: 24,
      title: "WebAssembly: Running High-Performance Code in Browsers",
      excerpt: "Leveraging WebAssembly for near-native performance in web applications.",
      date: "2021-11-10",
      category: "Tech"
    },
    {
      id: 25,
      title: "Cross-Chain Bridges: Connecting Blockchain Ecosystems",
      excerpt: "Enabling asset transfers and interoperability between different blockchains.",
      date: "2021-10-05",
      category: "Web3"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0f172a] text-white pt-16">
      {/* Back Button */}
      <div className="px-6 py-4">
        <button
          onClick={() => navigate('/')}
          className="text-[#38bdf8] hover:text-white transition duration-300 flex items-center gap-2"
        >
          ← Back to Home
        </button>
      </div>

      <div className="px-6 py-8">
        <h2 className="text-4xl font-bold text-[#38bdf8] mb-10">
          WalleTalk Blog 📝
        </h2>
        <p className="text-[#94a3b8] text-lg mb-8">
          Stay updated with the latest in tech and Web3 innovations.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-[#1a2233] p-6 rounded-lg border border-[#38bdf8] hover:border-[#a78bfa] transition duration-300">
              <div className="flex justify-between items-start mb-4">
                <span className="text-sm text-[#94a3b8]">{blog.date}</span>
                <span className="text-xs bg-[#38bdf8] text-black px-2 py-1 rounded">{blog.category}</span>
              </div>
              <h3 className="text-xl font-semibold text-[#a78bfa] mb-3">{blog.title}</h3>
              <p className="text-[#94a3b8] text-sm">{blog.excerpt}</p>
              <button className="mt-4 text-[#38bdf8] hover:text-white transition">Read More →</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;

# WalleTalk - Web3 Wallet-Only Chat App

## Overview

WalleTalk is the "WhatsApp of Web3" - a revolutionary chat application that brings secure, decentralized communication to the Web3 ecosystem. Unlike traditional messaging apps, WalleTalk uses wallet-based authentication, enabling users to chat using their crypto identities without relying on phone numbers or emails.

## Features

### Core Features
- **Wallet-Based Login**: Connect using MetaMask, Coinbase Wallet, or any Web3 wallet
- **ENS Integration**: Chat with human-readable .eth names instead of wallet addresses
- **NFT Avatars**: Set profile pictures using NFTs you own
- **Token Transfers**: Send crypto directly within chat conversations
- **Token-Gated Rooms**: Access exclusive communities by holding specific tokens
- **File Sharing**: Send files, voice notes, and NFTs seamlessly
- **Self-Destruct Messages**: Time-limited messages for enhanced privacy
- **Voice & Video Calls**: Encrypted wallet-based calls
- **Moderation Tools**: Community governance and safety features

### Anti-Spam & Privacy
- **Proof-of-Activity / Token Gating**: Only wallets with ETH balance, transaction history, or community tokens can message
- **Message Requests**: Like Instagram DMs - sender requests appear first, recipient accepts/declines
- **Stealth Mode**: Hide wallet ID behind one-time session aliases
- **On-Chain Moderation**: Community-governed blocklists to stop scams/spam
- **Multi-Wallet Linking**: Link hot + cold wallets, choose visibility

### Web3 Identity & Interoperability
- **ENS / Unstoppable Domains**: Chat with alice.eth instead of 0x123...
- **NFT Avatar & Profile**: Set profile pictures using owned NFTs
- **Cross-App Inbox (XMTP)**: Portable messages across different dapps

### Built-in Web3 Actions
- **Send Tokens in Chat**: Inline payments, tips, split bills, send gas
- **NFT Sharing**: Transfer or showcase NFTs directly in chat
- **Smart Contract Triggers**: Vote in DAO polls inside chat

### UX & Extra Layer
- **Group & Community Chats**: Token-gated group chats (e.g., only BAYC holders)
- **Voice & Video Calls**: Encrypted wallet-based calls
- **Cross-Platform**: Web + Mobile support
- **Notifications**: Push notifications without requiring email

### Security & Privacy
- All communications are end-to-end encrypted
- Wallet signatures for authentication
- No centralized data storage (IPFS integration planned)
- Community-driven moderation
- Regular security audits

## Technology Stack

### Frontend
- **React 19**: Modern React with hooks and concurrent features
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library for smooth interactions
- **React Router**: Client-side routing
- **Redux Toolkit**: State management
- **Socket.io Client**: Real-time communication
- **Axios**: HTTP client for API calls
- **Formik & Yup**: Form handling and validation

### Web3 Integration
- **Ethers.js**: Ethereum blockchain interaction
- **Web3Modal**: Wallet connection interface
- **ENS Resolution**: Human-readable names
- **NFT Metadata**: Avatar and asset display

### Backend
- **Node.js/Express**: RESTful API server
- **MongoDB**: Document database
- **Socket.io**: Real-time messaging
- **JWT**: Authentication tokens
- **Mongoose**: MongoDB ODM
- **bcryptjs**: Password hashing
- **ethers.js**: Web3 utilities

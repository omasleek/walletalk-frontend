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

## Project Structure

```
walletalk/
├── public/
│   ├── _redirects
│   └── vite.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Cursor.jsx          # Custom cursor animation
│   │   ├── Layout.jsx          # Main layout wrapper
│   │   ├── Navbar.jsx          # Navigation bar
│   │   ├── Footer.jsx          # Footer component
│   │   ├── ChatWindow.jsx      # Chat interface
│   │   └── ...                 # Other UI components
│   ├── pages/
│   │   ├── Home.jsx            # Landing page
│   │   ├── Login.jsx           # Authentication
│   │   ├── ChatRoom.jsx        # Chat room view
│   │   └── ...                 # Other pages
│   ├── hooks/
│   │   └── useWallet.js        # Web3 wallet hook
│   ├── services/
│   │   └── api.js              # API service layer
│   ├── utils/
│   │   └── web3Utils.js        # Web3 utility functions
│   ├── data.js                 # Dummy data
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles
├── package.json
├── vite.config.js
└── README.md
```

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- Web3 wallet (MetaMask recommended)
- MongoDB database (local or cloud)

### Backend Setup

1. Navigate to the backend directory:
```bash
cd walletalk-backend
```

2. Install backend dependencies:
```bash
npm install
```

3. Create a `.env` file with your configuration:
```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

4. Start the backend server:
```bash
npm start
```
The backend will run on http://localhost:5000

### Frontend Setup

1. Clone the repository:
```bash
git clone https://github.com/yourusername/walletalk-frontend.git
cd walletalk-frontend
```

2. Install frontend dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Production Deployment

The frontend is configured to use the Render backend at `https://walletalk-backend.onrender.com/api`. When deployed to Netlify, it will automatically connect to the production backend.

### Build for Production

```bash
npm run build
```

## Usage

### Connecting a Wallet
1. Click "Login with Wallet Address" on the login page
2. Select your preferred wallet
3. Approve the connection request
4. Your wallet address will be displayed as connected

### Joining Chat Rooms
- Browse available rooms in the sidebar
- Some rooms may require token ownership
- Click to join and start chatting

### Sending Messages
- Type in the input field at the bottom
- Press Enter or click Send
- Messages appear in real-time

## API Endpoints (Backend)

### Authentication
- `POST /api/auth/login` - Wallet-based login
- `GET /api/user/profile` - Get user profile

### Chat
- `GET /api/chat/:roomId/messages` - Get room messages
- `POST /api/chat/:roomId/messages` - Send message
- `GET /api/rooms` - List available rooms
- `POST /api/rooms` - Create new room

## Web3 Features Implementation

### Wallet Connection
Uses `useWallet` hook for seamless wallet integration:
```javascript
const { account, connected, connectWallet } = useWallet();
```

### ENS Resolution
Automatically resolves .eth names for better UX:
```javascript
const displayName = await getENSName(address, provider);
```

### Token Gating
Rooms can require specific token ownership for access.

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -am 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## Roadmap

### Phase 1 (Current - MVP)
- ✅ Wallet-based authentication with backend
- ✅ Real-time chat with Socket.io
- ✅ Room creation and management
- ✅ Responsive UI
- ✅ Custom animations
- ✅ Backend API integration
- ✅ Token-gated rooms concept

### Phase 2 (Q2 2024)
- [ ] Voice & video calls
- [ ] NFT marketplace integration
- [ ] Cross-chain messaging
- [ ] Mobile app (React Native)

### Phase 3 (Q3 2024)
- [ ] DAO governance features
- [ ] Advanced moderation tools
- [ ] Plugin ecosystem
- [ ] Multi-language support

## Marketing Strategy

### Target Communities
- Crypto-native communities (NFT holders, DAO members, DeFi users)
- Token-gated group chats for BAYC, ENS holders, local African NFT projects

### Positioning
- Market as "The WhatsApp of Web3" or "DM by Wallet"
- Push privacy angle: "No phone numbers. No emails. Just your wallet."

### Partnerships
- Partner with wallet providers (MetaMask, Coinbase Wallet, Trust Wallet)
- Partner with NFT projects & DAOs for exclusive community chats

### Content & Community
- Educational threads: "Why wallet-only chat is safer than email login"
- Early-access waitlist with special NFT passes

### Events & PR
- Launch at hackathons (ETHGlobal, Gitcoin)
- Beta test contests with crypto influencers
- Twitter Spaces on Web3 communication & privacy

## Monetization Strategy

### Freemium + Premium Model
- **Free Tier**: Basic wallet-to-wallet chat
- **Premium Tier** (monthly/annual): Encrypted group chats, voice/video calls, cross-chain inbox, multi-wallet profiles

### Token-Gated Features
- Launch native WTLK token for advanced features
- NFT passes for exclusive access and voting on features

### Transaction Fees
- Tiny fees (gasless or % cut) for token transfers and NFT trades in chat
- Revenue sharing with NFT projects

### B2B / API Model
- APIs for DAOs, NFT projects, and dapps to integrate chat
- White-label solutions for custom branded chat rooms
- Subscription or API usage fees

### Ads (Web3-native)
- Opt-in, non-invasive ads powered by on-chain sponsorships
- Sponsored messages (e.g., "This message sponsored by Polygon — get free gas credits")

### Community Pools
- Users can tip each other with crypto inside chats
- Small cut of tips (like Twitch or OnlyFans)

### Example Monetization Flow
1. Free users → Wallet login + basic chat
2. Power users → Pay via crypto (ETH/USDC) or NFT pass for premium features
3. DAOs & NFT projects → Pay subscription for custom branded chat rooms
4. Native token → Early adopters rewarded, later users buy for access

## Security Considerations

- All communications are end-to-end encrypted
- Wallet signatures for authentication
- No centralized data storage (IPFS integration planned)
- Community-driven moderation
- Regular security audits

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact


- **Twitter**: [@neonsleel](https://x.com/NeonSleek))
- **Email**: omachilda.dev@gmail.com
## Acknowledgments

- Built with ❤️ by omachilda.dev
- Inspired by the need for decentralized communication
- Special thanks to all contributors and early adopters

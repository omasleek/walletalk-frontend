import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://walletalk-backend.onrender.com/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor for auth if needed
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('walletalk_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const chatAPI = {
  getMessages: (roomId) => api.get(`/chat/${roomId}/messages`),
  sendMessage: (roomId, message) => api.post(`/chat/${roomId}/messages`, message),
  getRooms: () => api.get('/rooms'),
  createRoom: (roomData) => api.post('/rooms', roomData),
};

export const userAPI = {
  login: (walletAddress) => api.post('/auth/login', { walletAddress }),
  getProfile: () => api.get('/user/profile'),
  requestNonce: (walletAddress) => api.post('/auth/wallet/nonce', { walletAddress }),
  verifySignature: (data) => api.post('/auth/wallet/verify', data),
};

export default api;
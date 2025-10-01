import { useEffect, useRef } from 'react';
import io from 'socket.io-client';

const useSocket = () => {
  const socketRef = useRef(null);

  useEffect(() => {
    const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://walletalk-backend.onrender.com';
    socketRef.current = io(API_BASE_URL);

    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
      }
    };
  }, []);

  const joinRoom = (roomId) => {
    if (socketRef.current) {
      socketRef.current.emit('joinRoom', roomId);
    }
  };

  const leaveRoom = (roomId) => {
    if (socketRef.current) {
      socketRef.current.emit('leaveRoom', roomId);
    }
  };

  const onNewMessage = (callback) => {
    if (socketRef.current) {
      socketRef.current.on('newMessage', callback);
    }
  };

  const offNewMessage = (callback) => {
    if (socketRef.current) {
      socketRef.current.off('newMessage', callback);
    }
  };

  return {
    socket: socketRef.current,
    joinRoom,
    leaveRoom,
    onNewMessage,
    offNewMessage,
  };
};

export default useSocket;
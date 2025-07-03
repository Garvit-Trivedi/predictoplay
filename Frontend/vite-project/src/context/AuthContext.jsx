import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in from localStorage
    const savedUser = localStorage.getItem('predictoplay_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('predictoplay_user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('predictoplay_user');
  };

  const register = (userData) => {
    const newUser = {
      ...userData,
      coins: 1000, // Starting bonus
      id: Date.now(),
      createdAt: new Date().toISOString(),
      isAdmin: false
    };
    setUser(newUser);
    localStorage.setItem('predictoplay_user', JSON.stringify(newUser));
  };

  const updateCoins = (amount) => {
    if (user) {
      const updatedUser = { ...user, coins: user.coins + amount };
      setUser(updatedUser);
      localStorage.setItem('predictoplay_user', JSON.stringify(updatedUser));
    }
  };

  const value = {
    user,
    login,
    logout,
    register,
    updateCoins,
    isLoading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
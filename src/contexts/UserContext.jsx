import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    tier: 'free', // free, paid, lifetime
    buildsRemaining: 1,
    totalBuilds: 0,
    niche: '',
    painPoint: '',
    format: '',
    products: []
  });

  const updateUser = (updates) => {
    setUser(prev => ({ ...prev, ...updates }));
  };

  const addProduct = (product) => {
    setUser(prev => ({
      ...prev,
      products: [...prev.products, product],
      totalBuilds: prev.totalBuilds + 1,
      buildsRemaining: prev.tier === 'free' ? 0 : 
                      prev.tier === 'paid' ? prev.buildsRemaining - 1 : 
                      prev.buildsRemaining
    }));
  };

  return (
    <UserContext.Provider value={{ user, updateUser, addProduct }}>
      {children}
    </UserContext.Provider>
  );
};
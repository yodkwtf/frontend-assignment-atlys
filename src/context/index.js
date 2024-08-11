import React, { createContext, useContext, useState } from 'react';

// Create a new context
const AppContext = createContext({});

// Create a custom hook to access the context
const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

// Create a provider component
const AppProvider = ({ children }) => {
  const [showLogin, setShowLogin] = useState(true);
  const [showModal, setShowModal] = useState(false);

  return (
    <AppContext.Provider
      value={{ showLogin, setShowLogin, showModal, setShowModal }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, useAppContext };

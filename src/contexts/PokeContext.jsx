import React, { createContext, useState } from 'react';

// Create the context
export const PokeContext = createContext();

// Create the provider component
export const PokeProvider = ({ children }) => {
  // State variables and functions go here
  const [data, setData] = useState([]);

  return (
    <PokeContext.Provider value={{data, setData }}>
      {children}
    </PokeContext.Provider>
  );
};

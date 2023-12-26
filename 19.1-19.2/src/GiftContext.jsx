import { createContext, useState } from "react";


export const GiftsContext = createContext();

export const ContextProvider = ({ children }) => {
  const [gifts, setGifts] = useState([]);

  return (
    <GiftsContext.Provider value={{ gifts, setGifts }}>
      {children}
    </GiftsContext.Provider>
  );
};
import { createContext, useContext, useState } from "react";

export const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount((oldCount) => oldCount + 1);
  };
  const decreaseCount = () => {
    setCount((oldCount) => oldCount - 1);
  };

  return (
    <CounterContext.Provider value={{ count, increaseCount , decreaseCount}}>
      {children}
    </CounterContext.Provider>
  );
};

export const useCounter = () => useContext(CounterContext);

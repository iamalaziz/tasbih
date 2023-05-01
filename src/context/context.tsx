import React, { createContext, useState } from 'react';

const CounterContext = createContext<TContext | null>(null);

const DataProvider: React.FC<TProps> = ({ children }) => {
  const [count, setCount] = useState<number>(0);
  const [select, setSelect] = useState<number>(1);

  const increment = (): void => {
    setCount((prev: number) => (prev += select));
  };
  const decrement = (): void => {
    setCount((prev: number) => (prev -= select));
  };

  return (
    <CounterContext.Provider
      value={{ count, setCount, increment, decrement, select, setSelect }}
    >
      {children}
    </CounterContext.Provider>
  );
};

export default DataProvider;

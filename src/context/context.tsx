import React, { createContext, useState } from 'react';

export const CounterContext = createContext<TContext>({} as TContext);

const DataProvider: React.FC<TProps> = ({ children }) => {
  const [count, setCount] = useState(0);
  const [select, setSelect] = useState(1);

  const increment = (): void => {
    setCount((prev: number) => (prev += select));
  };
  
  const decrement = (): void => {
    if (count - select < 0) {
      setCount(0);
      return;
    }
    setCount((prev: number) => (prev -= select));
  };
  const values: TContext = {
    count,
    setCount,
    select,
    setSelect,
    increment,
    decrement,
  };
  return (
    <CounterContext.Provider value={values}>{children}</CounterContext.Provider>
  );
};

export default DataProvider;

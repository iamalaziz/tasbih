import React, { createContext, useState, useEffect } from 'react';

export const CounterContext = createContext<TContext>({} as TContext);

const DataProvider: React.FC<TProps> = ({ children }) => {
  const [count, setCount] = useState(0);
  const [select, setSelect] = useState(1);
  const [word, setWord] = useState('');
  const increment = (): void => {
    setCount((prev: number) => (prev += select));
  };

  useEffect(() => {
    let remainder = count % 33;
    let num = Math.trunc(count / 33) % 3;
    if (count === 0) {
      setWord('Bismillah');
    } else if (count % 100 === 0) {
      setWord(
        "La ilaha illallahu, wandahu la-sharika lahu, lahul-mulku wa lahul-hamdu, wa huwa 'ala kulli sha'in qodir."
      );
    } else if (num === 0 && remainder > 0) {
      setWord('Subhanallah');
    } else if (num === 1 && remainder > 0) {
      setWord('Alhamdulillah');
    } else if (num === 2 && remainder > 0) {
      setWord('Allahu akbar');
    }
  }, [count]);

  // console.log(word)

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
    word,
  };
  return (
    <CounterContext.Provider value={values}>{children}</CounterContext.Provider>
  );
};

export default DataProvider;

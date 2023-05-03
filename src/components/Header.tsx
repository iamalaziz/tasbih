import React, {
  Fragment,
  useContext,
  useState,
  useRef,
  useEffect,
} from 'react';
import { CounterContext } from '../context/context';

const Header = () => {
  const { count, setSelect, setCount, word } = useContext(CounterContext);
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef<any>();

  useEffect(() => {
    if (isEditing) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = parseInt(event.target.value);
    setSelect(value);
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    value !== '' ? setCount(parseInt(e.target.value)) : setCount(0);
  };

  const handleReset = () => {
    const confirmReset = window.confirm(
      'Confirm Reset: \nWe are about to reset the counter to 0!'
    );
    if (confirmReset) {
      setCount(0);
    }
  };

  return (
    <Fragment>
      <header className="flex justify-center items-center font-medium mb-6">
        <select
          onChange={selectChange}
          defaultValue="1"
          className="steps flex items-center appearance-none outline-none mx-2 bg-lgbackground py-[3px] px-6 rounded-[60px]"
          id="steps"
        >
          <option value="100">+100</option>
          <option value="30">+30</option>
          <option value="15">+15</option>
          <option value="10">+10</option>
          <option value="9">+9</option>
          <option value="8">+8</option>
          <option value="7">+7</option>
          <option value="6">+6</option>
          <option value="5">+5</option>
          <option value="4">+4</option>
          <option value="3">+3</option>
          <option value="2">+2</option>
          <option value="1">+1</option>
        </select>
        {isEditing ? (
          <button
            onClick={() => setIsEditing(false)}
            onMouseDown={(e) => e.preventDefault()}
            className="mx-2 bg-lgbackground py-[3px] px-6 rounded-[60px] hover:bg-[#4a4949]"
          >
            Done
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            onMouseDown={(e) => e.preventDefault()}
            className="mx-2 bg-lgbackground w-20 py-[3px] px-6 rounded-[60px] hover:bg-[#4a4949]"
          >
            Edit
          </button>
        )}
        <button
          onClick={() => handleReset()}
          className="mx-2 bg-lgbackground py-[3px] px-6 rounded-[60px]"
        >
          Reset
        </button>
      </header>
      {isEditing ? (
        <input
          type="text"
          ref={inputRef}
          value={count}
          onBlur={() => setIsEditing(false)}
          onChange={handleInput}
          pattern="\d*"
          className="w-full appearance-none outline-none bg-background text-9xl "
        />
      ) : (
        <div className='animate-[fadein_0.5s_ease-in]'>
          <h1 className="animate-[fadein_0.5s_ease-in] text-9xl text-center my-[43px]">
            {count}
          </h1>
          <p className='text-center mb-4 max-w-lg'>{word}</p>
        </div>
      )}
    </Fragment>
  );
};

export default Header;

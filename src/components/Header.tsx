import React from 'react';

const Header = () => {


  return (
    <header className="flex justify-center items-center font-medium mb-4">
      <select defaultValue='1'
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
        <option value="1">
          +1
        </option>
      </select>
      <button className="mx-2 bg-lgbackground py-[3px] px-6 rounded-[60px] hover:bg-[#4a4949]">
        Edit
      </button>
      <button className="mx-2 bg-lgbackground py-[3px] px-6 rounded-[60px]">
        Reset
      </button>
    </header>
  );
};

export default Header;

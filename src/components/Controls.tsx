import React, { Fragment } from 'react';


const Controls = () => {

  return (
    <Fragment>
      <h1 className="text-9xl text-center m-5">count</h1>
      <div id="controls" className="flex flex-col">
        <button
          className="outline-none w-60 h-60 mx-auto rounded-full border-8 border-background bg-accent-darker transition-all ease-in-out active:bg-accent-dark active:border-[8px] active:border-accent duration-200"
        >
          <div className="mx-auto chevron-up w-[90px] h-[90px] border-t-8 border-l-8 translate-y-5 rotate-45 border-t-accent border-l-accent"></div>
        </button>
        <button
          className="relative bottom-12 w-[90px] h-[90px] mx-auto rounded-full border-[6px] border-background bg-accent-darker transition-all ease-in-out active:bg-accent-dark active:border-[8px] active:border-accent duration-200"
        >
          <div className="mx-auto chevron-up w-[30px] h-[30px] border-b-[6px] border-r-[6px] rotate-45 -translate-y-2  border-b-accent border-r-accent"></div>
        </button>

      </div>
    </Fragment>
  );
};

export default Controls;

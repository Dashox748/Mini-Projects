import React from "react";
import { useState } from "react";

function Shorten({ shortenLink, shortenLinkFunc, linkOriginal }) {
  const [inputValue, setInputValue] = useState("");
  const [active, setActive] = useState(false);

  const handleInput = (event) => {
    setInputValue(event.target.value);
    if (active === true) {
      setActive(false);
    }
  };
  const handleSubmit = (link) => {
    link.preventDefault();
    if (inputValue.trim().length === 0) {
      setActive(true);
      return;
    }
    shortenLinkFunc(inputValue);
    setInputValue("");
  };

  return (
    <div className="mx-auto max-w-[1300px] -translate-y-20">
      <div className=" p-10 mt-36 h-[160px] bg-[#3b3054] bg-shorten-pattern bg-cover rounded-lg ">
        <form className="flex items-center h-[100%]" onSubmit={handleSubmit}>
          <input
            onChange={(event) => {
              handleInput(event);
            }}
            value={inputValue}
            placeholder="Shorten a link here..."
            className={
              "rounded-lg px-4 w-[100%] h-[60px]  outline-none border-red-400 " +
              (active ? "placeholder-red-400 border-4" : "")
            }
          />
          <button className=" ml-6 rounded-lg w-[200px] text-white tracking-wide h-[50px] bg-cyan-500 hover:bg-cyan-600 active:opacity-80">
            Shorten It
          </button>
        </form>
        {active ? (
          <span className="text-red-400">Please add a link</span>
        ) : null}
      </div>
      {shortenLink.map((shortLink) => (
        <div className="w-[100%] mt-10">
          <div className="bg-white w-[100%] py-4 px-6 flex shadow-lg justify-between items-center">
            {shortLink.originalLink}
            <div className="flex gap-3 items-center">
              <span className="font-bold text-cyan-500">
                {shortLink.shortLink}
              </span>
              <button className="bg-cyan-500 py-2 rounded-md px-6 text-white">
                Copy
              </button>
            </div>
          </div>
        </div>
      ))}
      {/* {shortenLink.length !== 0 ? (
 
        <div className="w-[100%] mt-10">
          <div className="bg-white w-[100%] py-4 px-6 flex shadow-lg justify-between items-center">
            {linkOriginal}

            <div className="flex gap-3 items-center">
              <span className="font-bold text-cyan-500">{shortenLink}</span>
              <button className="bg-cyan-500 py-2 rounded-md px-6 text-white">
                Copy
              </button>
            </div>
 
          </div>
        </div>
      ) : (
        <div></div>
      )} */}
    </div>
  );
}

export default Shorten;

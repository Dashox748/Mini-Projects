import React from "react";
import { useState } from "react";

function Shorten({ shortenLink, shortenLinkFunc, linkOriginal }) {
  const [inputValue, setInputValue] = useState("");

  const handleInput = (event) => {
    setInputValue(event.target.value);
  };
  const handleSubmit = (link) => {
    link.preventDefault();
    if (inputValue.trim().length === 0) {
      return;
    }
    shortenLinkFunc(inputValue);
    setInputValue("");
    console.log(linkOriginal);
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
            className="rounded-lg px-4 w-[100%] h-[50px] outline-none border-none"
          />
          <button className=" ml-6 rounded-lg w-[200px] text-white tracking-wide h-[50px] bg-cyan-500 hover:bg-cyan-600 active:opacity-80">
            Shorten It
          </button>
        </form>
      </div>
      {shortenLink.length !== 0 ? (
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
      )}
    </div>
  );
}

export default Shorten;

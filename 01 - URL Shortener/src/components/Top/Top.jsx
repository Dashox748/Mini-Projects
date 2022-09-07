import React from "react";
import illustration from "../../images/illustration-working.svg";

function Top() {
  return (
    <div className="flex relative max-w-[78%] min-w-[78%] m-auto ">
      <div className="w-[700px] mt-32 z-50">
        <h1 className="font-bold text-7xl opacity-80 leading-[80px]">
          More than just shorter links
        </h1>
        <p className="w-[500px] text-gray-400 mt-1 text-[21px]">
          Build your brand's recognition and get detailed insights on how your
          links are performing
        </p>
        <button className="mt-9 bg-[#2acfcf] px-12 py-4 rounded-full font-bold tracking-wide transition-all text-lg text-white hover:opacity-60">
          Get Started
        </button>
      </div>

      <img src={illustration} alt="xd" className="absolute -right-60 " />
    </div>
  );
}

export default Top;

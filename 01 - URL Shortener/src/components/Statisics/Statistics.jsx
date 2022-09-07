import React from "react";

import brand from "../../images/icon-brand-recognition.svg";
import records from "../../images/icon-detailed-records.svg";
import customizable from "../../images/icon-fully-customizable.svg";

function Statistics() {
  return (
    <div>
      <div className="flex flex-col place-content-center items-center">
        <h1 className="text-[40px] font-bold">Advanced Statistics</h1>
        <p className="max-w-[520px] text-[18px] mt-2 text-gray-400 font-medium text-center">
          Track how your links are performing across the web with our advanced
          statistics dashboard
        </p>
      </div>
      <div className="flex mt-[160px] justify-center items-center pb-[200px]">
        <div className="bg-white w-[450px] rounded-lg p-7 relative -translate-y-16">
          <h1 className="text-xl font-bold tracking-wide mb-4 mt-11">
            Brand Recognition
          </h1>
          <p>
            Boos your brand recognition with each click. Generic link don't mean
            a thing. Branded links help instill confidence in your content
          </p>
          <div className="absolute -top-12 bg-[#3b3054] p-6 rounded-full">
            <img src={brand} alt="Brand Recognition" />
          </div>
        </div>
        <div className="w-8 h-2 bg-cyan-300 " />
        <div className="bg-white w-[450px] rounded-lg p-7 relative">
          <h1 className="text-xl font-bold tracking-wide mb-4 mt-11">
            Detailed Records
          </h1>
          <p>
            Gain insights into who is clicking your links. Knowing when annd
            where poeple engage with your content helpps inform better
            decisions.
          </p>
          <div className="absolute -top-12 bg-[#3b3054] p-6 rounded-full">
            <img src={records} alt="Brand Recognition" />
          </div>
        </div>
        <div className="w-8 h-2 bg-cyan-300 " />
        <div className="bg-white w-[450px] rounded-lg p-7 relative translate-y-16">
          <h1 className="text-xl font-bold tracking-wide mb-4 mt-11">
            Fully Customizable
          </h1>
          <p>
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement
          </p>
          <div className="absolute -top-12 bg-[#3b3054] p-6 rounded-full">
            <img src={customizable} alt="Brand Recognition" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistics;

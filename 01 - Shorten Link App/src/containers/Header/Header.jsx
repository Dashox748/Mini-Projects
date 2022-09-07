import React from "react";
import logo from "../../images/logo.svg";

function Header() {
  return (
    <div className="flex justify-between content-center my-10 max-w-[78%] min-w-[78%] m-auto ">
      <div className="flex items-center">
        <img src={logo} alt="logo" className="mr-10" />
        <ul className="flex gap-8 font-bold text-gray-400 ">
          <li className="hover:text-black cursor-pointer transition-all">
            Features
          </li>
          <li className="hover:text-black cursor-pointer transition-all">
            Pricing
          </li>
          <li className="hover:text-black cursor-pointer transition-all">
            Resources
          </li>
        </ul>
      </div>
      <div>
        <span className="font bold text-gray-400 hover:text-black cursor-pointer transition-all">
          Login
        </span>
        <button className="ml-8 bg-[#2acfcf] px-5 py-2 rounded-full font-bold transition-all text-white hover:opacity-60">
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Header;

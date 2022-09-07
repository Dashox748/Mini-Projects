import React from "react";
import logo from "../../images/logo.svg";
import fb from "../../images/icon-facebook.svg";
import twitter from "../../images/icon-twitter.svg";
import pinterest from "../../images/icon-pinterest.svg";
import instagram from "../../images/icon-instagram.svg";

function Footer() {
  return (
    <div>
      <div className="flex flex-col bg-footer-pattern h-[250px] bg-[#3b3054] bg-cover items-center w-[100%] justify-center">
        <h1 className="text-white font-bold text-4xl">
          Boost your links today
        </h1>
        <button className="tracking-wide text-white font-bold text-lg bg-cyan-500 hover:bg-cyan-600 active:opacity-80 rounded-full py-4 px-12 mt-5 ">
          Get Started
        </button>
      </div>
      <div className="bg-[#232127] h-[300px] pt-16">
        <div className="flex max-w-[78%] min-w-[78%] m-auto content-between justify-between">
          <img src={logo} alt="logo" className="h-[50px] text-white " />
          <div className="flex gap-16">
            <div className="flex flex-col gap-2">
              <h1 className="text-white text-lg mb-4">Features</h1>
              <p className="text-gray-400 hover:text-cyan-400 cursor-pointer">
                Link Shortening
              </p>
              <p className="text-gray-400 hover:text-cyan-400 cursor-pointer">
                Branded Links
              </p>
              <p className="text-gray-400 hover:text-cyan-400 cursor-pointer">
                Analytics
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-white text-lg mb-4">Resources</h1>
              <p className="text-gray-400 hover:text-cyan-400 cursor-pointer">
                Blog
              </p>
              <p className="text-gray-400 hover:text-cyan-400 cursor-pointer">
                Developers
              </p>
              <p className="text-gray-400 hover:text-cyan-400 cursor-pointer">
                Support
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-white text-lg mb-4">Company</h1>
              <p className="text-gray-400 hover:text-cyan-400 cursor-pointer">
                About
              </p>
              <p className="text-gray-400 hover:text-cyan-400 cursor-pointer">
                Our Team
              </p>
              <p className="text-gray-400 hover:text-cyan-400 cursor-pointer">
                Careers
              </p>
              <p className="text-gray-400 hover:text-cyan-400 cursor-pointer">
                Contact
              </p>
            </div>
            <div className="flex gap-8">
              <img
                src={fb}
                alt="facebook logo"
                className="w-8 h-8 cursor-pointer"
              />
              <img
                src={twitter}
                alt="twitter logo"
                className="w-8 h-8 cursor-pointer"
              />
              <img
                src={pinterest}
                alt="pinterest logo"
                className="w-8 h-8 cursor-pointer"
              />
              <img
                src={instagram}
                alt="instagram logo"
                className="w-8 h-8 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

import React from "react";
import Shorten from "../Shorten/Shorten";
import Statistics from "../Statisics/Statistics";

function Bottom({ shortenLink, shortenLinkFunc, linkOriginal }) {
  return (
    <div className="bg-[#e7e7e7] mx-auto  ">
      <div className="max-w-[78%] min-w-[78%] m-auto ">
        <Shorten
          shortenLink={shortenLink}
          shortenLinkFunc={shortenLinkFunc}
          linkOriginal={linkOriginal}
        />
        <Statistics />
      </div>
    </div>
  );
}

export default Bottom;

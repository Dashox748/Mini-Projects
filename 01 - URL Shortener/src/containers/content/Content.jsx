import React from "react";
import Top from "../../components/Top/Top";
import Bottom from "../../components/Bottom/Bottom";

function Content({ shortenLink, shortenLinkFunc, linkOriginal }) {
  return (
    <div>
      <Top />
      <Bottom
        shortenLink={shortenLink}
        shortenLinkFunc={shortenLinkFunc}
        linkOriginal={linkOriginal}
      />
    </div>
  );
}

export default Content;

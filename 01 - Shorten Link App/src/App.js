import "./App.css";
import Header from "./containers/Header/Header";
import Content from "./containers/content/Content";
import Footer from "./containers/Footer/Footer";
import { useState } from "react";

function App() {
  const [shortenLink, setShortenLink] = useState("");
  const [link, setLink] = useState("");

  const shortenLinkFunc = (link) => {
    if (link.length > 70) {
      setLink(link.substring(0, 70) + "...");
    } else {
      setLink(link);
    }
    fetch(`https://api.shrtco.de/v2/shorten?url=${link}`)
      .then((data) => data.json())
      .then((data) => setShortenLink(data.result.short_link));
  };

  return (
    <div className="overflow-hidden">
      <Header />
      <Content
        shortenLink={shortenLink}
        shortenLinkFunc={shortenLinkFunc}
        linkOriginal={link}
      />
      <Footer />
    </div>
  );
}

export default App;

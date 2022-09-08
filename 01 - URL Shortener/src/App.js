import "./App.css";
import Header from "./containers/Header/Header";
import Content from "./containers/content/Content";
import Footer from "./containers/Footer/Footer";
import { useEffect, useState } from "react";

function App() {
  // const [listLink, setListLink] = useState([]);
  const [shortenLink, setShortenLink] = useState([]);
  const [link, setLink] = useState("");

  useEffect(() => {
    const savedLinks = JSON.parse(localStorage.getItem("linksList"));
    if (savedLinks) {
      setShortenLink(savedLinks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("linksList", JSON.stringify(shortenLink));
  }, [shortenLink]);

  const shortenLinkFunc = (link) => {
    fetch(`https://api.shrtco.de/v2/shorten?url=${link}`)
      .then((data) => data.json())
      .then((data) => {
        if (link.length > 70) {
          const newData = {
            originalLink: link.substring(0, 70) + "...",
            shortLink: data.result.short_link,
          };
          if (shortenLink.length >= 3) {
            shortenLink.pop();
            setShortenLink([newData, ...shortenLink]);
          } else {
            setShortenLink([newData, ...shortenLink]);
          }
        } else {
          const newData = {
            originalLink: link,
            shortLink: data.result.short_link,
          };
          if (shortenLink.length >= 3) {
            shortenLink.pop();
            setShortenLink([newData, ...shortenLink]);
          } else {
            setShortenLink([newData, ...shortenLink]);
          }
        }
      });
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

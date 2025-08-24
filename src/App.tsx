import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Homepage from "./components/Homepage";
import { useEffect, useState } from "react";

function App() {
  const [img, setImg] = useState(
    "https://cdn-images.dzcdn.net/images/cover/58b6ae3ff5e9dfc6f9e4d59862094528/56x56-000000-80-0-0.jpg"
  );
  const [title, setTitle] = useState("Rockabye");
  const [author, setAuthor] = useState("Clean Bandit");

  const passSetImg = (src: string, title: string, author: string) => {
    setImg(src);
    setTitle(title);
    setAuthor(author);
    console.log("src", src);
  };

  const [windowWidth, setWidth] = useState(window.innerWidth);
  const [shownSongs, setShownSongs] = useState(0);
  const [shownEpisodes, setShownEpisodes] = useState(0);
  const [widthPlayer, setWidthPlayer] = useState("");

  function updateSize() {
    setWidth(window.innerWidth);
    if (windowWidth < 700) {
      setShownSongs(6);
      setShownEpisodes(3);
      setWidthPlayer("sm");
    }
    if (windowWidth >= 700 && windowWidth < 992) {
      setShownSongs(8);
      setShownEpisodes(4);
      setWidthPlayer("sm");
    }
    if (windowWidth >= 992) {
      setShownSongs(10);
      setShownEpisodes(5);
      setWidthPlayer("lg");
    }
    if (windowWidth >= 1200) {
      setShownSongs(12);
      setShownEpisodes(5);
      setWidthPlayer("lg");
    }
  }

  useEffect(() => {
    updateSize();
  }, []);

  window.addEventListener("resize", updateSize);

  // Cose in più da fare: mettere il cursore ovunque, dove serve

  return (
    <>
      <Homepage
        img={img}
        title={title}
        author={author}
        shownEpisodes={shownEpisodes}
        passSetImg={passSetImg}
        shownSongs={shownSongs}
        widthPlayer={widthPlayer}
      />
    </>
  );
}

export default App;

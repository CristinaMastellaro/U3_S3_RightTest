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
  };

  const [windowWidth, setWidth] = useState(window.innerWidth);
  const [shownSongs, setShownSongs] = useState(0);
  const [shownEpisodes, setShownEpisodes] = useState(0);
  const [widthPlayer, setWidthPlayer] = useState("");

  const body = document.getElementById("root")

  const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;

        // Solo aggiorno se le dimensioni sono cambiate
        setWidth((prev) => {
          // console.log("width", width)
          if (prev !== width) {
            return width;
          }
          return prev;
        });
      }
    });


  function updateSize() {
    if (windowWidth < 754) {
      setShownSongs(6);
      setShownEpisodes(3);
      setWidthPlayer("sm");
    }
    // if (windowWidth >= 754 && windowWidth < 992) {
    if (windowWidth >= 754 && windowWidth < 976) {
      setShownSongs(8);
      setShownEpisodes(4);
      setWidthPlayer("sm");
    }
    if (windowWidth >= 976) {
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
    observer.observe(body);
    updateSize()

    return () => {
      observer.disconnect();
    };
  }, [windowWidth]);

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

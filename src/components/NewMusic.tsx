import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { BiRightArrow } from "react-icons/bi";
import Daum from "../types/Daum";
import SingleMusic from "./SingleMusic";

interface NewMusicProps {
  setPlayer: (src: string, title: string, author: string) => void;
  shownSongs: number;
  language: string;
}

const NewMusic = ({ setPlayer, shownSongs, language }: NewMusicProps) => {
  const endpoint =
    "https://striveschool-api.herokuapp.com/api/deezer/search?q=sea";

  // let windowWidth = document.body.clientWidth;
  // let windowWidth = window.innerWidth;

  const [songs, setSongs] = useState<Daum[]>([]);
  // const [shownSongs, setShownSongs] = useState(6);

  // const changeShownSongs = () => {
  //   if (windowWidth < 700) {
  //     setShownSongs(6);
  //   }
  //   if (windowWidth >= 700 && windowWidth < 992) {
  //     setShownSongs(8);
  //   }
  //   if (windowWidth >= 992) {
  //     setShownSongs(10);
  //   }
  // };

  // function getWidth() {
  //   windowWidth = Math.max(
  //     document.body.scrollWidth,
  //     document.documentElement.scrollWidth,
  //     document.body.offsetWidth,
  //     document.documentElement.offsetWidth,
  //     document.documentElement.clientWidth
  //   );
  // }

  const getSongs = () => {
    fetch(endpoint)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Errore nella chiamata API");
        }
      })
      .then((data) => {
        setSongs(data.data);
        // console.log("songs", songs);
      })
      .catch((err) => console.log("C'è stato un errore", err));
  };

  useEffect(() => {
    getSongs();
  }, []);

  // useEffect(() => {
  //   changeShownSongs();
  // }, [windowWidth]);

  return (
    <Container fluid className="px-4">
      <h2 className="my-4" style={{ cursor: "pointer" }}>
        {language === "it" ? "Nuove uscite" : "New releases"}{" "}
        <BiRightArrow className="opacity-50 fs-5" />
      </h2>
      <Row xs={3} md={4} lg={5} xl={6} className="gx-2 gy-5">
        {songs
          ? songs
              .filter((song, i) => {
                if (i < shownSongs) return song;
              })
              .map((song) => (
                <SingleMusic key={song.id} song={song} setPlayer={setPlayer} />
              ))
          : ""}
      </Row>
    </Container>
  );
};

export default NewMusic;

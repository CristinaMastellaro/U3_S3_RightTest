import {
  BiShuffle,
  BiSkipPrevious,
  BiPlay,
  BiPause,
  BiSkipNext,
  BiRepeat,
  BiVolumeFull,
} from "react-icons/bi";
import "../css/player.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import { useEffect, useState } from "react";
import image1 from "../assets/assetsDownload/logos/apple.svg";

interface PlayerProps {
  img: string;
  title: string;
  author: string;
  widthPlayer: string;
}

const Player = ({ img, title, author, widthPlayer }: PlayerProps) => {
  const [width, setWidth] = useState("");
  const [shuffle, setShuffle] = useState(false);
  const [repeat, setRepeat] = useState(false);
  const [classRepeat, setClassRepeat] = useState("");
  const [classShuffle, setClassShuffle] = useState("");

  useEffect(() => {
    if (widthPlayer === "sm") {
      setWidth("cont-player-sm");
    } else {
      setWidth("cont-player-lg");
    }
  }, [widthPlayer]);

  useEffect(() => {
    // console.log("repeat", repeat);
    if (repeat) {
      setClassRepeat("selected");
    } else {
      setClassRepeat("");
    }
  }, [repeat]);

  useEffect(() => {
    if (shuffle) {
      setClassShuffle("selected");
    } else {
      setClassShuffle("");
    }
  }, [shuffle]);

  const [play, setPlay] = useState(false);

  return (
    <Container fluid className={width + " py-1 rounded-4"}>
      <Row className="p-2 justify-content-between justify-content-lg-start align-items-center flex-nowrap w-100">
        <Col className="d-flex gap-2 d-lg-none" xs={8} md={4}>
          <img src={img} alt="Cover dell'album della canzone" />
          <div className="info">
            <p className="m-0 fw-bold d-lg-none">{title}</p>
            <p className="m-0 d-lg-none">{author}</p>
          </div>
        </Col>
        <Col
          xs={4}
          md={4}
          lg={3}
          className="d-flex gap-2 align-items-center justify-content-end justify-content-md-center opacity-50"
        >
          <BiShuffle
            className={" d-none d-md-block icon " + classShuffle}
            onClick={() => {
              setShuffle(!shuffle);
            }}
          />
          <BiSkipPrevious className="fs-3 icon" />
          {play ? (
            <BiPause
              className="fs-1 icon"
              onClick={() => {
                setPlay(false);
              }}
            />
          ) : (
            <BiPlay
              className="fs-1 icon"
              onClick={() => {
                setPlay(true);
              }}
            />
          )}
          <BiSkipNext className="fs-3 icon" />
          <BiRepeat
            className={" d-none d-md-block icon " + classRepeat}
            onClick={() => {
              setRepeat(!repeat);
            }}
          />
        </Col>
        <Col
          lg={6}
          className="d-none d-lg-block text-center apple-col flex-grow-1 py-2"
        >
          <Image src={image1} alt="Apple" className="apple"></Image>
        </Col>
        <Col
          md={4}
          lg={3}
          className="align-items-center gap-2 justify-content-end d-none d-md-flex"
        >
          <BiVolumeFull className="opacity-50" />
          <div className="d-flex">
            <input type="range" min="0" max="100" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Player;

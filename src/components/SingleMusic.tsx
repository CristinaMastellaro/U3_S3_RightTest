import { Col, Card } from "react-bootstrap";
import Daum from "../types/Daum";
import "../css/singleMusic.css";

interface SingleMusicProps {
  song: Daum;
  setPlayer: (src: string, title: string, author: string) => void;
}

const SingleMusic = ({ song, setPlayer }: SingleMusicProps) => {
  return (
    <Col
      onClick={() =>
        setPlayer(song.album.cover_small, song.title_short, song.artist.name)
      }
    >
      <Card bg="black" data-bs-theme="dark" className="card-music">
        <Card.Img
          variant="top"
          src={song.album.cover_medium}
          alt="Picture of the song"
        />
        <Card.Body>
          <Card.Text className="d-flex justify-content-between mb-0">
            {song.title_short}{" "}
            {song.explicit_lyrics ? (
              <i className="bi bi-explicit-fill"></i>
            ) : (
              ""
            )}
          </Card.Text>
          <Card.Text className="opacity-50">{song.artist.name}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};
export default SingleMusic;

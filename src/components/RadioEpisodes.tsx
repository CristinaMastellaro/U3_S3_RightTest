import { Container, Row } from "react-bootstrap";
import { BiRightArrow } from "react-icons/bi";
import image1 from "../assets/assetsDownload/images/2a.png";
import image2 from "../assets/assetsDownload/images/2b.png";
import image3 from "../assets/assetsDownload/images/2c.png";
import image4 from "../assets/assetsDownload/images/2d.png";
import image5 from "../assets/assetsDownload/images/2e.png";
import image6 from "../assets/assetsDownload/images/2f.png";
import SingleRadioEpisode from "./SingleRadioEpisode";
import "../css/radioEpisodes.css";

interface RadioEpisodesProps {
  shownEpisodes: number;
  language: string;
}

const RadioEpisodes = ({ shownEpisodes, language }: RadioEpisodesProps) => {
  const titles: [string, boolean][] = [
    ["Prologo con Abuelo", true],
    ["The Wanderer", false],
    ["Michael Bublé & Carly Pearce", false],
    ["Stephan Moccio: The Zane Lowe Interview", false],
    ["Chart Spotlight: Julia Michaels", false],
  ];

  const images = [image1, image2, image3, image4, image5, image6];

  return (
    <Container className="position-relative cont mt-5 px-4" fluid>
      <h2 className="my-4">
        {language === "it" ? "Nuovi episodi radio" : "New radio episodes"}
        <BiRightArrow className="opacity-50 fs-5" />
      </h2>
      <Row className="flex-nowrap" xs={3} md={4} lg={5} xl={6}>
        {titles
          .filter((title, i) => {
            if (i < shownEpisodes) return title;
          })
          .map((title, i) => {
            return (
              <SingleRadioEpisode
                key={i}
                image={images[i]}
                explicit={title[1]}
                title={title[0]}
              />
            );
          })}
      </Row>
    </Container>
  );
};

export default RadioEpisodes;

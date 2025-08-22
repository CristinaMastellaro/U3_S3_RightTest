import { Container, Row } from "react-bootstrap";
import image1 from "../assets/assetsDownload/images/1a.png";
import image2 from "../assets/assetsDownload/images/1b.png";
import SingleNew from "./SingleNew";
// import image3 from "../assets/assetsDownload/images/1c.png";

interface NewsProps {
  language: string;
}

const News = ({ language }: NewsProps) => {
  const images = [image1, image2];
  const messages = [
    "Rilassati, al resto pensiamo noi. Ascolta Apple Music Chill",
    "Ecco la nuova casa della musica latina",
  ];
  const engMessages = [
    "Relax, we'll think about everything. Listen to Apple Music Chill",
    "Here's the new house for latin music",
  ];

  return (
    <>
      <Container className="cont-news px-4" fluid>
        <h1 className="mt-5">{language === "it" ? "Novità" : "News"}</h1>
        <Row
          className="border-top border-black border-opacity-50 flex-nowrap episodes mt-3 w-100"
          xl={2}
        >
          {images.map((image, i) => {
            return (
              <SingleNew
                key={i}
                image={image}
                title={language === "it" ? messages[i] : engMessages[i]}
                language={language}
              />
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default News;

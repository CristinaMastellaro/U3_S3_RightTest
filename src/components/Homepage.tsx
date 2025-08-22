import { Container, Row, Col } from "react-bootstrap";
import ExploreElse from "./ExploreElse";
import NewMusic from "./NewMusic";
import RadioEpisodes from "./RadioEpisodes";
import News from "./News";
import MyNavSmall from "./MyNavSmall";
import MyNavBig from "./MyNavBig";
import MyFooter from "./MyFooter";
import { useState } from "react";

interface HomepageProps {
  img: string;
  title: string;
  author: string;
  shownEpisodes: number;
  passSetImg: (src: string, title: string, author: string) => void;
  shownSongs: number;
  widthPlayer: string;
}

const Homepage = ({
  img,
  title,
  author,
  shownEpisodes,
  passSetImg,
  shownSongs,
  widthPlayer,
}: HomepageProps) => {
  const [language, setLanguage] = useState("it");

  const changeLang = (lang: string) => {
    setLanguage(lang);
  };

  return (
    <Container fluid className="px-0">
      <Row className="d-lg-none">
        <MyNavSmall
          img={img}
          title={title}
          author={author}
          widthPlayer={widthPlayer}
          language={language}
        />
      </Row>
      <Row className=" w-100 flex-nowrap">
        <Col lg={3} className="ms-auto mt-5 pt-3 px-0 z-1 d-none d-lg-block">
          <MyNavBig
            img={img}
            title={title}
            author={author}
            widthPlayer={widthPlayer}
            language={language}
          />
        </Col>
        <Col xs={12} lg={9} className="pe-0">
          <div className="p-3 pt-0 pt-lg-5">
            <News language={language} />
            <RadioEpisodes shownEpisodes={shownEpisodes} language={language} />
            <NewMusic
              setPlayer={passSetImg}
              shownSongs={shownSongs}
              language={language}
            />
            <ExploreElse language={language} />
          </div>
          <MyFooter changeLang={changeLang} />
        </Col>
      </Row>
      {/* <Row className="d-lg-none">
        <MyNavSmall
          img={img}
          title={title}
          author={author}
          widthPlayer={widthPlayer}
        />
        <News />
        <RadioEpisodes shownEpisodes={shownEpisodes} />
        <NewMusic setPlayer={passSetImg} shownSongs={shownSongs} />
        <ExploreElse />
        <MyFooter />
      </Row>
      <Row className="d-none d-lg-block w-100 flex-nowrap">
        <Col lg={9} className="ms-auto mt-5 pt-3 px-0 z-0">
          <MyNavBig
            img={img}
            title={title}
            author={author}
            widthPlayer={widthPlayer}
          />
          <div className="p-3 pt-0">
            <News />
            <RadioEpisodes shownEpisodes={shownEpisodes} />
            <NewMusic setPlayer={passSetImg} shownSongs={shownSongs} />
            <ExploreElse />
          </div>
          <MyFooter />
        </Col>
      </Row> */}
    </Container>
  );
};

export default Homepage;

import { Card, Container, Row, Col } from "react-bootstrap";
import { BiRightArrow } from "react-icons/bi";
import "../css/eploreElse.css";

interface ExploreElseProps {
  language: string;
}

const ExploreElse = ({ language }: ExploreElseProps) => {
  return (
    <Container className="mb-4 px-4" fluid>
      <h2 className="my-4">
        {language === "it" ? "Altro da esplorare" : "More to explore"}
      </h2>
      <Row xs={1} md={2} lg={3} className="g-3">
        <Col>
          <Card.Body className="add">
            {language === "it" ? "Esplora per genere" : "Explore by genre"}
            <BiRightArrow />
          </Card.Body>
        </Col>
        <Col>
          <Card.Body className="add">
            {language === "it" ? "Decenni" : "Decades"} <BiRightArrow />{" "}
          </Card.Body>
        </Col>
        <Col>
          <Card.Body className="add">
            {language === "it"
              ? "Attività e stati d'animo"
              : "Activities and moods"}
            <BiRightArrow />{" "}
          </Card.Body>
        </Col>
        <Col>
          <Card.Body className="add">
            Worldwide <BiRightArrow />{" "}
          </Card.Body>
        </Col>
        <Col>
          <Card.Body className="add">
            {language === "it" ? "Classifiche" : "Charts"}
            <BiRightArrow />{" "}
          </Card.Body>
        </Col>
        <Col>
          <Card.Body className="add">
            {language === "it" ? "Audio spaziale" : "Amazing audio"}
            <BiRightArrow />{" "}
          </Card.Body>
        </Col>
        <Col>
          <Card.Body className="add">
            {language === "it" ? "Video musicali" : "Musical videos"}
            <BiRightArrow />{" "}
          </Card.Body>
        </Col>
        <Col>
          <Card.Body className="add">
            {language === "it" ? "Nuovi artisti" : "New artists"}
            <BiRightArrow />{" "}
          </Card.Body>
        </Col>
        <Col>
          <Card.Body className="add">
            {language === "it" ? "Hit del passato" : "Past hits"}
            <BiRightArrow />{" "}
          </Card.Body>
        </Col>
      </Row>
    </Container>
  );
};

export default ExploreElse;

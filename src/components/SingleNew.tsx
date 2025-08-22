import { Col, Card } from "react-bootstrap";
import "../css/singleNew.css";

interface New {
  image: string;
  title: string;
  language: string;
}

const SingleNew = ({ image, title, language }: New) => {
  return (
    <Col className="flex-grow-0 col-card" xl={6}>
      <Card bg="black" data-bs-theme="dark" className="card-news">
        <Card.Body>
          <Card.Text className="d-flex justify-content-between mb-0 first">
            {language === "it" ? "NUOVA STAZIONE RADIO" : "NEW RADIO STATION"}
          </Card.Text>
          <Card.Text className="d-flex justify-content-between mb-0 second">
            {title}
          </Card.Text>
        </Card.Body>
        <Card.Img src={image} alt="Picture of the song" />
      </Card>
    </Col>
  );
};

export default SingleNew;

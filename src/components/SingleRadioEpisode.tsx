import { Col, Card } from "react-bootstrap";
import Radio from "../types/Radio";
import "../css/singleRadioEpisode.css";

const SingleRadioEpisode = ({ title, image, explicit }: Radio) => {
  return (
    <Col>
      <Card bg="black" data-bs-theme="dark" className="card-radio">
        <Card.Img variant="top" src={image} alt="Picture of the song" />
        <Card.Body>
          <Card.Text className="d-flex justify-content-between mb-0">
            {title} {explicit ? <i className="bi bi-explicit-fill"></i> : ""}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleRadioEpisode;

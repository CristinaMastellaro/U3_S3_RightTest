import { Container, Row, Col } from "react-bootstrap";
import "../css/myFooter.css";
import { useEffect, useState } from "react";

interface MyFooterProps {
  changeLang: (lang: string) => void;
}

const MyFooter = ({ changeLang }: MyFooterProps) => {
  const [language, setLanguage] = useState("Italia");
  const [languageIt, setLanguageIt] = useState("");
  const [languageEn, setLanguageEn] = useState("opacity-50");

  useEffect(() => {
    if (language === "Italia") {
      setLanguageIt("");
      setLanguageEn("opacity-50");
      changeLang("it");
    }
    if (language === "Engl") {
      setLanguageIt("opacity-50");
      setLanguageEn("");
      changeLang("en");
    }
  }, [language]);

  return (
    <Container
      className="bg-dark bg-opacity-75 text-light p-4 mb-5 pb-5 mb-lg-1 mx-0 ps-lg-5"
      fluid
    >
      <Row>
        <Col
          onClick={() => {
            setLanguage("Italia");
          }}
          className={
            languageIt +
            " border-end border-secondary flex-grow-0 footer-options"
          }
        >
          Italiano
        </Col>
        <Col
          onClick={() => {
            setLanguage("Engl");
          }}
          className={languageEn + " text-light footer-options"}
        >
          English (UK)
        </Col>
      </Row>
      <Row className="mt-4 mb-2 text-light text-opacity-50">
        <Col xs={12}>
          <p className="mb-0">
            Copyright © 2024 <span className="text-light">Apple Inc. </span>
            {language === "Italia"
              ? "Tutti i diritti riservati."
              : "All rights reserved."}
          </p>
        </Col>
      </Row>
      <Row className="flex-wrap gap-2">
        <Col className="border-end border-secondary text-nowrap pe-3 flex-grow-0 footer-options">
          {language === "Italia"
            ? "Condizioni dei servizi internet"
            : "Terms of Internet services"}
        </Col>
        <Col className="border-end border-secondary text-nowrap px-3 flex-grow-0 footer-options">
          {language === "Italia"
            ? "Apple Music e privacy"
            : "Apple Music and privacy"}
        </Col>
        <Col className="border-end border-secondary text-nowrap px-3 flex-grow-0 footer-options">
          {language === "Italia" ? "Avviso sui cookie" : "Cookie warning"}
        </Col>
        <Col className="border-end border-secondary flex-grow-0 footer-options">
          {language === "Italia" ? "Supporto" : "Support"}
        </Col>
        <Col className="flex-grow-0 footer-options">Feedback</Col>
      </Row>
    </Container>
  );
};

export default MyFooter;

import { Container, Row, Col, Image } from "react-bootstrap";
import { FaUser } from "react-icons/fa";
import { BiBroadcast } from "react-icons/bi";
import { BiGrid } from "react-icons/bi";
import { BiHome } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";
import appleLogo from "../assets/assetsDownload/logos/music.svg";
import "../css/myNavSmall.css";
import Player from "./Player";

interface PlayerProps {
  img: string;
  title: string;
  author: string;
  widthPlayer: string;
  language: string;
}

const MyNavBig = ({
  img,
  title,
  author,
  widthPlayer,
  language,
}: PlayerProps) => {
  return (
    <Container fluid>
      <Row className=" w-100">
        <Col
          lg={3}
          className="position-fixed start-0 top-0 bottom-0 bg-dark px-4"
        >
          <Image
            src={appleLogo}
            alt="Logo AppleMusic"
            className="invert m-4 ms-0"
          />
          <div className="border border-1 p-2 rounded-2 d-flex gap-1 align-items-center my-3">
            <BiSearch className="text-danger me-1 fs-3" />
            <input
              type="text"
              placeholder={language === "it" ? "Cerca" : "Search"}
              className="bg-dark border-0 w-100 text-white"
            />
          </div>
          <div className="mt-4">
            <div className="mt-2 p-1 options">
              <BiHome className="text-danger me-1 fs-4" /> Home
            </div>
            <div className="mt-2 p-1 options">
              <BiGrid className="text-danger me-1 fs-4" />{" "}
              {language === "it" ? "Novità" : "News"}
            </div>
            <div className="mt-2 p-1 options">
              <BiBroadcast className="text-danger me-1 fs-4" /> Radio
            </div>
          </div>
        </Col>
        <Col
          lg={9}
          className="position-fixed top-0 end-0 align-items-center bg-dark bg-opacity-75 px-0"
        >
          <Row className="align-items-center w-100">
            <Col className="flex-grow-1" lg={10} xxl={11}>
              <Player
                img={img}
                title={title}
                author={author}
                widthPlayer={widthPlayer}
              />
            </Col>
            <Col lg={2} xxl={1} className="px-0">
              <button className="bg-danger text-white rounded-2 d-flex align-items-center gap-2 px-3 border-0">
                <FaUser /> {language === "it" ? "Accedi" : "Login"}
              </button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
    // <Navbar
    //   // expand="lg"
    //   bg="dark"
    //   data-bs-theme="dark"
    //   className="justify-content-between d-none d-lg-block"
    // >
    //   <Container fluid className="mx-4 d-flex flex-column">
    //     {/* <Navbar.Toggle
    //       aria-controls="basic-navbar-nav"
    //       className="border border-0 shadow-0"
    //     >
    //       <BiMenu className="fs-1 text-danger" />
    //     </Navbar.Toggle> */}
    //     <Navbar.Brand href="#home" className="d-flex align-items-center gap-1">
    //       <Image src={appleLogo} alt="Logo AppleMusic" className="invert" />
    //     </Navbar.Brand>
    //     <Nav.Link href="#action/3.1" className="text-danger fw-bold">
    //       Accedi
    //     </Nav.Link>
    //     {/* <Navbar.Collapse id="basic-navbar-nav"> */}
    //     <Nav className="me-auto my-3">
    //       <div className="border border-1 p-2 rounded-2">
    //         <BiSearch className="text-danger me-1" />
    //         <input
    //           type="text"
    //           placeholder="Cerca"
    //           className="bg-dark border-0"
    //         />
    //       </div>
    //     </Nav>
    //     <Nav className="text-white mt-1 d-flex flex-row align-items-center">
    //     </Nav>
    //     <Nav className="text-white mt-1 d-flex flex-row align-items-center">
    //       <BiHome className="text-danger me-1" /> Home
    //       <BiGrid className="text-danger me-1" /> Novità
    //       <BiBroadcast className="text-danger me-1" /> Radio
    //     </Nav>
    //     <Nav className="text-white mt-1 d-flex flex-row align-items-center">
    //     </Nav>
    //     {/* </Navbar.Collapse> */}
    //   </Container>
    //   <Player img={img} title={title} author={author} />
    // </Navbar>
  );
};

export default MyNavBig;

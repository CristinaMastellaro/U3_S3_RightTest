import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import { BiBroadcast } from "react-icons/bi";
import { BiGrid } from "react-icons/bi";
import { BiHome } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";
import { BiMenu } from "react-icons/bi";
import appleLogo from "../assets/assetsDownload/logos/music.svg";
import "../css/myNavSmall.css";
import Player from "./Player";
import PlayerProps from "../types/Player";

const MyNavSmall = ({
  img,
  title,
  author,
  widthPlayer,
  language,
}: PlayerProps) => {
  return (
    <Navbar
      expand="lg"
      bg="dark"
      data-bs-theme="dark"
      className="justify-content-between d-lg-none"
    >
      <Container fluid className="mx-4">
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="border border-0 shadow-0"
        >
          <BiMenu className="fs-1 text-danger" />
        </Navbar.Toggle>
        <Navbar.Brand href="#home" className="d-flex align-items-center gap-1">
          <Image src={appleLogo} alt="Logo AppleMusic" className="invert" />
        </Navbar.Brand>
        <Nav.Link href="#action/3.1" className="text-danger fw-bold">
          {language === "it" ? "Accedi" : "Login"}
        </Nav.Link>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto my-3">
            <div className="border border-1 p-2 rounded-2">
              <BiSearch className="text-danger me-1" />
              <input
                type="text"
                placeholder={language === "it" ? "Cerca" : "Search"}
                className="bg-dark border-0 text-white"
              />
            </div>
          </Nav>
          <Nav className="text-white mt-1 d-flex flex-row align-items-center options">
            <BiHome className="text-danger me-1" /> Home
          </Nav>
          <Nav className="text-white mt-1 d-flex flex-row align-items-center options">
            <BiGrid className="text-danger me-1" />{" "}
            {language === "it" ? "Novità" : "News"}
          </Nav>
          <Nav className="text-white mt-1 d-flex flex-row align-items-center options">
            <BiBroadcast className="text-danger me-1" /> Radio
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Player
        img={img}
        title={title}
        author={author}
        widthPlayer={widthPlayer}
        language={language}
      />
    </Navbar>
  );
};

export default MyNavSmall;

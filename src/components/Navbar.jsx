import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import logo from "../images/jinderbg.png";

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

function Navbar1() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container className="menudesktop">
          <Nav className="me-auto">
            <Link to="/">
              <img className="logo" src={logo} alt="" />
            </Link>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/profile">Profile</Nav.Link>
            <Nav.Link href="/notes">My Notes</Nav.Link>
            <Nav.Link href="/swipejobs">Let's Jinder</Nav.Link>
          </Nav>
        </Container>
        <div id="myNav" className="overlay">
          <Link className="closebtn" onClick={closeNav}>
            &times;
          </Link>
          <div>
            <Link to="/">
              <img className="logo" src={logo} alt="" />
            </Link>
          </div>
          <div clasName="overlay-content">
            <Link to="/" onClick={closeNav}>
              Home
            </Link>
          </div>
          <div clasName="overlay-content">
            <Link to="/profile" onClick={closeNav}>
              Profile
            </Link>
          </div>
          <div clasName="overlay-content">
            <Link to="/swipejobs" onClick={closeNav}>
              Let's Jinder
            </Link>
          </div>
          <div clasName="overlay-content">
            <Link to="/notes" onClick={closeNav}>
              My Notes
            </Link>
          </div>
        </div>
        <span className="hamburguer" onClick={openNav}>
          &#9776;
        </span>
      </Navbar>
    </>
  );
}

export default Navbar1;

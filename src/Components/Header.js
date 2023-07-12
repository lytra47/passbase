import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Header() {
  const auth = false;
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">PassBase</Navbar.Brand>

        <Nav className="me-auto nav-link-container">
          {auth ? (
            <>
              <Link to={"/"} className="nav-links">
                Home
              </Link>
              <Link to={"/"} className="nav-links">
                Saved
              </Link>
              <Link to={"/"} className="nav-links">
                Share
              </Link>
            </>
          ) : (
            <>
              <Link to={"/login"} className="nav-links">
                Login
              </Link>
              <Link to={"/signup"} className="nav-links">
                Signup
              </Link>
            </>
          )}
        </Nav>
        <Nav className="nav-logout-container">
          <Link className="nav-logout">Logout</Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;

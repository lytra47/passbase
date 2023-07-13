import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Header() {
  const auth = localStorage.getItem("user");

  function handleLogout() {
    localStorage.clear();
  }

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand>
          {" "}
          <Link to={"/"} className="nav-links">
            PassBase
          </Link>
        </Navbar.Brand>

        <Nav className="me-auto nav-link-container">
          {auth ? (
            <>
              <Link to={"/saved"} className="nav-links">
                Saved
              </Link>
              <Link to={"/"} className="nav-links">
                Shared
              </Link>
              <Link to={"/"} className="nav-links">
                Settings
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
        {auth && (
          <Nav className="nav-logout-container">
            <Link onClick={handleLogout} to="/login" className="nav-logout">
              Logout
            </Link>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
}

export default Header;

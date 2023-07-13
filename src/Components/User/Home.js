import React, { useEffect } from "react";
import SavePassword from "./subComponents/SavePassword";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const auth = localStorage.getItem("user");
  const userEmail = JSON.parse(auth).email;
  useEffect(() => {
    if (!auth) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <Container className="m-3 mx-auto ">
        <Row className=" mt-5">
          <Col xs={12} sm={12} md={6} lg={6} className="mt-5">
            <Card>
              <Card.Body>Start saving your passwords.</Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} className="mt-5">
            <Card>
              <Card.Body>Tile 2</Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={12} md={12} lg={12} className="mt-5">
            <Card>
              <Card.Body>
                <SavePassword email={userEmail} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;

import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { useEffect } from "react";

function Saved() {
  const auth = localStorage.getItem("user");
  const userEmail = JSON.parse(auth).email;
  const [userPassKey, setUserPassKey] = useState([]);

  useEffect(() => {
    fetchData(userEmail);
  }, []);

  async function fetchData() {
    let result = await fetch(`http://127.0.0.1:5000/getpass/${userEmail}`);
    result = await result.json();
    setUserPassKey(result);
    console.log(result);
  }

  return (
    <Container className="mt-5">
      <Row>
        {userPassKey.length > 0 ? (
          <>
            {userPassKey.map((pass, index) => (
              <Col md={4} key={index}>
                <Card className="h-100">
                  <Card.Body>
                    <Card.Title>{pass.saveUsername}</Card.Title>{" "}
                    <Card.Text>{pass.saveWebsite}</Card.Text>{" "}
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </>
        ) : null}
      </Row>
    </Container>
  );
}

export default Saved;

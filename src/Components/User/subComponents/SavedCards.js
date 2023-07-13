import React, { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

function SavedCards({ index, pass }) {
  const [cardFlip, setCardFlip] = useState(false);
  const date = new Date(`${pass.date}`);
  const expiryDate = new Date();
  expiryDate.setDate(expiryDate.getDate() - 90);
  const formattedDate = date.toLocaleDateString();

  function handleFlip() {
    setCardFlip((s) => !s);
  }

  return (
    <Col md={4} key={index}>
      <Card
        className={`SavedCards mt-4 ${date < expiryDate && `bg-warning`}`}
        style={{ width: "18rem", height: "18rem" }}
        onClick={handleFlip}
      >
        {!cardFlip ? (
          <>
            <Card.Header>{pass.saveWebsite}</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>{pass.saveUsername}</ListGroup.Item>

              <ListGroup.Item style={{ height: "10rem" }}>
                {pass.saveNotes}
              </ListGroup.Item>
            </ListGroup>
            <Card.Footer
              style={{
                position: "absolute",
                bottom: "0",
                left: "0",
                right: "0",
              }}
            >
              {" "}
              {date < expiryDate && (
                <Card.Text>{`Expired on ${formattedDate}`} </Card.Text>
              )}
            </Card.Footer>
          </>
        ) : (
          <>
            <Card.Header>Password</Card.Header>
            <ListGroup variant="flush d-flex ">
              <div className="">
                <ListGroup.Item>{pass.saveUsername}</ListGroup.Item>

                <ListGroup.Item>{pass.savePassword}</ListGroup.Item>
              </div>
              <Card.Footer>
                <button
                  style={{
                    position: "absolute",
                    bottom: ".5rem",

                    right: ".5rem",
                    background: "none",
                    border: "none",
                  }}
                >
                  🖋
                </button>{" "}
              </Card.Footer>
            </ListGroup>
          </>
        )}
      </Card>
    </Col>
  );
}

export default SavedCards;

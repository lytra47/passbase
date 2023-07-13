import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import FormGroup from "react-bootstrap/FormGroup";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [passCreate, setPassCreate] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    if (passCreate !== password) {
      alert("passowrd does not match");
      return;
    }

    let result = await fetch("http://127.0.0.1:5000/signup", {
      method: "post",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    result = await result.json();
    if (result.email) {
      navigate("/login");
      return;
    }
    console.log(result);
    // console.log({ name, email, password });
  }

  return (
    <Container className=" p-5">
      <div className="mt-5 p-5 col-sm-12 col-md-8 col-lg-4 bg-dark text-white rounded-3 mx-auto ">
        <Row className="mx-auto">
          <Col className=" mx-auto ">
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Form.Label>Enter User Name</Form.Label>
                <Form.Control
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                />
              </FormGroup>
              <FormGroup className="mt-4">
                <Form.Label>Enter Email address</Form.Label>
                <Form.Control
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                />
              </FormGroup>
              <FormGroup className="mt-4">
                <Form.Label>Create Password</Form.Label>
                <Form.Control
                  value={passCreate}
                  onChange={(e) => setPassCreate(e.target.value)}
                  type="password"
                />
              </FormGroup>
              <FormGroup className="mt-4">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                />
              </FormGroup>
              <Button className="mt-4" type="submit">
                Login
              </Button>
            </Form>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Signup;

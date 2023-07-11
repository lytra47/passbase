import React, { useState } from "react";
import { Form, FormGroup, Button, Container, Row, Col } from "react-bootstrap";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Email: ", email);
    console.log("Password: ", password);
  };

  return (
    <Container className=" p-5">
      <div className="mt-5 p-5 col-sm-12 col-md-8 col-lg-4 bg-dark rounded-3 mx-auto ">
        <Row className="mx-auto">
          <Col className=" mx-auto ">
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </FormGroup>
              <FormGroup className="mt-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </FormGroup>
              <Button className="mt-3" type="submit">
                Login
              </Button>
            </Form>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default LoginForm;

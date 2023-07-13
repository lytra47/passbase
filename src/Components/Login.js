import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import FormGroup from "react-bootstrap/FormGroup";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();
    let result = await fetch("http://127.0.0.1:5000/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();

    if (result.email) {
      localStorage.setItem("user", JSON.stringify(result));
      navigate("/");
      console.log(result);
      return;
    }
    alert("no user found");
  };

  return (
    <Container className=" p-5">
      <div className="mt-5 p-5 col-sm-12 col-md-8 col-lg-4 bg-dark rounded-3 mx-auto text-white">
        <Row className="mx-auto">
          <Col className=" mx-auto ">
            <Form onSubmit={handleLogin}>
              <FormGroup>
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </FormGroup>
              <FormGroup className="mt-4">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
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
};

export default LoginForm;

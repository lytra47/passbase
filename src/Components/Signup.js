// import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import FormGroup from "react-bootstrap/FormGroup";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Signup() {
  return (
    <Container className=" p-5">
      <div className="mt-5 p-5 col-sm-12 col-md-8 col-lg-4 bg-dark text-white rounded-3 mx-auto ">
        <Row className="mx-auto">
          <Col className=" mx-auto ">
            <Form>
              <FormGroup>
                <Form.Label>Enter User Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your email address"
                />
              </FormGroup>
              <FormGroup className="mt-4">
                <Form.Label>Enter Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email address"
                />
              </FormGroup>
              <FormGroup className="mt-4">
                <Form.Label>Create Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter your password"
                />
              </FormGroup>
              <FormGroup className="mt-4">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter your password"
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

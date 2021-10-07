import React from "react";
import { Form, Button } from "react-bootstrap";
import "../App.css";

const Registration = () => {
  return (
    <div className="container my-3">
      <Form>
      <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control minLength="2" required type="name" placeholder="Name" />
        </Form.Group>
        <Form.Group controlId="formSurname">
          <Form.Label>Surname</Form.Label>
          <Form.Control minLength="3" required type="surname" placeholder="Surname" />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control required type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control pattern="(?=.*\d)(?=.*[a-z]).{8,}" required type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group controlId="formConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Registration;

import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "../App.css";

const Registration = () => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    surname: "",
    emailaddress: "",
    password: "",
    confirmpassword: "",
  });

  const handleInput = (propertyName, value) => {
    setUserDetails({
      ...userDetails,
      [propertyName]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userDetails);
  };

  return (
    <div className="container my-3">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            minLength="2"
            required
            type="name"
            placeholder="Name"
            onChange={(e) => handleInput("name", e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formSurname">
          <Form.Label>Surname</Form.Label>
          <Form.Control
            minLength="3"
            required
            type="surname"
            placeholder="Surname"
            onChange={(e) => handleInput("surname", e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="Enter email"
            onChange={(e) => handleInput("emailaddress", e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            pattern="(?=.*\d)(?=.*[a-z]).{8,}"
            required
            type="password"
            placeholder="Password"
            onChange={(e) => handleInput("password", e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Comfirm Password"
            pattern={userDetails.password}
            onChange={(e) => handleInput("confirmpassword", e.target.value)}
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          disabled={userDetails.password === '' || userDetails.name === '' || userDetails.surname === '' || userDetails.emailaddress === '' || userDetails.confirmpassword === ''}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Registration;

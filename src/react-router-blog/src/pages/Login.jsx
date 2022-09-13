import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate, useOutletContext } from "react-router-dom";

const Login = () => {
  const [fields, setFields] = useState({
    email: "",
    password: "",
  });

  const [appToken, setAppToken] = useOutletContext();

  const navigate = useNavigate();

  const handleChangeInput = (event) => {
    setFields((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const resp = await fetch(
      `https://mentor.archakov.im/api/mock/login?email=${fields.email}&password=${fields.password}`
    );

    if (resp.ok) {
      const { token: serverToken } = await resp.json();
      localStorage.setItem("token", serverToken);
      setAppToken(serverToken);
      navigate("/profile");
    } else alert("Authorization error");
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          name="email"
          onChange={handleChangeInput}
          type="email"
          value={fields.email}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          name="password"
          onChange={handleChangeInput}
          type="password"
          value={fields.password}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Войти
      </Button>
    </Form>
  );
};

export default Login;

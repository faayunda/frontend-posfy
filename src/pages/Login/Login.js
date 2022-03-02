import React from "react";
import { Container, Row, Col, Button, Form, Card } from "react-bootstrap";
import Hero from "./../../assets/heroLogin.png";
import "./login.css";

export const Login = () => {
  return (
    <div>
      <Row>
        <Col className="col-7 formWrapImg">
          <img className="imgLogin" src={require("./../../assets/heroLogin.png")} />
        </Col>
        <Col className="col-5 formWrap">
          <div className="formLogin">
            <Card className="cardLogin">
              <img className="imgForm mt-4" src={require("./../../assets/logo.png")} />
              <h1 className="formTitle mb-4">User Login</h1>
              <Form className="formField">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control className="form" type="email" placeholder="Username" />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formBasicPassword">
                  <Form.Control className="form" type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="btnSubmit">
                  <Button className="button" variant="primary" type="submit">
                    Login
                  </Button>
                </Form.Group>
              </Form>
            </Card>
          </div>
        </Col>
      </Row>

      {/* <Row>
           <div className='footer'>
Posfy || copyright 2022
           </div>

       </Row> */}
    </div>
  );
};

export default Login;

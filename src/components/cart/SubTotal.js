import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
// import "./SubTotal.css";

export default function SubTotal({subtotal}){

    return (
      <Row>
        <Col xs={6}>Subtotal</Col>
        <Col xs={6}>
          <strong>{subtotal}</strong>
        </Col>
      </Row>
    );
  }
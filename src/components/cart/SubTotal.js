import React from "react";
import { Row, Col } from "react-bootstrap";
// import "./SubTotal.css";

export default function SubTotal() {
  return (
    <Row>
      <Col xs={6}>Subtotal</Col>
      <Col xs={6}>
        <strong>111</strong>
      </Col>
    </Row>
  );
}

import React from "react";
import { Row, Col } from "react-bootstrap";

export default function EstimatedTotal() {
  return (
    <Row>
      <Col xs={6}>
        <h3>Est. Total:</h3>
      </Col>
      <Col xs={6}>
        <h3>
          <span> </span>
        </h3>
      </Col>
    </Row>
  );
}

import React from "react";
import { Row, Col } from "react-bootstrap";

export default function TaxFees({ tax }) {
  return (
    <Row>
      <Col xs={6}>Est. taxes and fees (Based on V042)</Col>
      <Col xs={6}>
        <strong>{tax}</strong>
      </Col>
    </Row>
  );
}

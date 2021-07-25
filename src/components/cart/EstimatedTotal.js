import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

export default function EstimatedTotal({totalPrice, countryCode}){
    return (
      <Row>
        <Col xs={6}>
          <h3>Est. Total:</h3>
        </Col>
        <Col xs={6}>
          <h3><span> {countryCode} </span>{totalPrice}</h3>
        </Col>
      </Row>
    );
  }

import { navigate } from "gatsby";
import React from "react";
import { Button, Row, Col, InputGroup } from "react-bootstrap";

const styles = {
  mediaItemButtons: {
    paddingTop: "5px",
    paddingBottom: "5px",
    display: "flex",
  },
};

const ItemDetails = () => {
  // console.log("checkoutID ", checkoutSession.id);
  // console.log("checkSession", checkoutSession);
  // console.log("lineItem ",lineItems);
  // console.log("Line Item Id", lineItems.id);
 
  return (
    <>
      <img
        width={100}
        height={100}
        className="align-self-center mr-3"
        src=""
        alt="Generic placeholder"
      />

      <p></p>
      <Row>
        <Col xs={6}>
          <p>Price: </p>
          <strong></strong>
          <p style={{ textDecoration: "line-through" }}></p>
        </Col>
        <Col xs={6}>
          <p>Quantity: </p>
          <InputGroup size="sm" className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-sm">
            </InputGroup.Text>

            <Button
              variant="outline-secondary"
            >
              +
            </Button>
            <Button
              variant="outline-secondary"
            >
              -
            </Button>
          </InputGroup>
        </Col>
      </Row>

      <Row style={styles.mediaItemButtons}>
        <Col xs={6}>
          <Button
            variant="primary"
            size="sm"
          >
            Details
          </Button>
        </Col>
        <Col xs={6}>
          <Button
            variant="danger"
            size="sm">
            Delete
          </Button>
        </Col>
      </Row>
    </>
  );
};
export default ItemDetails;

import { navigate } from "gatsby";
import React from "react";
import { Button, Row, Col, InputGroup } from "react-bootstrap";
import Client from "shopify-buy";

const client = Client.buildClient({
  domain: "alistoretest123.myshopify.com",
  storefrontAccessToken: "8a857c0404db4c93b0a34822e576a8a1",
});

const styles = {
  mediaItemButtons: {
    paddingTop: "5px",
    paddingBottom: "5px",
    display: "flex",
  },
};

const ItemDetails = ({ lineItems, checkoutSession, setCheckoutSession }) => {
  // console.log("checkoutID ", checkoutSession.id);
  // console.log("checkSession", checkoutSession);
  // console.log("lineItem ",lineItems);
  // console.log("Line Item Id", lineItems.id);
  const {
    id,
    quantity,
    title,
    variant: {
      image: { src },
      price,
      compareAtPrice,
      product: { handle },
    },
  } = lineItems;
  // console.log();
  return (
    <>
      <img
        width={100}
        height={100}
        className="align-self-center mr-3"
        src={src}
        alt="Generic placeholder"
      />

      <p>{title}</p>
      <Row>
        <Col xs={6}>
          <p>Price: </p>
          <strong>{price}</strong>
          <p style={{ textDecoration: "line-through" }}>{compareAtPrice}</p>
        </Col>
        <Col xs={6}>
          <p>Quantity: </p>
          <InputGroup size="sm" className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-sm">
              {quantity}
            </InputGroup.Text>

            <Button
              variant="outline-secondary"
              onClick={async () => {
                const sessionAdd = await client.checkout.updateLineItems(
                  checkoutSession.id,
                  [
                    {
                      id: id,
                      quantity: quantity + 1,
                    },
                  ]
                );
                setCheckoutSession(sessionAdd);
              }}
            >
              +
            </Button>
            <Button
              variant="outline-secondary"
              onClick={async () => {
                const sessionMinus = await client.checkout.updateLineItems(
                  checkoutSession.id,
                  [
                    {
                      id: id,
                      quantity: quantity - 1,
                    },
                  ]
                );
                setCheckoutSession(sessionMinus);
              }}
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
            onClick={() => {
              navigate(`/products/${handle}`);
            }}
          >
            Details
          </Button>
        </Col>
        <Col xs={6}>
          <Button
            variant="danger"
            size="sm"
            onClick={async () => {
              const sessionDelete = await client.checkout.removeLineItems(
                checkoutSession.id,
                [id]
              );
              setCheckoutSession(sessionDelete);
            }}
          >
            Delete
          </Button>
        </Col>
      </Row>
    </>
  );
};
export default ItemDetails;

import Layout from "../components/layout";
import React, { useEffect, useState } from "react";
import Client from "shopify-buy";
import "./../components/style.css";
import { Button } from "react-bootstrap";

const client = Client.buildClient({
  domain: "alistoretest123.myshopify.com",
  storefrontAccessToken: "8a857c0404db4c93b0a34822e576a8a1",
});
export default function Product({ pageContext }) {
  const [checkoutSession, setCheckoutSession] = useState();

  useEffect(() => {
    (async () => {
      const session = await client.checkout.fetch(
        localStorage.getItem("checkoutID")
      );
      setCheckoutSession(session);
      // console.log("session", session);
    })();
  }, []);
  const {
    priceRange: {
      maxVariantPrice: { amount },
    },
    title,
    description,
    images,
  } = pageContext;
  return (
    <Layout
      totalPrice={checkoutSession && checkoutSession.totalPrice}
      currency={checkoutSession && checkoutSession.currencyCode}
      quantity={checkoutSession && checkoutSession.lineItems.length}
      checkout={checkoutSession && checkoutSession.webUrl}
    >
      <br />
      <h1>Product Details</h1>
      <br />
      <div className="purchase-card">
        <img src={images[0].originalSrc} alt="" />
        <h1>{title}</h1>
        <p>{description}</p>
        <p>
          <b>Price:</b> {amount}
        </p>
        <Button
          variant="primary"
          size="sm"
          onClick={() => {
            window.history.back();
          }}
        >
          Back
        </Button>
      </div>
    </Layout>
  );
}

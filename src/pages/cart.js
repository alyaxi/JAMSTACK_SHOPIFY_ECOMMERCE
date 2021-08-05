import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import Client from "shopify-buy";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../components/style.css";
import SubTotal from "../components/cart/SubTotal";
import TaxesFees from "../components/cart/TaxesFees";
import EstimatedTotal from "../components/cart/EstimatedTotal";
import ItemDetails from "../components/cart/ItemDetails";

const client = Client.buildClient({
  domain: "syedaliuzzaman.myshopify.com",
  storefrontAccessToken: "64795be1bac5e99d95ccee395d4301a3",
});

export default function Cart() {
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

  return (
    <Layout
      totalPrice={checkoutSession && checkoutSession.totalPrice}
      currency={checkoutSession && checkoutSession.currencyCode}
      quantity={checkoutSession && checkoutSession.lineItems.length}
      checkout={checkoutSession && checkoutSession.webUrl}
    >
      <Container>
        <br />
        <h1>My Cart</h1>
        <SubTotal subtotal={checkoutSession && checkoutSession.subtotalPrice} />
        <br />
        <TaxesFees tax={checkoutSession && checkoutSession.totalTax} />
        <hr />
        <EstimatedTotal
          totalPrice={checkoutSession && checkoutSession.totalPrice}
          countryCode={checkoutSession && checkoutSession.currencyCode}
        />
        <hr />
        <br />
        <h3>Item Details</h3>
        {checkoutSession &&
          checkoutSession.lineItems.map((item) => (
            <div className="purchase-card" key={item.id}>
              <ItemDetails
                lineItems={item}
                checkoutSession={checkoutSession}
                setCheckoutSession={setCheckoutSession}
              />
            </div>
          ))}
      </Container>
    </Layout>
  );
}

import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import Client from "shopify-buy";
import { Container } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "./../components/style.css"
import SubTotal from "../components/cart/SubTotal";
import TaxesFees from "../components/cart/TaxesFees";
import EstimatedTotal from "../components/cart/EstimatedTotal";
import ItemDetails from "../components/cart/ItemDetails";

const client = Client.buildClient({
  domain: "alistoretest123.myshopify.com",
  storefrontAccessToken: "8a857c0404db4c93b0a34822e576a8a1",
});

export default function Cart() {
  const [checkoutSession, setCheckoutSession] = useState();

  useEffect(() => {
    (async () => {
      const session = await client.checkout.fetch(
        localStorage.getItem("checkoutID")
      );
      setCheckoutSession(session);
      console.log("session", session);
    })();
  }, []);
 
 
  return (
    <Layout totalPrice = {checkoutSession && checkoutSession.totalPrice} currency= {checkoutSession && checkoutSession.currencyCode} quantity={checkoutSession && checkoutSession.lineItems.length}>
      <Container>
        <br />
        <h1>My Cart</h1>
                  <SubTotal subtotal={checkoutSession && checkoutSession.subtotalPrice} />
                  <br />
                  <TaxesFees tax={checkoutSession && checkoutSession.totalTax}/>
                  <hr />
                  <EstimatedTotal totalPrice={checkoutSession && checkoutSession.totalPrice} countryCode = {checkoutSession && checkoutSession.currencyCode} />
                  <hr/>
                  <br />
                  <h3>Item Details</h3>
        {checkoutSession &&
          checkoutSession.lineItems.map((item) => (
            <div className="purchase-card" >
                  <ItemDetails lineItems={item} key={item.id} checkoutSession={checkoutSession} setCheckoutSession={setCheckoutSession}/>
                
                  </div>
                  ))}
                  
      </Container>
    </Layout>
  );
}

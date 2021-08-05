import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import Client from "shopify-buy";

const client = Client.buildClient({
  domain: "syedaliuzzaman.myshopify.com",
  storefrontAccessToken: "64795be1bac5e99d95ccee395d4301a3",
});

export default function Home() {
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
      <div>
        <h1>Home</h1>
      </div>
    </Layout>
  );
}

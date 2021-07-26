import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import Client from "shopify-buy";

const client = Client.buildClient({
  domain: "alistoretest123.myshopify.com",
  storefrontAccessToken: "8a857c0404db4c93b0a34822e576a8a1",
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

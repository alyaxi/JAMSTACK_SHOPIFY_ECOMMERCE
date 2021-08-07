import Layout from "../components/layout";
import React, { useEffect, useState } from "react";
import "./../components/style.css";
import { Button } from "react-bootstrap";


export default function Product({ pageContext }) {
  
  const {
    priceRange: {
      maxVariantPrice: { amount },
    },
    title,
    description,
    images,
  } = pageContext;
  return (
    <Layout>
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

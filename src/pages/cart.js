import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../components/style.css";
import SubTotal from "../components/cart/SubTotal";
import TaxesFees from "../components/cart/TaxesFees";
import EstimatedTotal from "../components/cart/EstimatedTotal";
import ItemDetails from "../components/cart/ItemDetails";


export default function Cart() {
  

  return (
    <Layout>
      <Container>
        <br />
        <h1>My Cart</h1>
        <SubTotal />
        <br />
        <TaxesFees/>
        <hr />
        <EstimatedTotal/>
        <hr />
        <br />
        <h3>Item Details</h3>
        <ItemDetails />
            
      </Container>
    </Layout>
  );
}

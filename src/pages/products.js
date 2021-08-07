import React, { useEffect, useState } from "react";
import { gql, useMutation } from "@apollo/client";
import {Link, graphql} from "gatsby"
import Layout from "../components/layout";
import { Card, Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const createCheckout = gql`
mutation checkoutCreate($input: CheckoutCreateInput!) {
  checkoutCreate(input: $input) {
    checkout {
      id
      webUrl
      lineItems(first: 50){
        edges{
          node{
            id
            quantity
            title
            variant{
              id
              weight
              weightUnit
              image{
                originalSrc
              }
            }
            unitPrice{
              amount
            }
          }
        }
      }
    }
    checkoutUserErrors {
      code
      field
      message
    }
  }
}

`

const LineItemAdd = gql`
mutation checkoutLineItemsAdd($lineItems: [CheckoutLineItemInput!]!, $checkoutId: ID!) {
  checkoutLineItemsAdd(lineItems: $lineItems, checkoutId: $checkoutId) {
    checkout {
      id
      webUrl
      currencyCode
      lineItems(first: 50){
        edges{
          node{
            title
            quantity
            unitPrice{
              amount
            }
            variant{
              image{
                originalSrc
              }
              weight
              weightUnit
            }
          }
        }
      }
      
    }
    checkoutUserErrors {
      code
      field
      message
    }
  }
}

`
const Products = ({data}) => {
  console.log(data, "data component");
const [createCheckoutMutataion, {data: checkoutData}] = useMutation(createCheckout);

const [addLineItem , {data: LineitemData}] = useMutation(LineItemAdd)

useEffect(() => {
  (async() => {
    const res = await createCheckoutMutataion({
      variables: {
        input: {}
      }
    })
    console.log("checkout session created",res);
  })()
},[])
  return (
    <>
      <Layout>
        <Container>
          <br />
          <h1>Products</h1>
          <hr />
          <div style={{ display: "flex", flexDirection: "row" }}>
            {data.allShopifyProduct.edges.map(({ node: product }) => (
              <div key={product.shopifyId}>
                <Card
                  style={{ width: "18rem", height: "100%", margin: "10px" }}
                >
                  <Card.Img variant="top" src={product.images[0].originalSrc} />
                  <Card.Body>
                    <Link
                      to={`/products/${product.handle}`}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      {" "}
                      <Card.Title>{product.title}</Card.Title>{" "}
                    </Link>
                    <Card.Subtitle className="mb-2 text-muted">
                      {" "}
                      <b>Price :</b> {product.priceRange.maxVariantPrice.amount}
                    </Card.Subtitle>
                    <Card.Text>{product.description}</Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Button
                      variant="primary"
                      onClick={async() => {
                        const resAdd = await addLineItem({
                          variables:{
                            lineItems: [
                              {
                                quantity: 1,
                                variantId: product.variants[0].id.split("__")[2]
                              }
                            ],
                            checkoutId: checkoutData.checkoutCreate.checkout.id
                          }
                        })
                        console.log("Added Lineitem", resAdd);
                      }}
                    >
                      Add to Cart
                    </Button>
                  </Card.Footer>
                </Card>
              </div>
            ))}
          </div>
        </Container>
      </Layout>
    </>
  );
};
export default Products;

export const query = graphql`
  {
    allShopifyProduct {
      edges {
        node { 
          images {
            originalSrc
          }
          shopifyId
          title
          description
          availableForSale
          priceRange {
            maxVariantPrice {
              amount
            }
            minVariantPrice {
              amount
            }
          }
          variants {
            weight
            compareAtPrice
            weightUnit
            sku
            title
            id
          }
          handle
        }
      }
    }
  }
`;

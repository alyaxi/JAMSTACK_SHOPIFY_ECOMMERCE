import React, {useEffect, useState} from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import { Card, Button, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Client from "shopify-buy"

const client = Client.buildClient({
  domain: 'alistoretest123.myshopify.com',
  storefrontAccessToken: '8a857c0404db4c93b0a34822e576a8a1'
});

const Products = ({ data }) => {

  const [checkoutSession, setCheckoutSession] = useState()

  
  useEffect(() => {
    (async () => {
      const session = await client.checkout.create()
      console.log(session);
      setCheckoutSession(session)
      localStorage.setItem("checkoutID", session.id)
    })()
  }, [])

  console.log(data);
  if (!data && !data.allShopifyProduct) {
    return <h1>Loading....</h1>
  }



  return (
    <>
      <Layout totalPrice = {checkoutSession && checkoutSession.totalPrice} currency= {checkoutSession && checkoutSession.currencyCode} quantity={checkoutSession && checkoutSession.lineItems.length}>
      <Container>
        <h1 >Products</h1>
        <hr />
        <div style={{ display: "flex", flexDirection: "row" }}>
          {data.allShopifyProduct.edges.map(({ node: product }) => (
            <div key={product.shopifyId}>
              <Card style={{ width: "18rem", height: "100%", margin: "10px" }}>
                <Card.Img variant="top" src={product.images[0].originalSrc} />
                <Card.Body>
                  <Link to={`/products/${product.handle}`} style={{textDecoration:"none", color:"black"}}>
                    {" "}
                    <Card.Title>{product.title}</Card.Title>{" "}
                  </Link>
                  <Card.Subtitle className="mb-2 text-muted">
                    {" "}
                    <b>Price :</b> {product.priceRange.maxVariantPrice.amount}
                  </Card.Subtitle>
                  {/* <Card.Text>{product.description}</Card.Text> */}
                  
                </Card.Body>
                <Card.Footer>
                    <Button  variant="primary" onClick={async() => {
                      const session = await client.checkout.addLineItems(checkoutSession.id, [{
                        variantId: product.variants[0].id.split("__")[2],
                        quantity: 1
                      }])
                      setCheckoutSession(session)
                      console.log("button " , session);
                    }}>Add to Cart</Button>
                  </Card.Footer>
              </Card>

              {/* <img src={product.images[0].originalSrc} alt="" />
              <Link to={`/${product.handle}`}>
                <h3>{product.title}</h3>
              </Link>
              <p>{product.description}</p>
              <p>
                <b>Price :</b> {product.priceRange.maxVariantPrice.amount}
              </p> */}
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

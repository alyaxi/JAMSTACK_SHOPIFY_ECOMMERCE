import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import { Card, Button } from "react-bootstrap";

const Products = ({ data }) => {
  console.log(data);
  if (!data && !data.allShopifyProduct) {
    return <h1>Loading....</h1>;
  }
  return (
    <>
      <Layout>
        <h2 style={{textAlign:"center"}}>Products</h2>

        <div style={{ display: "flex", flexDirection: "row" }}>
          {data.allShopifyProduct.edges.map(({ node: product }) => (
            <div key={product.shopifyId}>
              <Card style={{ width: "18rem", height: "100%", margin: "10px" }}>
                <Card.Img variant="top" src={product.images[0].originalSrc} />
                <Card.Body>
                  <Link to={`/${product.handle}`} style={{textDecoration:"none", color:"black"}}>
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
                    <Button  variant="primary">Add to Cart</Button>
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
          }
          handle
        }
      }
    }
  }
`;

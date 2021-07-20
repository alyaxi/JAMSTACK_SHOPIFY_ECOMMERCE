import React from 'react'
import {graphql} from "gatsby"
const Products = ({data}) =>  {

    console.log(data);
    return (
        <div>
            <h2>My Products</h2>
            {data.allShopifyProduct.edges.map(({node : product}) => (
                <div key={product.shopifyId}>
                    <img src={product.images[0].originalSrc} alt="" />
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                    <p>
                    <b>Price :</b> {product.priceRange.maxVariantPrice.amount}
                        </p>
                </div>
            ))}
        </div>
    )
}
export default Products
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
            }
          }
        }
      }
    `


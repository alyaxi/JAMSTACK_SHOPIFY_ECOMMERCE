import React from 'react'
import {graphql, Link} from "gatsby"
const Products = ({data}) =>  {
    console.log(data);
    if(!data && !data.allShopifyProduct){
        return <h1>Loading....</h1>
    }
    return (
        <div>
            <h2>My Products</h2>
            {data.allShopifyProduct.edges.map(({node : product}) => (
              
                <div key={product.shopifyId}>
                    <img src={product.images[0].originalSrc} alt="" />
                    <Link to={`/${product.shopifyId}`}><h3>{product.title}</h3></Link> 
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


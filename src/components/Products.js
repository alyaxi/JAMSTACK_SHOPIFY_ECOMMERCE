// import React from 'react'
// import {graphql, useStaticQuery} from "gatsby"
// const Products = ({data}) =>  {

//     console.log(data);
//     return (
//         <div>
//             Product Page
//         </div>
//     )
// }
// export default Products
// export const query = graphql`
//     query MyQuery {
//         allShopifyProduct {
//           edges {
//             node {
//               images {
//                 originalSrc
//               }
//               shopifyId
//               title
//               description
//               availableForSale
//               priceRange {
//                 maxVariantPrice {
//                   amount
//                 }
//                 minVariantPrice {
//                   amount
//                 }
//               }
//               variants {
//                 weight
//                 compareAtPrice
//                 weightUnit
//                 sku
//                 title
//               }
//             }
//           }
//         }
//       }
//     `


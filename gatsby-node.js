exports.createPages = async ({ graphql, actions }) => {
    
    const query = await graphql(`
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
               
               title
             }
           }
         }
       }
     }
   `)

   console.log(query)
}
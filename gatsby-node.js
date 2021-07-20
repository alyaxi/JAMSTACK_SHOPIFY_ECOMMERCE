exports.createPages = async ({ graphql, actions }) => {
    const {createPage} = actions
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

   console.log(JSON.stringify(query))
     query.data.allShopifyProduct.edges.forEach(({node}) => {
    createPage({
        path: node.shopifyId,
        component: require.resolve("./src/templates/product.jsx"),
        context: node
    })
})
}
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
             handle
           }
         }
       }
     }
   `)

   console.log(JSON.stringify(query))
     query.data.allShopifyProduct.edges.forEach(({node}) => {
    createPage({
        path: `/products/${node.handle}`,
        component: require.resolve("./src/templates/product.jsx"),
        context: node
    })
})
}
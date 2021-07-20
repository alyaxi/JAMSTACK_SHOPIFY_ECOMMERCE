module.exports = {
    siteMetadata: {
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
        {
            resolve: `gatsby-source-shopify`,
            options: {
              // The domain name of your Shopify shop.
              shopName: `alistoretest123`,
              // The storefront access token
              accessToken: `8a857c0404db4c93b0a34822e576a8a1`,
            },
          },
    ]
}
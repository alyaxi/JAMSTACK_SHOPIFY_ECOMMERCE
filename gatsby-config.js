require("dotenv").config({
  path: `.env`,
})


module.exports = {
    siteMetadata: {
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
        {
            resolve: `gatsby-source-shopify`,
            options: {
              // The domain name of your Shopify shop.
              shopName: process.env.SHOP_NAME,
              // The storefront access token
              accessToken: process.env.ACCESS_TOKEN,
            },
          },
    ]
}
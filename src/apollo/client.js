import {ApolloClient, HttpLink, InMemoryCache} from "@apollo/client"
import fetch from "cross-fetch"

export const client = new ApolloClient({
    link: new HttpLink({
        uri: "https://syedaliuzzaman.myshopify.com/api/graphql",
        fetch,
        headers: {
            "X-Shopify-Storefront-Access-Token": "64795be1bac5e99d95ccee395d4301a3"
        }
    }),
    cache: new InMemoryCache()
})
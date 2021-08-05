import {ApolloClient, HttpLink, InMemoryCache} from "@apollo/client"


export const client = ApolloClient({
    link: new HttpLink({
        uri: "https://syedaliuzzaman.myshopify.com/api/2021-07/graphql",
        fetch,
    }),
    cache: new InMemoryCache()
})
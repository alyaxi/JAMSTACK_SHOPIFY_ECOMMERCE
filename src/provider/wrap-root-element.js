import React from 'react'
import Client from 'shopify-buy';

export const client = Client.buildClient({
    domain: 'alistoretest123.myshopify.com',
    storefrontAccessToken: '8a857c0404db4c93b0a34822e576a8a1'
  });
export const wrapRootElement = ({element}) => {
   
    return (
        <client>
            
            {element}
             </client>
    )
}


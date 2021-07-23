import { Link, navigate } from 'gatsby'
import React from 'react'
import "./layout.css"


//Created the Layout Component Provider

export default function Layout({children}) {
    return (
       <>
          <div className="nav">
          <Link className="active" to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/" style={{float: "right"}}  >Cart</Link>
            <Link to="/" style={{float: "right"}}>Checkout</Link>
            </div>
      
        {children}
    </>
    )
}

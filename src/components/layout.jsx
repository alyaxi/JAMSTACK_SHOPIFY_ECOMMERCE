import { Link, navigate } from 'gatsby'
import React from 'react'
import "./layout.css"
import {Navbar, Container, Nav} from "react-bootstrap"

//Created the Layout Component Provider

export default function Layout({children}) {
    return (
       <>
 <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
  <Container>
  <Navbar.Brand href="#home">Shopify Ecommerce</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link ><Link className="nav" style={{textDecoration: "none"}} to="/">Home </Link></Nav.Link>
      <Nav.Link ><Link className="nav" style={{textDecoration: "none"}} to="/products">Products </Link></Nav.Link>
    </Nav>
    <Nav>
     <Nav.Link ><Link className="nav" style={{textDecoration: "none"}} to="/cart"> Cart </Link></Nav.Link>
      <Nav.Link >
        <Link className="nav" style={{textDecoration: "none"}} to='/checkout'>Checkout</Link>
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

      
        {children}
    </>
    )
}

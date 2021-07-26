import { Link } from "gatsby";
import React from "react";
import "./layout.css";
import { Navbar, Container, Nav, Badge } from "react-bootstrap";

//Created the Layout Component Provider

export default function Layout({
  children,
  totalPrice,
  currency,
  quantity,
  checkout,
}) {
  // console.log("data = ", totalPrice);
  // console.log("data = ", currency);
  // console.log("data = ", quantity);
  // console.log("checkouted ", checkout);
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Shopify Ecommerce</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link className="nav" style={{ textDecoration: "none" }} to="/">
                  Home{" "}
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  className="nav"
                  style={{ textDecoration: "none" }}
                  to="/products"
                >
                  Products{" "}
                </Link>
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link>
                <Link
                  className="nav"
                  style={{ textDecoration: "none" }}
                  to="/cart"
                >
                  Cart
                </Link>
              </Nav.Link>
              <p>
                <Badge bg="dark" text="light">
                  {quantity}
                </Badge>
              </p>
              <Nav.Link
                onClick={() => {
                  window.open(checkout);
                }}
              >
                <Link className="nav" style={{ textDecoration: "none" }} to="">
                  Checkout
                </Link>
              </Nav.Link>
              <p>
                <Badge bg="dark" text="light">
                  {currency} {totalPrice && totalPrice.split(".")[0]}
                </Badge>
              </p>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {children}
    </>
  );
}

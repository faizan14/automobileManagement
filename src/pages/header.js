import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const Header = () => (
  <Navbar bg="light" expand="lg">
    <Navbar.Brand href="/">Automobile Sales Management</Navbar.Brand>
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#home">Purchase</Nav.Link>
        <Nav.Link href="#link">My Orders</Nav.Link>
        <Nav.Link href="#link">Sell</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;

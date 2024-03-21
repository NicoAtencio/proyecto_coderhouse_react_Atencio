import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {CartWidget} from "../cartWidget/CartWidget";
import { NavLink } from 'react-router-dom';

export const MyNavbar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={NavLink} to="/" href="#home">Tienda de deportes</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto nav mx-auto">
            <Nav.Link as={NavLink} to="/categories/Futbol">Futbol</Nav.Link>
            <Nav.Link as={NavLink} to="/categories/Basket">Basquet</Nav.Link>
            <Nav.Link as={NavLink} to="/categories/Tenis">Tenis</Nav.Link>
            <Nav.Link as={NavLink} to="/categories/Accesorios">Accesorios</Nav.Link>
          </Nav>
            <Nav.Link as={NavLink} to="/cart"><CartWidget/></Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

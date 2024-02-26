import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {CartWidget} from "../cartWidget/CartWidget";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export const MyNavbar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Tienda de deportes</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto nav mx-auto">
            <Nav.Link href="#home">Futbol</Nav.Link>
            <Nav.Link href="#link">Basquet</Nav.Link>
            <Nav.Link href="#link">Tenis</Nav.Link>
            <CartWidget />
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

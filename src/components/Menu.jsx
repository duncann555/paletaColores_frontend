import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaPalette, FaHome, FaPlus, FaInfoCircle } from "react-icons/fa";

const NavbarColores = () => {
  return (
    <Navbar expand="lg" className="navbar-custom">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <FaPalette className="me-2" />
          Paletas de Colores
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-colores" className="bg-light" />

        <Navbar.Collapse id="navbar-colores">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              <FaHome className="me-1" /> Inicio
            </Nav.Link>
            <Nav.Link as={Link} to="/crear">
              <FaPlus className="me-1" /> Crear color
            </Nav.Link>
            <Nav.Link as={Link} to="/sobre">
              <FaInfoCircle className="me-1" /> Sobre
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarColores;

import { Navbar, Container } from "react-bootstrap";
// importar el componente NavLink de la libreria react-router-dom
import { NavLink } from "react-router-dom";


export default function Navigation() {
  return (
    <>
      <Navbar bg="danger" variant="dark">
        <Container className="justify-content-start">
          <Navbar.Brand></Navbar.Brand>
          {/* Hacemos uso del componente NavLink para indicar adonde ir al seleccionar cada opcion */}
          <NavLink
            to="/"
            className={({ isActive }) => isActive ? "active ms-3" : "ms-3"}
          >
           🏠 Home
          </NavLink>

          <NavLink
            to="/contacto"
            className={({ isActive }) => isActive ? "active ms-3" : "ms-3"}
          >
            📙Contacto
          </NavLink>

        </Container>
        <div className="me-5">
        <NavLink
          to="/pasteles"
          className={({ isActive }) => isActive ? "active ms-3" : "ms-3"}
        >
          Happy Cake 🍰
        </NavLink>
        </div>
      </Navbar>
      
    </>
  );
  
}

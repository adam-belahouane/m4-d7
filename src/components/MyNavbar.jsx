import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

const MyNavbar = (props) => (
  <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
    <Link to="./">
      <Navbar.Brand href="#home">{props.brand}</Navbar.Brand>
    </Link>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="">
        <Nav.Link>Home</Nav.Link>
        <Link to="/Registration">
          <div className="nav-link">Registration</div>
        </Link>
        <Nav.Link href="#pricing">Horror</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default MyNavbar;

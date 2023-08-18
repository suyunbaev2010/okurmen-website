import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function AppHeader() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Окурмен</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">үй</Nav.Link>
            <Nav.Link href="#about">жөнүндө</Nav.Link>
            <Nav.Link href="#service">кызмат</Nav.Link>
            <Nav.Link href="#works">иштер</Nav.Link>
            <Nav.Link href="#teams">Командалар</Nav.Link>
            <Nav.Link href="#testimonials">күбөлүктөр</Nav.Link>
            <Nav.Link href="#pricing">баа койуу</Nav.Link>
            <Nav.Link href="#blog">Блог</Nav.Link>
            <Nav.Link href="#contact">Байланыш</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppHeader;

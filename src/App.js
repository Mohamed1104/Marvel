import "./App.css";
// import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Characters from "./components/Characters";
import Home from "./components/Home";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Comics from "./components/Comics/comics";
import "bootstrap/dist/css/bootstrap.min.css";
import { LinkContainer } from "react-router-bootstrap";

function App() {
  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">MARVEL</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features"></Nav.Link>
              <Nav.Link href="#pricing"></Nav.Link>
            </Nav>
            <Nav>
              <LinkContainer to="/">
                <Nav.Link>🏠Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/characters">
                <Nav.Link>Characters</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/comics">
                <Nav.Link> Comics</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <Navbar2 /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="characters" element={<Characters />} />
        <Route path="comics" element={<Comics />} />
      </Routes>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { Button , Container , Nav , Navbar , NavDropdown} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">H9</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">홈</Nav.Link>
            <Nav.Link href="#features">특징</Nav.Link>
            <Nav.Link href="#pricing">가격</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
    </div>
  );
}

export default App;

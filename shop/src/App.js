import logo from './logo.svg';
import './App.css';
import { Button , Container , Nav , Navbar , Row, Col} from 'react-bootstrap';
//import bg from './img/bg.png'; 귀찮으니까 걍 css쓸게용ㅋㅋ

function App() {
  return (
    <div className="App">
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">H9</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">홈</Nav.Link>
            <Nav.Link href="#features">특징</Nav.Link>
            <Nav.Link href="#pricing">가격</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className='main-bg'></div>

      <div>
        <Container>
          <Row>
            <Col sm>
              <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="80%"/>
              <h4>상품명</h4>
              <p>상품설명</p>
            </Col>
            <Col sm>
            <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="80%"/>
              <h4>상품명</h4>
              <p>상품설명</p>
            </Col>
            <Col sm>
            <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="80%"/>
              <h4>상품명</h4>
              <p>상품설명</p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
    </div>
  );
}

export default App;

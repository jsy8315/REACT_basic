import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import { Button , Container , Nav , Navbar , Row, Col} from 'react-bootstrap';
//import bg from './img/bg.png'; 귀찮으니까 걍 css쓸게용ㅋㅋ
import data from './data.js';


function App() {

  let [shoes, shoesSetting] = useState(data)

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
            { 
              [1,2,3].map(function(i){
                return ( <ProductDetail shoes={shoes} i={i}/>)
              }) 
            }
          </Row>
        </Container>
      </div>
    </>
    </div>
  );
}

function ProductDetail(props) {
  return (
    <Col sm>
      <img src={`https://codingapple1.github.io/shop/shoes${props.i}.jpg`} width="80%"/>
      <h4>{props.i}</h4>
      <h4>{props.shoes[props.i - 1].title}</h4>
      <p>{props.shoes[props.i - 1].price}</p>
    </Col>
  )
}

export default App;

import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import { Button , Container , Nav , Navbar , Row, Col} from 'react-bootstrap';
//import bg from './img/bg.png'; 귀찮으니까 걍 css쓸게용ㅋㅋ
import data from './data.js';
import { Routes, Route, Link , useNavigate, Outlet } from 'react-router-dom'
import DetailPage from './routes/DetailPage.js';


function App() {

  let [shoes, shoesSetting] = useState(data)
  let navigate = useNavigate();

  return (
    <div className="App">
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">H9</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{ navigate('/') }}>홈</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/detail') }}>자세히보기</Nav.Link>
            <Nav.Link onClick={()=>{ navigate(-1) }}>뒤로가기</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Link to="/">홈</Link>
      <Link to="/detail">상세페이지</Link>

      <Routes>
        <Route path='/' element={
          <>
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
        }/>
        <Route path='/detail/:idUsingParams' element={ <DetailPage shoes={shoes}/> }/>
        <Route path='*' element={ <div>없는페이지요</div>}/>
        <Route path='/about' element={ <About01/> }>
          <Route path='member' element={ <About02/> }/> {/*<Route path='/about/member' element={ <About/> }/>*/}
          <Route path='location' element={ <About02/> }/>{/*<Route path='/about/location' element={ <About/> }/>*/}
        </Route>
        <Route path='/event' element={ 
          <div>
            <h2>오늘의 이벤트</h2>
            <Outlet/>
          </div> 
        }>
          <Route path='one' element={ <div><h4>첫 주문시 양배추즙 서비스</h4></div> }/>
          <Route path='two' element={ <div><h4>생일기념 쿠폰받기</h4></div> }/>
        </Route>
      </Routes>
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

function About01() {
  return (
    <div>
      <h4>회사정보임01</h4>
      <Outlet/>
    </div>
  )
}

function About02() {
  return (
    <div>
      <h4>회사정보임02</h4>
    </div>
  )
}

export default App;

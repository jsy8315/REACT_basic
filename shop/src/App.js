import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import { Button , Container , Nav , Navbar , Row, Col} from 'react-bootstrap';
import data from './data.js';
import { Routes, Route, Link , useNavigate, Outlet } from 'react-router-dom'
import DetailPage from './routes/DetailPage.js';
import axios from 'axios';


function App() {

  let [shoes, setShoes] = useState(data)
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
                      shoes.map(function(a, i){
                        return ( <ProductDetail shoes={shoes[i]} i={i} key={i}/>)
                      }) 
                    }
                  </Row>
                </Container>
              </div>
              <button onClick={()=>{
                axios.get('https://codingapple1.github.io/shop/data2.json')
                .then((결과)=>{
                  console.log('ajax test success!');
                  let copy = [...shoes, ...결과.data];
                  setShoes(copy);
                })
                .catch(()=>{
                  console.log('ajax test fail')
                })
              }}>상품더보기</button>
          </>
        }/>
        <Route path='/detail/:idUsingParams' element={ <DetailPage shoes={shoes}/> }/>
        <Route path='*' element={ <div>없는페이지</div>}/>
        <Route path='/about' element={ <About01/> }>
          <Route path='member' element={ <About02/> }/> {/*<Route path='/about/member' element={ <About/> }/>*/}
          <Route path='location' element={ <About03/> }/>{/*<Route path='/about/location' element={ <About/> }/>*/}
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
  let navigate = useNavigate();
  return (
    <Col sm>
      <Link to={`/detail/${props.i}`} onClick={() => { navigate(`/detail/${props.i}`); }}>
        <img src={`https://codingapple1.github.io/shop/shoes${props.i + 1}.jpg`} width="80%"/>
      </Link>
      <h4>{props.i}</h4>
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
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
      <h4>회사정보임03-member url로 들어옴</h4>
      <h4>NestedRoutes를 써서 outlet자리에 표시되는 부분</h4>
    </div>
  )
}

function About03() {
  return (
    <div>
      <h4>회사정보임03-location url로 들어옴</h4>
      <h4>NestedRoutes를 써서 outlet자리에 표시되는 부분</h4>
    </div>
  )
}

export default App;

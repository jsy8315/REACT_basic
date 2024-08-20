import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import { Button , Container , Nav , Navbar , Row, Col} from 'react-bootstrap';
import data from './data.js';
import { Routes, Route, Link , useNavigate, Outlet } from 'react-router-dom'
import DetailPage from './routes/DetailPage.js';
import axios from 'axios';


function App() {

  let [shoes, shoesSetting] = useState(data)
  let navigate = useNavigate();
  let [moreShoes, moreShoesSetting] = useState(false);
  let [moreShoesList, moreShoesListSetting] = useState();

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
              <div>
                <Container>
                  <Row>
                    { 
                      [0, 1, 2].map(function(i){
                        if (moreShoes == true) {
                          return ( <ProductDetail02 moreShoesList = {moreShoesList} i={i}/>)
                        }
                        else {
                          console.log('신발더보기02 실패')
                        }
                      }) 
                    }
                  </Row>
                </Container>
              </div>
              <button onClick={()=>{
                axios.get('https://codingapple1.github.io/shop/data2.json')
                .then((결과)=>{
                  console.log('ajax test success!');
                  console.log(결과.data);
                  console.log(결과.data[0]);
                  console.log(결과.data[1]);
                  console.log(결과.data[2]);

                  moreShoesSetting(true);
                  console.log('moreShoes상태');
                  console.log(moreShoes);

                  moreShoesListSetting(결과.data);
                  console.log('moreShoesList목록');
                  console.log(moreShoesList.data);
                  
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
      <Link to={`/detail/${props.i - 1}`} onClick={() => { navigate(`/detail/${props.i}`); }}>
        <img src={`https://codingapple1.github.io/shop/shoes${props.i}.jpg`} width="80%"/>
      </Link>
      <h4>{props.i}</h4>
      <h4>{props.shoes[props.i - 1].title}</h4>
      <p>{props.shoes[props.i - 1].price}</p>
    </Col>
  )
}

function ProductDetail02(props) {
  let navigate = useNavigate();
    return (
      <Col sm>
        <Link to={`/detail/${props.i - 1}`} onClick={() => { navigate(`/detail/${props.i}`); }}>
          <img src={`https://codingapple1.github.io/shop/shoes${props.i} + 3.jpg`} width="80%"/>
        </Link>
        <h4>{props.i + 4}</h4>
        <h4>{props.moreShoesList[props.i].title}</h4>
        <p>{props.moreShoesList[props.i].price}</p>
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

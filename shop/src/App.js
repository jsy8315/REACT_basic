import logo from './logo.svg';
import { createContext, useEffect, useState } from 'react';
import './App.css';
import { Button , Container , Nav , Navbar , Row, Col} from 'react-bootstrap';
import data from './data.js';
import { Routes, Route, Link , useNavigate, Outlet } from 'react-router-dom'
import DetailPage from './routes/DetailPage.js';
import axios from 'axios';
import Cart from './routes/Cart.js';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'  

export let Context1 = createContext(); //context를 만들어줌 context는 state보관함

function App() {

  let [shoes, setShoes] = useState(data)
  let navigate = useNavigate();

  let result = useQuery(['작명'], ()=>{
    axios.get('https://codingapple1.github.io/userdata.json')
    .then((a)=>{ return a.data })
  });

  // localStorage로 최근 본 상품 보여주기 (watched란 빈 어레이 생성하고 시작)
  useEffect(()=>{
    console.log(result.data);
    let watched = localStorage.getItem('watched')
    if(watched == null) {
      localStorage.setItem('watched', JSON.stringify( [] ));
    }
  }, [])

  // context API 테스트 (자식은 props 없이 state 사용 가능)
  let [재고] = useState([10, 11, 12]); //Detail, TabContent 컴포넌트에서 쓰고 싶음

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
            <Nav.Link onClick={()=>{ navigate('/cart') }}>장바구니</Nav.Link>
          </Nav>
          <Nav className="ms-auto">😁방가방가 Jung^_^😁</Nav>
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
              <Button onClick={()=>{
                axios.get('https://codingapple1.github.io/shop/data2.json')
                .then((결과)=>{
                  console.log('ajax test success!');
                  let copy = [...shoes, ...결과.data];
                  setShoes(copy);
                })
                .catch(()=>{
                  console.log('ajax test fail')
                })
              }}>상품더보기</Button>
              <div>
                { result.data }
                { result.isLoading && '로딩중' }
                { result.error && '에러나면 true 뜸'}
              </div>
          </>
        }/>
        <Route path='/detail/:idUsingParams' element={ 
          <Context1.Provider value={{ 재고, shoes }}>  {/* 여기 안의 모든 컴포넌트는 재고, shoes 사용 가능 */}
            <DetailPage shoes={shoes}/> 
          </Context1.Provider>
          }/>
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
        <Route path='/cart' element={ <Cart/> }>

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

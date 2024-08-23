import { useContext, useEffect, useState } from "react";
import { useDispatch } from 'react-redux'
import { Link, useParams, useNavigate } from "react-router-dom"
import styled from "styled-components";
import { Nav} from 'react-bootstrap';
import '/Users/suyoung/Desktop/REACT_basic/shop/src/App.css';
import { configureStore, createSlice } from '@reduxjs/toolkit'
import {Context1} from '../App.js'
import { detailCart } from '../store/cartSampleSlice.js';


let YellowBtn = styled.button`
  background : ${ props =>  props.bg }; 
  color : ${ props =>  props.bg == 'blue' ? 'white' : 'black'}; 
  padding : 10px;
`
// props => props.bg는 외부 라이브러리 사용법이라 걍 복붙 ㄱㄱ

// // 기존 스타일 복사도 가능함
let NewBtn = styled.button(YellowBtn);

// props로 컴포넌트 재활용가능
let testDiv = styled.button`
  background-color : ${ props =>  props.divBg };  
  color : ${ props => props.bg };
  padding : 10px;
`


export default function DetailPage(props) {

  let {재고, shoes} = useContext(Context1);
  let dispatch = useDispatch();
  let {idUsingParams} = useParams();
  let navigate = useNavigate();
  let [num, setNum] = useState('');
  let [count, setCount] = useState(0);
  let [alert01, setAlert01] = useState(true);
  let [탭, 탭변경] = useState(0);
  let [fadeDetailPage, setFadeDetailPage] = useState('');
  let 찾은상품01 = JSON.stringify(props.shoes.find(x => x.id == idUsingParams));
  // let 찾은상품02 = props.shoes.find(x => x.id == idUsingParams).id;


  // localStorage로 최근 본 상품 보여주기
  useEffect(()=>{
    console.log("shoes : " + JSON.stringify(props.shoes));
    console.log("detail 상품의 id : " + idUsingParams);
    console.log("찾은상품01 : " + 찾은상품01);
    // console.log("찾은상품02 : " + 찾은상품02);
    let watchedList = JSON.parse(localStorage.getItem('watched'));
    watchedList.push(props.shoes[idUsingParams].id);
    let watchedListSet = new Set(watchedList);
    let watchedListSetArray = Array.from(watchedListSet);
    localStorage.setItem('watched', JSON.stringify(watchedListSetArray));
    //어레이 > 셋 > 어레이

    
  }, [])

  // Detail 컴포넌트 로드시 투명도가 0에서 1로 서서히 증가하는 애니메이션
  useEffect(()=>{
    let a = setTimeout(()=>{setFadeDetailPage('end')}, 100);
    return ()=>{
      clearTimeout(a);
      setFadeDetailPage('');
    }
  }, []
  )

  useEffect(()=>{
    let a = setTimeout(()=>{ setAlert01(false)  }, 2000)
    console.log("useEffect Test")
    return ()=>{
      // 기존타이머가 100개 쌓였을 수도 있으니 기존타이머는 제거해주세요! clean uo function 실행하자
      console.log("clean up function test")
      clearTimeout(a) //타이머제거해주는 함수
    }
  }, [count])
  useEffect(()=>{
    if (isNaN(num) == true){
      alert('그러지마라01')
    }
  }, [num])

  
  if (idUsingParams == props.shoes[idUsingParams].id) {
  return (
    <div className={`detailContainer ${fadeDetailPage}`}>
      {
        alert01 == true ? 
        <div className="alert alert-warning">
          2초이내 구매시 할인
        </div> : null
      }
      <YellowBtn bg="blue">버튼</YellowBtn>
      <YellowBtn bg="red">버튼</YellowBtn>
      <NewBtn bg="yellow">뉴버튼</NewBtn>
      <YellowBtn bg="green">테스트Div</YellowBtn>
      {재고}
      <button onClick={()=>{ setCount(count+1) }}>버튼</button>
      <div className="row">
        <div className="col-md-6">
        <Link to="/detail/0" onClick={() => { navigate('/detail/0'); }}>
          <img src={`https://codingapple1.github.io/shop/shoes${props.shoes[idUsingParams].id + 1}.jpg`} width="100%" alt="Product Image"/>
        </Link>
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{props.shoes[idUsingParams].title}</h4>
          <p>{props.shoes[idUsingParams].content}</p>
          <p>{props.shoes[idUsingParams].price}</p>
        </div>
        <input onChange={ (e) => { setNum(e.target.value)}} />
        <button className="btn btn-danger" id="detailOrder">주문하기</button>
        <button className="btn btn-primary" id="detailCart" onClick={()=>{
          dispatch(detailCart({id : props.shoes[idUsingParams].id, name : props.shoes[idUsingParams].title, count : 1}
          ))
          console.log({id : props.shoes[idUsingParams].id, name : props.shoes[idUsingParams].title, count : 1})
        }
          
        } >장바구니</button>
      </div>
      <Nav variant="tabs"  defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link eventKey="link0" onClick={() => {탭변경(0)}}>버튼0</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link1" onClick={() => {탭변경(1)}}>버튼1</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link2"onClick={() => {탭변경(2)}}>버튼2</Nav.Link>
          </Nav.Item>
        </Nav>
        <TabContent 탭={탭}/>
      </div> 
      
      
    )
    
    }
    else {
      return (
        <div>
          <h2>잘못오셨어요</h2>
        </div>
      )
    }
    
    // 컴포넌트로 리액트에서 탭UI 만들기
    function TabContent({탭}) {

      let [fade, setFade] = useState('')

      useEffect(()=>{
        let a = setTimeout(()=>{ setFade('end') }, 100)
        return ()=>{
          clearTimeout(a);
          setFade('');
        }
      }, [탭])

      return <div className={`start ${fade}`}>
        {[<div>내용0{재고}</div>, <div>내용1</div>, <div>내용2</div>][탭]}
      </div>
    }
  }
//   export default DetailPage; 위에 export 안쓰고 아래에 이렇게 써도 됨


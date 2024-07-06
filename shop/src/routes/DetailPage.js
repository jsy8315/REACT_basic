import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom"
import styled from "styled-components";


let YellowBtn = styled.button`
  background : ${ props =>  props.bg }; 
  color : ${ props =>  props.bg == 'blue' ? 'white' : 'black'}; 
  padding : 10px;
`

// // 기존 스타일 복사도 가능함
let NewBtn = styled.button(YellowBtn);

let testDiv = styled.div`
  background-color : ${ props =>  props.bg }; 
  padding : 10px;
`
let NumCheckBTN = styled.button`
  color : yellow

`


export default function DetailPage(props) {

    let {idUsingParams} = useParams();
    let navigate = useNavigate();
    
    useEffect(()=>{
      let a = setTimeout(()=>{ setAlert(false)  }, 1000)
      console.log("나중에 되나??")
      return ()=>{
        console.log("진짜로 먼저 실헹되나???")
        
        clearTimeout(a)
      }
    }
    )
    
    useEffect(()=>{
      console.log(inputTestClick);
      typeof inputTestClick == Number ? 
      <btn className="btn btn-warning">형님 숫자만 넣으시라고요 기분도 안 좋은데</btn> :
      null
    })

    let [count, setCount] = useState(0);
    let [alert, setAlert] = useState(true);
    let [inputTest, setInputTest] = useState('');
    let [inputTestClick, setInputTestClick] = useState('');
    let [numCheckBtn, setNumCheckBtn] = useState(false)

    if (idUsingParams == props.shoes[idUsingParams].id) {
    return (
      <div className="container">
        {
          alert == true ? 
          <div className="alert alert-warning">
            2초이내 구매시 할인
          </div> : null
        }
        <YellowBtn bg="blue">버튼</YellowBtn>
        <YellowBtn bg="red">버튼</YellowBtn>
        <NewBtn bg="yellow">뉴버튼</NewBtn>
        <testDiv bg="green">테스트Div</testDiv>2
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

            <div>
            <input onChange={(e)=>{setInputTest(e.target.value);
              console.log(inputTest);
            }} 
            />
            </div>
            <NumCheckBTN>
              
            </NumCheckBTN>
            <button className="btn btn-danger" onClick={()=>{
              setInputTestClick(inputTest);
            }}>주문하기</button> 
          </div>
        </div>
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
  }

//   export default DetailPage; 위에 export 안쓰고 아래에 이렇게 써도 됨
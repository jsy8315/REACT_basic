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


export default function DetailPage(props) {

    let {idUsingParams} = useParams();
    let navigate = useNavigate();
    
    useEffect(()=>{
      let a = setTimeout(()=>{ setAlert(false)  }, 2000)
      console.log("나중에 되나??")
      return ()=>{
        console.log("진짜로 먼저 실헹되나???")
        clearTimeout(a)
      }
    }
    )

    let [count, setCount] = useState(0)
    let [alert, setAlert] = useState(true)

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
            <button className="btn btn-danger">주문하기</button> 
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
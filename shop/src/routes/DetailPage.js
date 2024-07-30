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
    let [num, setNum] = useState('');
    let [count, setCount] = useState(0);
    let [alert01, setAlert01] = useState(true);
    
    useEffect(()=>{
      setTimeout(()=>{ setAlert01(false)  }, 2000)
    }, [])

    useEffect(()=>{
      if (isNaN(num) == true){
        alert('그러지마라01')




      }
    }, [num])
  
    
    if (idUsingParams == props.shoes[idUsingParams].id) {
    return (
      <div className="container">
        {
          alert01 == true ? 
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
          </div>
          <input onChange={ (e) => { setNum(e.target.value)}} />
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
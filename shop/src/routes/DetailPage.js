import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom"
import styled from "styled-components";


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

    let {idUsingParams} = useParams();
    let navigate = useNavigate();
    let [num, setNum] = useState('');
    let [count, setCount] = useState(0);
    let [alert01, setAlert01] = useState(true);
    
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
        <YellowBtn bg="green">테스트Div</YellowBtn>
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
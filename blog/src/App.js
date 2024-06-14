/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  // 서버에서 가져왔다고 가정
  let post = "광명 우동 맛집";
  let [글제목, 글제목변경] = useState(['남자 코트 추천', "가산 우동 맛집", "다이도터 독학"])
  let [logo, setLogo] = useState('ReactBlog');
  let [좋아요, 좋아요변경] = useState(0);
  let [modal, setModal] = useState(false);

  return (
    <div className="App">
      <div className='black-nav'>
        <h4 id={post} style={{color : 'yellow', fontSize : '40px'}}>{logo}</h4>
        {/* <h4>블로그임</h4> -> 실제 서비스였으면 서버 같은데서 블로그 글 가져와서 보여줄듯 */}
      </div>
      <div className='list'>
        <h4>
          {글제목[0]} <span onClick={()=>좋아요변경(좋아요+1)}>👍</span> { 좋아요 }
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>
          {글제목[1]} <span onClick={()=>{
            //let copy = 글제목;
            let copy = [...글제목]; //-> 괄호 벗겨주고 다시 씌워주세요 : 화살표가 달라짐
            copy[1] = " 우동 맛집";
            글제목변경(copy);
            console.log(글제목 == copy);
            }}>🍔</span>
        </h4>
        <p>2월 18일 발행</p>
      </div>
      <div className='list'>
        <h4>{글제목[2]}</h4>
        <p>2월 19일 발행</p>
      </div>
      <button onClick={()=>{
        let copy02 = [...글제목];
        console.log(copy02);
        copy02.sort();
        console.log(copy02);
        글제목변경(copy02);
      }}>
        글제목 가나다순 정렬</button>
      {/* <Modal/> */}
      <Modal02/>

      {
        modal == true ? <Modal/> : null
      }

    </div>
  );
}

function Modal() {
  return (
    <div className='modal'>
    <h4>제목</h4>
    <p>날짜</p>
    <p>상세내용</p>
  </div>
  )
}

let Modal02 = () => {
  return (
    <div className='modal02'>
    <h4>제목</h4>
    <p>날짜</p>
    <p>상세내용</p>
  </div>
  )
}

export default App;

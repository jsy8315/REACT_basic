/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  // 서버에서 가져왔다고 가정
  let post = "광명 우동맛집";
  let [글제목, 글제목변경] = useState(['남자 코트 추천', "가산 우동 맛집", "다이도터 독학"]);
  let [logo, setLogo] = useState('ReactBlog');
  let [좋아요, 좋아요변경] = useState([0, 0, 0]);
  let [modalShow, setModalShow] = useState(false);
  let [clickedTitle, setClickedTitle] = useState('notYet');
  let [입력값, 입력값변경] = useState('');


  return (
    <div className="App">
      <div className='black-nav'>
        <h4 id={post} style={{color : 'deepskyblue', fontSize : '40px'}}>{logo}</h4>
        {/* <h4>블로그임</h4> -> 실제 서비스였으면 서버 같은데서 블로그 글 가져와서 보여줄듯 */}
      </div>
      {/* <div className='list'>
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
        <h4 onClick={()=>{ 
          setCntShowModal(cntShowModal+1);
          cntShowModal % 2 == 1 ? setModalShow(false) : setModalShow(true)
          }}>{글제목[2]}</h4>
        <p>2월 19일 발행</p>
      </div> */}

      {
        글제목.map(function(a, i){
          return (
            <div className='list' key={i}>
              <h4 onClick={()=>{ setModalShow(true); setClickedTitle(글제목[i]);}}>{a}
                <span onClick={(e)=>{
                  e.stopPropagation();
                  let copyLike = [...좋아요];
                  copyLike[i] += 1;
                  좋아요변경(copyLike);} }>👍
                </span> { 좋아요[i] }
                <button onClick={
                  (e)=>{
                    e.stopPropagation();
                    let copyTitle04 = [...글제목];
                    copyTitle04.splice(i, 1);
                    글제목변경(copyTitle04);

                    //글제목.splice(i, 1);
                    //글제목변경(글제목);
                    // 이 경우 글제목 배열을 직접 변경합니다. 
                    // 그러나 React는 상태가 변경되었는지 확인하기 위해 얕은 비교(shallow comparison)를 사용합니다. 
                    // 따라서 참조(reference)가 변경되지 않으면 React는 상태가 변경되었다고 인식하지 않을 수 있습니다. 
                    // 즉, 글제목 배열의 내용이 바뀌어도 배열 자체의 참조는 동일하므로 React는 상태가 변경된 것을 감지하지 못할 수 있습니다.
                  }
                  }>
                  삭제
                </button>
              </h4>
            <p>2월 19일 발행</p>
          </div>
          )
        })
      } 
      
      <button onClick={()=>{
        let copy02 = [...글제목];
        console.log(copy02);
        copy02.sort();
        console.log(copy02);
        글제목변경(copy02);
      }}>
        글제목 가나다순 정렬</button>

      <div>
        <input onChange={(e)=>{
          입력값변경(e.target.value);
          console.log(입력값); }} 
        />
        <button onClick={
          ()=>{
            let copyTitle02 = [...글제목];
            copyTitle02.push(입력값);
            글제목변경(copyTitle02);
            좋아요.push(0);
            좋아요변경(좋아요);
          }
          }>
            글발행
        </button>
      </div>


      {
        modalShow == true ? <Modal color={'deepskyblue'} 작명={글제목} 글제목변경프롭스={글제목변경} 
        현재글제목={clickedTitle}
        /> : null
      }

    </div>
  );
};

function Modal(props) {
  return (
    <div className='modal' style={{background : props.color}}>
    <h4>{
      props.현재글제목
    }</h4>
    <p>날짜요</p>
    <p>상세내용이용</p>
    <button 
      onClick={()=>{
        let copyTitle = [...props.작명]
        copyTitle[0] = '여자코트 추천';
        props.글제목변경프롭스(copyTitle);
        } }>
      글수정
    </button>
  </div>
  )
}

// let Modal02 = () => {
//   return (
//     <div className='modal02'>
//     <h4>제목</h4>
//     <p>날짜</p>
//     <p>상세내용</p>
//   </div>
//   )
// }

export default App;

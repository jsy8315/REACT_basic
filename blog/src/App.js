import logo from './logo.svg';
import './App.css';

function App() {

  // 서버에서 가져왔다고 가정
  let post = "광명 우동 맛집";
 
  return (
    <div className="App">
      <div className='black-nav'>
        <h4 id={post} style={{color : 'red', fontSize : '40px'}}>놀랍게도 블로그임</h4>
        {/* <h4>블로그임</h4> -> 실제 서비스였으면 서버 같은데서 블로그 글 가져와서 보여줄듯 */}
      </div>
      <h4>{ post }</h4>
    </div>
  );
}

export default App;

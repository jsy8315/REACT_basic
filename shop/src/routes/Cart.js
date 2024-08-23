import {Table} from 'react-bootstrap' ;
import { useDispatch, useSelector } from 'react-redux';
import { memo, useState , useMemo} from 'react';
import { upCount } from '../store/cartSampleSlice.js';
import { changeName, increase, increase02 , increase03 } from '../store/userSlice.js';

//성능 개선을 위한 재렌더링 방지 memo test
let Child = memo(
    function(){
        console.log("재렌더링");
        return <div>child 컴포넌트 입니다</div>
    }
)

export default function Cart(){
    console.log("Cart 재렌더링");
    let a = useSelector((state)=>{ return state });
    let dispatch = useDispatch(); //store.js로 요청보내주는 함수
    let [count, setCount] = useState(0);

    return(
        <div>
            {/* 성능 개선을 위한 재렌더링 방지 memo test */}
            <Child count={count}></Child>
            <button onClick={() => {
                console.log("자식 Child 재렌더링");
                setCount(count+1)
            }}>+</button>

            <h2>{a.user.name}({a.user.age}세)의 장바구니</h2>
            <button onClick={()=>{
                dispatch(increase());
            }}>1떡국</button>
            <button onClick={()=>{
                dispatch(increase02());
            }}>10떡국</button>
            <button onClick={()=>{
                dispatch(increase03(100));
            }}>100떡국</button>
            <Table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경하기</th>
                  </tr>
                </thead>
                {
                a.cartSample.map((a02, i)=>
                    <tbody>
                        <tr>
                            <td>{a.cartSample[i].id}</td>
                            <td>{a.cartSample[i].name}</td>
                            <td>{a.cartSample[i].count}</td>
                            <td>
                                <button onClick={()=>{
                                    dispatch(upCount(a.cartSample[i].id));
                                }}>+</button>
                            </td>
                        </tr>
                    </tbody>
                    )
                }
            </Table> 
        </div>
    )
}
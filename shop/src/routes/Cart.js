import {Table} from 'react-bootstrap' 
import { useDispatch, useSelector } from 'react-redux'
import { changeName } from '../store.js';
import { upCount } from '../store.js';
import { upAge } from '../store.js';


export default function Cart(){

    let a = useSelector((state)=>{ return state });
    console.log(a.cartSample[0].id);
    let dispatch = useDispatch() //store.js로 요청보내주는 함수

    // 이런 형식의 데이터였음
    // [
    //     {id : 0, name : 'White and Black', count : 2},
    //     {id : 2, name : 'Grey Yordan', count : 1}
    //   ] 

    return(
        <div>

            {a.user.name}({a.user.age}세)의 장바구니
            <button onClick={()=>{
                dispatch(upAge());
            }}>1떡국</button>
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
                                    dispatch(changeName());
                                    // dispatch(upCount());
                                    console.log(a.user)
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
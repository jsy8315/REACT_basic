import {Table} from 'react-bootstrap' 
import { useSelector } from 'react-redux'


export default function Cart(){

    let a = useSelector((state)=>{ return state });
    console.log(a.cartSample[0].id);
    console.log(a.cartSample[0].name);


    // 이런 형식의 데이터였음
    // [
    //     {id : 0, name : 'White and Black', count : 2},
    //     {id : 2, name : 'Grey Yordan', count : 1}
    //   ] 

    return(
        <div>
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
                a.cartSample.map(function(a02, i){
                    return(<CartStock  a02={a02} i={i}/>)
                })
                }
            </Table> 
        </div>
    )

    function CartStock(props){
        console.log(props)
        return (
            <tbody>
            <tr>
                <td>{props.a02.id}</td>
                <td>{props.a02.name}</td>
                <td>{props.a02.count}</td>
                <td></td>
            </tr>
        </tbody>
        )
    }
}
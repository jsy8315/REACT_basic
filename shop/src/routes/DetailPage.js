import { useParams } from "react-router-dom"

export default function DetailPage(props) {

    let {idUsingParams} = useParams();
    console.log(idUsingParams);
    
    if (idUsingParams == props.shoes[idUsingParams].id) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={`https://codingapple1.github.io/shop/shoes${props.shoes[idUsingParams].id + 1}.jpg`} width="100%" />
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
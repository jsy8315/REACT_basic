export default function DetailPage() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
          </div>
          <div className="col-md-6">
          <h4 className="pt-5">상품명</h4>
          <p>상품설명</p>
          <p>120000원</p>
          <button className="btn btn-danger">주문하기</button> 
      </div>
    </div>
  </div> 
    )
  }

//   export default DetailPage; 위에 export 안쓰고 아래에 이렇게 써도 됨
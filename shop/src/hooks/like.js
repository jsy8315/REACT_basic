import { useState } from "react";

export function useLike() {
    //custom hook으로 코드 재사용하기
    let [like, setLike] = useState(0);

    function addLike(){
      setLike(a => a + 1);
    }
    return [like, addLike];
}
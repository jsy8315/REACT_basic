import { useEffect, useState } from "react";
import axios from 'axios';


export function useName() {
    //custom hook으로 코드 재사용하기
    let [name, setName] = useState('아집에가고싶다');
    useEffect(()=>{
        axios.get('/username.json').then((r)=>{
            setName(r.data);
            console.log(r.data);
        })
    })
    return name;
}
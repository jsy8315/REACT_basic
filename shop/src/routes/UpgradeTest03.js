import { useState , useTransition, useDeferredValue, useEffect} from "react";
import { Button , Container , Nav , Navbar , Row, Col} from 'react-bootstrap';


let a = new Array(10).fill(0);

function UpgradeTest03() {
    let [ name, setName ] = useState('');
    let [isPending, startTransition] = useTransition();
    let state = useDeferredValue(name); //변동 사항이 생기면 늦게 처리해줌

    // state 변경함수 사용할때 주의점 : async
    let [count, setCount] = useState(0);
    let [age, setAge] = useState(20);

    useEffect(()=>{
            if (count < 3 && count > 0) {
                setAge(age + 1);
            }
        }, [count]);

    return (
        <div className="UpgradeTest03">
            <input onChange={(e)=> { 
                startTransition(()=>{
                    setName(e.target.value);
                })
                } }/>
            <h4> { name }</h4>
            {
                isPending ? '성능개선03 샘플코드 로딩중이요' :
                a.map(()=>{
                    return <div>{state}</div>
                })
            }
            <div>
                <div>안녕? 내 내이는 {age}</div>
                <Button onClick={
                    ()=>{
                        setCount( count+1 );
                    }
                }>1떡국</Button>
            </div>
        </div>
    )
}

export default UpgradeTest03;
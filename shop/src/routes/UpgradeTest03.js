import { useState , useTransition, useDeferredValue} from "react";

let a = new Array(10000).fill(0);
function UpgradeTest03() {
    let [ name, setName ] = useState('');
    let [isPending, startTransition] = useTransition();
    let state = useDeferredValue(name); //변동 사항이 생기면 늦게 처리해줌

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
        </div>
    )
}

export default UpgradeTest03;
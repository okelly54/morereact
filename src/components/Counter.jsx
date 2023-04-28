import React from 'react';
import {useState} from 'react';

let x = document.createElement('div');

const Counter = () => {
    const [count, setCount] = useState(0);
    const [history, setHistory] = useState([]);
    const handleClick = (e) => {
        const change = Number.parseInt(e.target.innerText, 10);
        setHistory([...history, `${count} + ${change} = ${count + change}`, ...history]);

    }
    return (
        <>
        <input value = {count}/>
        <button id="min5" onClick={()=>setCount(count-5)}>-5</button>

        <button id="min1" onClick={()=>setCount(count-1)}>-1</button>
        
        <button id="reset" onClick={()=> setCount(0)}>RESET</button>

        <button id="plus1" onClick={()=>setCount(count+1)}>+1</button>

        <button id="plus5" onClick={()=>setCount(count+5)}>+5</button>

        <div id="div1">{history}</div>
        <div>
            {
                history.map((h, i) => <p key={i}>{h}</p>)
            }
        </div>

        </>
    );

}

export default Counter;
import React, { useState } from 'react';
import './Counter.css'

function Counter(props) {
    const [count, setCount] = useState(0);

    function increment() {
        console.log(count);
        setCount(count+props.by);
    }

    return (
        <div className='counter'>
            <h1>Counter</h1>
            <span>{count}</span>
            <button onClick={increment}>{props.by}</button>
        </div>
    )
}



export default Counter;
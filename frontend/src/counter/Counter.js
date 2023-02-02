import React, { useState } from 'react';
import './Counter.css'
import PropTypes from "prop-types"
import CounterButton from "./CounterButton"

Counter.defaultProps = {
    by: 1,
}

Counter.propTypes = {
    by : PropTypes.number,
}



function Counter() {
    const [count, setCount] = useState(0);

    function increment(by) {
        setCount(count+by);
    }

    return (
        <div className='counter'>
            <h1>Counter</h1>
            <span>{count}</span>
           
        </div>
    )
}



export default Counter;
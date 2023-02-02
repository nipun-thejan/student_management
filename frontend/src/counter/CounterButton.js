import React from 'react'

function CounterButton(props) {
    const {action, by} = props
    return <button onClick={()=>action} >{by}</button>
}

export default CounterButton
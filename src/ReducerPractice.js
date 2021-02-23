import React from 'react'

const countReducer = (state, action) => {
    switch(action.type) {
        case "INCREMENT":
            return {count: state.count + action.amount};
        case "DECREMENT":
            return {count: state.count - action.amount};
        case "RESET":
            return {count: 0};
    }
}

const ReducerPractice = () => {
    const [state, dispatch] = React.useReducer(countReducer, {count: 0})
    //this sets the state, no setState needed
    return (
        <div>
            <h1>{state.count}</h1>
            <button onClick={() => dispatch({type: "INCREMENT", amount: 1})} >add 1</button>
            <button onClick={() => dispatch({type: "INCREMENT", amount: 5})} >add 5</button>
            <button onClick={() => dispatch({type: "DECREMENT", amount: 1})} >subtract 1</button>
            <button onClick={() => dispatch({type: "RESET"})} >reset</button>
        </div>
    )
}

export default ReducerPractice;
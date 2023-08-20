import React, { useReducer } from "react";

function reducer(state: any, action: any) {
    console.log(">>>>>", action, state)
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1 };
        default:
            return state;
    }
}

const ReducerDemo = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 })
    console.log("FUNCTION ", state)
    return (
        <>
            <h1>Reducer : {state.count}</h1>
            <button onClick={() => { dispatch({ type: "INCREMENT" }) }}>Click Here</button>
        </>
    )
}

export default ReducerDemo;
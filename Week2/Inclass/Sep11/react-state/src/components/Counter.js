import {useState} from 'react';
// The use of use states() in the wild while googling
// State is an object that keeps track of variable that update base don user input.
// When state changes, the component but not the entire page re-renders.

const Counter = () => {
    // When we call useState, we need to name our piece state and the function
    // to update it and declare an initial value for that state.
    const [count, setCount] = useState(0) 
    // useState is a hook that returns an array with two elements: 
    // the current state value and a function to update it.
    /*
        state = {}
    The function to update counts value
    setCount(1)
     */
    const handlePlusClick = () => {
        // NEVER DIRECTLY MUTATE STATE
        setCount(count + 1)
    }
    const handleMinusClick = () => {
        if (count <= 0){
            return
        }
        setCount(count - 1)
    }

    // this is where we return the JSX
    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick = {handleMinusClick}>[-]</button>
            <button onClick = {handlePlusClick}>[+]</button>
        </div>
    )
}

export default Counter

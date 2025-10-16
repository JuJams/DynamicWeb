import {useReducer} from 'react'
import Panel from '../components/Panel'
import Button from '../components/Button'

// Action type constants
const INCREMENT = 'increment'
const DECREMENT = 'decrement'
const CHANGE_VALUE_TO_ADD = 'change_value_to_add'
const ADD_VALUE_TO_COUNT = 'add_value_to_count'

const reducer = (state,action) => {
    switch(action.type){
        case INCREMENT:
            return { ...state, count: state.count + 1 }
        case DECREMENT:
            return { ...state, count: state.count - 1 }
        case CHANGE_VALUE_TO_ADD:
            return { ...state, valueToAdd: action.payload }
        case ADD_VALUE_TO_COUNT:
            return { ...state, count: state.count + state.valueToAdd, valueToAdd: 0 }
        default:
            return state
    }
}

const CounterPage = ({InitialCount}) => {
    // state is now an object with key value pairs as state variables
    const [state, dispatch] = useReducer(reducer, {
        count: InitialCount,
        valueToAdd: 0
    })

    const handleIncrement = () => {
        dispatch({type: INCREMENT})
    }
    const handleDecrement = () => {
        dispatch({type: DECREMENT})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch({type: ADD_VALUE_TO_COUNT})
    }

    const handleChange = (event) => {
        const value = parseInt(event.target.value) || 0
        dispatch({type: CHANGE_VALUE_TO_ADD, payload: value})
    }

    return (
        <Panel>
            <h1>Count is currently {state.count}</h1>
            <div className = "flex flex-row">
                <Button success rounded onClick={handleIncrement}>
                    Increment
                </Button>
                <Button danger rounded onClick={handleDecrement}>
                    Decrement
                </Button>
            </div>
            <form onSubmit = {handleSubmit}>
                <input 
                    className = "p-1 m-4 bg-slate-50 border-slate-300"
                    type = "number"
                    onChange = {handleChange}
                    value = {state.valueToAdd || ''}
                />
                <Button primary rounded>
                    Add Custom Amount!
                </Button>
            </form>

        </Panel>
    )
}

export default CounterPage
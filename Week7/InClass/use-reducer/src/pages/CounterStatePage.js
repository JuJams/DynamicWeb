import {useState} from 'react'
import Panel from '../components/Panel'
import Button from '../components/Button'

const CounterPage = ({InitialCount = 0}) => {
    const [count, setCount] = useState(InitialCount)
    const[valueToAdd, setValueToAdd] = useState(0)

    const handleIncrement = () => {
        setCount(count + 1)
    }
    const handleDecrement = () => {
        setCount(count - 1)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setCount(count + valueToAdd)
        setValueToAdd(0)
    }

    const handleChange = (event) => {
        const value = parseInt(event.target.value) || 0
        setValueToAdd(value)
    }

    return (
        <Panel>
            <h1>Count is currently {count}</h1>
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
                    value = {valueToAdd || ''}
                />
                <Button primary rounded>
                    Add Custom Amount!
                </Button>
            </form>

        </Panel>
    )
}

export default CounterPage
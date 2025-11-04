import {useState} from 'react';
import ToDoCreate from './components/ToDoCreate';
import ToDoList from './components/ToDoList';

function App() {
  const [todos, setTodos] = useState([])
  return (
    <ToDoCreate/>
    <ToDoList/>
  );
}

export default App;

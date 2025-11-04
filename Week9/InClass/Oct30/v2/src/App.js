import {useState, useEffect} from 'react'
import axios from 'axios'
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'


const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || '',
})

function App() {
  const [todos, setTodos] = useState([])

  const fetchTodos = async () => {
    try {
      const response = await api.get('/todos')
      setTodos(response.data)
    } catch (error) {
      console.error('Failed to fetch todos', error)
      setTodos([])
    }
  }
  // NEVER EVER NO NO
  // fetchTodos()
  useEffect(() => {
    fetchTodos()
  }, [])

  const createTodo = async (title) => {
    try {
      const response = await api.post('/todos', { title })
      const updatedTodos = [...todos, response.data]
      setTodos(updatedTodos)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Failed to create todo', error)
    }
  }

  const deleteTodoById = async (id) => {
    try {
      await api.delete(`/todos/${id}`)
      const updatedTodos = todos.filter((todo) => todo.id !== id)
      setTodos(updatedTodos)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Failed to delete todo', error)
    }
  }

  const editTodoById = async (id, newTitle) => {
    try {
      const response = await api.put(`/todos/${id}`, { title: newTitle })
      const updatedTodos = todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, ...response.data }
        }
        return todo
      })
      setTodos(updatedTodos)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Failed to edit todo', error)
    }
  }

  return (
    <div>
      <TodoCreate onCreate={createTodo} />
      <TodoList todos={todos} onDelete={deleteTodoById} onEdit={editTodoById} />
    </div>
  )
}

export default App

import React,{useState} from 'react'
import List from './containers/List/List'
import shid from 'shortid'
const App = () =>{
  const [todos,setTodos] = useState(JSON.parse(localStorage.getItem("todos") || "[]"));

  const addTodoHandler = (data) =>{
    const temp = [...todos,{title:data,completed: false,id:shid.generate()}]
    localStorage.setItem("todos", JSON.stringify(temp));
    setTodos(temp)
  }

  const delTodo = (id) =>{
    const temp = todos.filter((todo)=>todo.id!==id)
    localStorage.setItem("todos", JSON.stringify(temp));
    setTodos(temp)
  }

  const changeCompleteState = (id) =>{
      const temp = todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
      setTodos(temp)
      localStorage.setItem("todos", JSON.stringify(temp));
  }
  return(
    <div>
      <List state = {todos} addTodo={addTodoHandler} delTodo = {delTodo} complete = {changeCompleteState}></List>
    </div>
  )
}

export default App
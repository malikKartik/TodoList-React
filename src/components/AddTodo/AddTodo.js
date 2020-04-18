import React from 'react'
import './AddTodo.css'
const AddTodo = (props) =>{
    const changeHandler = (e)=>{
        const data = document.getElementById('todo-to-add').value
        document.getElementById('todo-to-add').value = ""
        return(data)
    }
    return(
        <div id='add-todo-wraper'>
            <input type="text" id="todo-to-add"/>
            <button onClick={()=>props.addTodo(changeHandler())} id='add-todo-btn'>add</button>
        </div>
    )
}

export default AddTodo
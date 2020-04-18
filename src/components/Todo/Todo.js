import React from 'react'
import './Todo.css'
import DeleteIcon from '@material-ui/icons/Delete';
const Todo = (props) =>{
    const style=(props.todo.completed?{
        textDecoration: "line-through"
    }:{})
    return(
        <div className="todo">
            <li style = {style} className="todo-li">
                <input type="checkbox" onChange={()=>props.complete(props.todo.id)} checked = {props.todo.completed}/>
                {props.todo.title}
                <span onClick={()=>props.delTodo(props.todo.id)} className="todo-del"><DeleteIcon/></span>
            </li>
        </div>
    )
}

export default Todo
import React from 'react'
import Todo from '../Todo/Todo'
const Todos = (props) =>{
    let list = props.todos.map((todo)=>{
        return(
            <Todo todo = {todo} delTodo = {props.delTodo} complete={props.complete}></Todo>
        )
    })
    return(
        <div>
            {list}
        </div>
    )
}

export default Todos
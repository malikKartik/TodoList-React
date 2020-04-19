import React from 'react'
import './list.module.css'
import AddTodo from '../../components/AddTodo/AddTodo'
import Todos from '../../components/Todos/Todos'

const List = (props) =>{
    return(
        <div className="todo-list">
            <AddTodo/>
            <Todos/>
        </div>
    )
}

export default List
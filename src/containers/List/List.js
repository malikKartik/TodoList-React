import React from 'react'
import './list.module.css'
import AddTodo from '../../components/AddTodo/AddTodo'
import Todos from '../../components/Todos/Todos'

const List = (props) =>{
    return(
        <div className="todo-list">
            <AddTodo addTodo = {props.addTodo}/>
            <Todos todos = {props.state} delTodo = {props.delTodo} complete = {props.complete}/>
        </div>
    )
}

export default List
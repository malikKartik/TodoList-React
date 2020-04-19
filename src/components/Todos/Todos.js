import React from 'react'
import {connect} from 'react-redux'
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

const mapStateToProps = state =>{
    return {
      todos: state
    }
  }

export default connect(mapStateToProps)(Todos);
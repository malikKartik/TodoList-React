import React from 'react'
import {connect} from 'react-redux'
import './AddTodo.css'
import shid from 'shortid'
const AddTodo = (props) =>{
    const changeHandler = ()=>{
        const data = document.getElementById('todo-to-add').value
        document.getElementById('todo-to-add').value = ""
        props.dispatch({type: 'ADD_TODO',val:{title:data,completed: false,id:shid.generate()}})
    }
    return(
        <div id='add-todo-wraper'>
            <input type="text" id="todo-to-add"/>
            <button onClick={changeHandler} id='add-todo-btn'>add</button>
        </div>
    )
}

const mapDispatchToProps = dispatch =>({dispatch})

export default connect(null,mapDispatchToProps)(AddTodo)
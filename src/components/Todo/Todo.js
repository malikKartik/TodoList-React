import React from 'react'
import {connect} from 'react-redux'
import './Todo.css'
import DeleteIcon from '@material-ui/icons/Delete';
const Todo = (props) =>{

    const style=(props.todo.completed?{
        textDecoration: "line-through"
    }:{})
    return(
        <div className="todo">
            <li style = {style} className="todo-li">
                <input type="checkbox" onChange={()=>props.dispatch({type: 'COMP_TODO',id:props.todo.id})} checked = {props.todo.completed}/>
                {props.todo.title}
                <span onClick={()=>props.dispatch({type: 'DEL_TODO',id:props.todo.id})} className="todo-del"><DeleteIcon/></span>
            </li>
        </div>
    )
}
const mapDispatchToProps = dispatch =>({dispatch})
const mapStateToProps = state => {
    return{
        todos:state
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Todo)
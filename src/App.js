import React from 'react'
import {connect} from 'react-redux'
import List from './containers/List/List'
const App = (props) =>{
  return(
    <div>
      <List></List>
    </div>
  )
}

const mapStateToProps = state =>{
  return {
    todos: state
  }
}

const mapDispatchToProps = dispatch =>({dispatch})

export default connect(mapStateToProps,mapDispatchToProps)(App);
const initialState = JSON.parse(localStorage.getItem("todos") || "[]")

const reducer = (state = initialState,action)=>{
    if(action.type === 'ADD_TODO'){
        const temp = [...state,action.val]
        localStorage.setItem("todos", JSON.stringify(temp));
        return temp
    }
    if(action.type === 'DEL_TODO'){
        const temp = state.filter((todo)=>todo.id!==action.id)
        localStorage.setItem("todos", JSON.stringify(temp));
        return [...temp]
    }
    if(action.type === 'COMP_TODO'){
        const temp = state.map(todo => {
            if (todo.id === action.id) {
                
                todo.completed = !todo.completed;
            }
            return todo;
          })
        
        localStorage.setItem("todos", JSON.stringify(temp));
        return [...temp]
    }
    return state;
}

export default reducer;
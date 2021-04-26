import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo, editTodo, toggleTask } from './actions/todoActions'

// import { Button } from 'react-bootstrap';

const Todo = ({todo}) => {
   const [updatedTodo, setupdatedTodo] = useState(todo)
    const dispatch = useDispatch()
    return (
        <div>
        <div><span style={{textDecoration:todo.isDone? "line-Through":"none"}} onClick={()=>dispatch(toggleTask(todo.id))}> {todo.description} </span><button style={{"border-radius":10}} onClick={()=>dispatch(deleteTodo(todo.id))}>Del</button></div>  
      <br/>
       <div><input placeholder="upToDo..." value={updatedTodo.description} onChange={(e)=>setupdatedTodo({...updatedTodo,description:e.target.value})}></input></div>
       
        <button  style={{"border-radius":10}} onClick={()=>dispatch(editTodo(updatedTodo))}>Update</button>
        </div>
    )
}

export default Todo

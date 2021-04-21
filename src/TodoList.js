import React from 'react'
import todoReducer from './reducers/todoReducer'
import Todo from './Todo'

function TodoList({todos}) {
    return (
        <div>
            {todos.map(todo=><Todo todo ={todo}/>)}
        </div>
    )
}

export default TodoList

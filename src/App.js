import { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { addTodo } from './actions/todoActions';
import './App.css';
 import 'bootstrap/dist/css/bootstrap.min.css';
//  import { Button } from 'react-bootstrap';
import {v4} from 'uuid'
import TodoList from './TodoList';
import { toggleFilter } from './actions/filterAction';

function App() {
  const [newTodo, setNewTodo] = useState({
    id:v4(),
    description:"",
    isDone:false
  })
  
  const filter = useSelector(state => state.filterReducer)
  console.log(filter)
  const todos = useSelector(state => state.todoReducer)
  const dispatch = useDispatch()
  const handleSave=()=>{
    dispatch(addTodo(newTodo))
    setNewTodo({ id:v4(),
      description:"",
      isDone:false})
  }
  return (
    <div className="App">
      <div className="border">
    <div>
      <div className="buttonDone">
        <button onClick={()=>dispatch(toggleFilter(null))}>ALL</button>
        
        <button onClick={()=>dispatch(toggleFilter(true))}>DONE</button>
        <button onClick={()=>dispatch(toggleFilter(false))}>UNDONE</button>
      </div>
      <br/>
<input type="text" placeholder="AddTodo..." value={newTodo.description} onChange={(e)=>setNewTodo({...newTodo,description:e.target.value})}></input> <button onClick={handleSave}>Add</button>
    </div> 
<br/>
   <div> 
<TodoList todos={filter===null? todos:todos.filter(el=>el.isDone===filter)}/>
</div>
</div>
    </div>
  );
}

export default App;

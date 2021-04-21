import {useSelector} from 'react-redux'
import './App.css';
import AddToDo from './Components/AddToDo';
import TodoList from './TodoList';

function App() {
   const todos = useSelector(state => state.todoReducer.todos)
  return (
    <div className="App">
     
<TodoList todos={todos}/>
    </div>
  );
}

export default App;

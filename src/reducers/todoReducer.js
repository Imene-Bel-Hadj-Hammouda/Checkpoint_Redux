import { ADD_TASK, DELETE_TASK, EDIT_TODO, TOGGLE_TASK } from "../actions/types";

let initState=[
{
id:1,
description:"Learn React",
isDone: false
},
{
    id:2,
    description:"Learn Node",
    isDone: false
    },
    {
        id:3,
        description:"Learn Express",
        isDone: false
        }

]
 
const todoReducer = (state=initState,action) =>{
switch (action.type) {
    case ADD_TASK:
        return [...state,action.payload]
        
        case DELETE_TASK:
            return state.filter(el=>el.id!==action.payload)
 
        case TOGGLE_TASK:
            return state.map(el=>el.id===action.payload? {...el,isDone:!el.isDone}:el)
    

        case EDIT_TODO:
            return state.map(el=>el.id===action.payload.id? action.payload:el)
            
            default:
                return state;
}
}
export default todoReducer
let initState={
todos:[{
id:1,
description:"Learn React",
isDone: true
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
 }
const todoReducer = (state=initState,action) =>{
return state

}
export default todoReducer
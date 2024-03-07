import React , {useState} from "react"

const Todo = ({task,removeTask,id})=>{
    const remove = ()=>removeTask(id)
    // const remove = ()=>handleRemove(id)
    return (
        <div>
            {task} <button onClick={remove}>X</button>
        </div>
    )
}

export default Todo;
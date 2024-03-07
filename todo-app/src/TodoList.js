import React , {useState} from "react"
import Todo from "./Todo";
import NewTodoForm from "./NewTdoForm";
import {v4 as uuid} from "uuid"

const TodoList = ()=>{
    const initial = [{task: ""}];

    const [tasks, setTasks] = useState(initial);

    const addTask = (newTask)=>{
        setTasks(tasks=>[...tasks,{...newTask,id:uuid()}])
    }
    const removeTask = id =>{
        setTasks(tasks=> tasks.filter(task=>task.id !== id))
    }
    const allTasks = tasks.map(({task,id})=>
    <Todo task={task} id={id} removeTask={removeTask}/>)

    return (
        <div>
            <h3>Todo List</h3>
           <NewTodoForm addTask={addTask}/>
           {allTasks}
        </div>
    )
}

export default TodoList ; 
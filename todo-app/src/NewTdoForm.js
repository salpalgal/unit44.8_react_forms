import React , {useState} from "react"

const NewTodoForm =({addTask})=>{
    const initial = { task : ""}

    const [formData, setFormData] = useState(initial)

    const handleSubmit = (e)=>{
        e.preventDefault();
        addTask({...formData});
        setFormData(initial);
    }

    const handleChange=(e)=>{
        e.preventDefault();
        const {name, value} = e.target;
        setFormData(formData=>({
            ...formData,
            [name]:value
        }))
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="task">Task</label>
            <input 
            id="task"
            type="text"
            name="task"
            placeholder="Enter task"
            value={formData.task}
            onChange={handleChange}
            />
            <button>Add</button>

        </form>
    )
}

export default NewTodoForm;

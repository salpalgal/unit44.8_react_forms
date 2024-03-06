import React , {useState} from "react";

const NewBoxForm = ({addBox})=>{
    const initial = {
        width:"",
        height:"",
        color:""
    }
     const [formData, setFormData] = useState(initial);
    //  const handleChange = (e)=>{
    //     const {name,value} = e.target;
    //     setFormData(formData=>({
    //         ...formData,
    //         [name]:value
    //     }))
    //  }
     const handleChange = e=>{
        console.log(e.target.name)
        console.log(e.target.value)
        const {name, value} = e.target;
        setFormData(formData=> ({
            ...formData,
            [name]: value
        }))
     }

     const handleSubmit = (e)=>{
        e.preventDefault();
        addBox({...formData});

        setFormData(initial);
     }

     return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="width"> Width</label>
            <input
            id="width"
            type="number"
            name="width"
            placeholder="Enter width"
            value={formData.width}
            onChange={handleChange}
            /> 
             <label htmlFor="height"> Height</label>
            <input
            id="height"
            type="number"
            name="height"
            placeholder="Enter height"
            value={formData.height}
            onChange={handleChange}
            /> 
            <label htmlFor="width"> Color</label>
            <input
            id="color"
            type="text"
            name="color"
            placeholder="Enter color"
            value={formData.color}
            onChange={handleChange}
            /> 
            {}
            <button>Sumbit</button>

        </form>
     )
}

export default NewBoxForm;
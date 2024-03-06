import React ,{useState} from "react";
import Box from "./Box"
import NewBoxForm from "./NewBoxForm"
import {v4 as uuid} from "uuid"


const BoxList = ()=>{
    const initial = [{width:"",heigth:"",color:""}]
    
    const [boxes ,setBoxes]= useState(initial);
    const addBox = (newBox)=>{
        setBoxes(boxes=>[...boxes,{...newBox, id:uuid()}])
    }

return (
    <div>
        <h2>Box List</h2>
        <NewBoxForm addBox={addBox} />
        <div>
            {boxes.map(({width,height,color})=> <Box width={width} height={height} color={color} />)}
        </div>
        {/* // <Box width={100} height={100} color="darkgreen" /> */}
    </div>
)
}

export default BoxList;
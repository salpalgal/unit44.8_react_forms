import React ,{useState} from "react";
import Box from "./Box"
import NewBoxForm from "./NewBoxForm"
import {v4 as uuid} from "uuid"



const BoxList = ()=>{
    
    
    const [boxes ,setBoxes]= useState([]);
    const addBox = (newBox)=>{
        setBoxes(boxes=>[...boxes,{...newBox, id:uuid()}])
    }
    const RemoveBox = id=>{
        setBoxes(boxes => boxes.filter(box=> box.id !== id))
    }
    const allBoxs = boxes.map(({width,height,color,id})=> 
    <Box width={width} height={height} color={color} id={id} handleRemove={RemoveBox}/>)
    

return (
    <div>
        <NewBoxForm addBox={addBox} />
        {allBoxs}
        
            
        {/* // <Box width={100} height={100} color="darkgreen" /> */}
    </div>
)
}

export default BoxList;
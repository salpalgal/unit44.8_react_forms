import React, {userState} from "react"






const Box = ({width=10, height=10,color="blue",id,handleRemove})=>{
  
    const remove = ()=>handleRemove(id)
    return (
        <div>
            <div 
                style={{
                width: `${width}em`,
                height: `${height}em`,
                backgroundColor : color, 
            }}/>
            
            <button onClick={remove}>X</button>
        </div>
    )
}


export default Box;
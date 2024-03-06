import React, {userState} from "react"





const Box = ({width,height,color})=>{
    console.log(width)
    console.log(height)
    console.log(color)
    return (
        
        <div 
            style={{
            width: `${width}px`,
            height: `${width}px`,
            backgroundColor : color, 
        }}>
       
        </div>
    )
}


export default Box;
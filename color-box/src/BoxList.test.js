import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";

function addBox(boxlist, height="5",width="5",color="blue"){
    const heightInput = boxlist.getByLabelText("Height")
    const widthInput = boxlist.getByLabelText("Width")
    const colorInput = boxlist.getByLabelText("Color")
    fireEvent.change(widthInput, { target: { value: width } });
    fireEvent.change(heightInput, { target: { value: height } });
    fireEvent.change(colorInput, { target: { value: color } });
    const button = boxlist.getByText("Sumbit")
    fireEvent.click(button)
}
it("works without crashing", function(){
  render(<BoxList />)
})

it("can add box", function(){
    const boxlist = render(<BoxList/>)

    expect(boxlist.queryByText("X")).not.toBeInTheDocument();
    addBox(boxlist)
    
    const removeBtn = boxlist.queryByText("X")
    expect(removeBtn).toBeInTheDocument(); 
    
})
it("can remove box", function(){
    const boxlist = render(<BoxList />)
    addBox(boxlist)

    const removeBtn = boxlist.getByText("X");

    fireEvent.click(removeBtn)

    expect(removeBtn).not.toBeInTheDocument()
})


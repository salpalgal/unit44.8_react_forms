import React from "react";
import { render ,fireEvent} from "@testing-library/react";
import TodoList from "./TodoList";

function addTask(todolist, task="walk dog"){
    const taskInput = todolist.getByLabelText("Task")
    fireEvent.change(taskInput, { target: { value: task } });
    const button = todolist.getByText("Add")
    fireEvent.click(button)
}

it("renders without crashing", function() {
  render(<TodoList />);
});

it("matches snapshot", function() {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

it("can add task", function(){
    const todolist = render(<TodoList />)
    addTask(todolist)
    const removeBtn = todolist.getByText("X")
    expect(removeBtn).toBeInTheDocument()

})

it("can remove task", function(){
    const todolist = render(<TodoList/>)
    addTask(todolist)
    const removeBtn = todolist.getByText("X")
    fireEvent.click(removeBtn)
    expect(removeBtn).not.toBeInTheDocument()
})

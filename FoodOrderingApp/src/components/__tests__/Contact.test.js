import { render,screen } from "@testing-library/react"
import React from "react";
import Contact from "../Contact"
import "@testing-library/jest-dom";

describe("Contact us page testcase",()=>{
   it("Should load Contact us Component",()=>{
    render(<Contact/>)
    const heading=screen.getByRole("heading")
    //Assertion
    expect(heading).toBeInTheDocument()
})


it("Should load Button inside my contact us Component",()=>{
    render(<Contact/>)
    //const Button=screen.getByRole("button")
    const Button=screen.getByText("Submit")
    //Assertion
    expect(Button).toBeInTheDocument()
})

test("Should load Input name inside my contact us Component",()=>{
    render(<Contact/>)
    const Input=screen.getByPlaceholderText("name")
    //Assertion
    expect(Input).toBeInTheDocument()
})

test("Should load 2 Input name inside my contact us Component",()=>{
    render(<Contact/>)
    const InputBoxes=screen.getAllByRole("textbox")
    //Assertion
    expect(InputBoxes).toHaveLength(2)
})
})


import { render,screen } from "@testing-library/react"
import React from "react";
import Header from "../Header"
import "@testing-library/jest-dom";        
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";

it("It should load header component",()=>{
    render(
    <BrowserRouter>
    <Provider store={appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>

)

  const loginButton=screen.getByRole("button")
  // const loginButton=screen.getByText("Login")
  expect(loginButton).toBeInTheDocument()
})

// it("It should load cart item ",()=>{
//     render(
//     <BrowserRouter>
//     <Provider store={appStore}>
//     <Header/>
//     </Provider>
//     </BrowserRouter>

// )
//   const cartItem=screen.getByText(/Cart/);
//   expect(cartItem).toBeInTheDocument()
// })


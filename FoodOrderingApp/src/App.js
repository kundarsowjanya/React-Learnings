import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
//import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import RestuarantMenu from "./components/RestuarantMenu";
import { lazy, Suspense, useEffect, useState } from "react";
import UserContext from "./utils/UserContext";
//import Grocery from "./components/Grocery";

const Grocery=lazy(()=>import("./components/Grocery"))
const About=lazy(()=>import("./components/About"))

const AppLayout=()=>{

    const [userName,setUserName]=useState()

    useEffect(()=>{
       const data={
        name:"Sowjanya1",
       }
       setUserName(data.name)
    },[])

    return(
        <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
        <div className="app">
            <Header/>
            <Outlet />
        </div>
        </UserContext.Provider>
    )
}


const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
        {
          path:"/",
          element:<Body/>
        },
        {
          path:"/about",
          element:<Suspense fallback={<>Loading..</>}><About/></Suspense>
        },
        {
         path:"/contact",
         element:<Contact/>
        },
        {
         path:"/grocery",
         element:
         <Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>
       
        },
        {
         path:"/restaurants/:resId",
         element:<RestuarantMenu/>
        }
       ],
        errorElement:<Error/>
    }
])
const root= ReactDOM.createRoot(document.getElementById('root'));
//without using router
// root.render(<AppLayout/>)

// using router

root.render(<RouterProvider router={appRouter}/>)
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import RestuarantMenu from "./components/RestuarantMenu";

const AppLayout=()=>{
    return(
        <div className="app">
            <Header/>
            <Outlet />
        </div>
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
          element:<About/>
        },
        {
         path:"/contact",
         element:<Contact/>
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
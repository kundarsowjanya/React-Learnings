import {  useContext, useState } from "react"
import {LOGO} from "../utils/constants"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
import UserContext from "../utils/UserContext"
import { useSelector } from "react-redux"
const Header=()=>{

    const [btnName,setBtnName]=useState("login")
    const onlineStatus=useOnlineStatus();
    const {loggedInUser}=useContext(UserContext)

    const cartItems=useSelector((store)=>store.cart.items)
    console.log(cartItems)
 

    return(
        <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-100 lg:bg-green-100">
            <div className="logo-container">
                <img className="w-50" src={LOGO} alt="food-app-logo"></img>
            </div>
            <div className="flex items-center">
                  <ul className="flex p-4 m-4">
                    <li className="px-4">Online Status : {onlineStatus===true?"🟢":"🔴"}</li>
                    <li className="px-4" ><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About Us</Link></li>
                    <li className="px-4"> <Link to="/contact">Contact Us</Link></li>
                     <li className="px-4"> <Link to="/grocery">Grocery</Link></li>
                    <li className="px-4 font-bold text-xl" ><Link to="/cart">Cart {cartItems.length} item</Link>s</li>
                    <button className="login"
                     onClick={()=>{
                        btnName==="Login"?setBtnName("logout"):setBtnName("Login")
                          
                    }
                    }>{btnName}</button>
                     <li className="px-4 font-bold" >{loggedInUser}</li>
                  </ul>
            </div>
        </div>
    )
}

export default Header;
import { useState } from "react";


const User=({name})=>{
   const [count,setCount]=useState(0)
    return(
        <div className="user-card">
            <button onClick={()=>setCount((prev)=>prev+1)}>Count = {count}</button>
            <h2>Name:{name}</h2>
            <h3>Location:Bengaluru</h3>
            <h4>Contact:h8987373</h4>
        </div>
    )
}

export default User;
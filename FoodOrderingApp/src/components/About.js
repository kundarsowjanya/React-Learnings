import React from "react";
import User from "./User";
import User1 from "./UserClass";
// function About(){
//     return(
//         <div>
//         <h1>This is about page</h1>
//         <User1 name="Sowjanya1" location="Bengaluru1"/>
//         </div>
//     )
// }


class About extends React.Component{
    constructor(props){
        super(props)
        console.log("Parent - constructor")
    }
    componentDidMount(){
        console.log("Parent - componentDidMount")
    }
    render(){
        console.log("Parent - render")
        return(
        <div>
         <h1>This is about page</h1>
         <User1 name="Sowjanya1" location="Bengaluru1"/>
         </div>
        )
    }
    
}
export default About;


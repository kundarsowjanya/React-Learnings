import React from "react";
import ReactDOM from "react-dom/client";

const heading= React.createElement("h1",{id:"heading"},"Hello This is Sowjanya here")

//JSX---> it's react element which is object representation of UI
//Babel is used to convert JSX to React.createElement which is understandable by the browser
//JSX is faster than React.createElement because it performs optimization while converting to React.createElement

const jsxHeading = <h1 id="heading">Hello this is Sowj</h1>


console.log(heading);
console.log(jsxHeading);


//React Functional Component

const Title=()=><h1>This is Title</h1>

// This is Component Composition // putting components inside other components
const Heading=()=>{
    return ( <div>
        <Title/>
        <h1 id="heading">Hello This is Sowjanya</h1>
        </div>
    )
}


const Heading1=()=> <div></div>


const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading/>)
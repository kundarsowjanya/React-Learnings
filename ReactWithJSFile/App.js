const parent=React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},[React.createElement("h1",{},"Hello I'm H1 Tag"),React.createElement("h2",{},"Hello I'm H2 Tag")]))
console.log(parent); //It will return an object

const heading=React.createElement("h1",{id:"heading",xyz:"abc"}, "Hello World from React");
console.log(heading); //It will return an object

const root= ReactDOM.createRoot(document.getElementById('root'))

root.render(parent) 
//render method is used to display the content on the screen, it will take object and convert it into HTML and display on the screen
import React, { use } from "react";

class User1 extends React.Component{

    constructor(props){
        super(props)
        this.state={
            count:1,
            userInfo:{
                name:"Dummy",
                location:"Earth",

            }
        }
        console.log(this.props.name+"Child - constructor")
    }

    async componentDidMount(){
        console.log(this.props.name+"Child - componentDidMount")
       const data= await fetch("https://api.github.com/users/sowjanyakundar")
       const jsonData= await data.json()
       this.setState({
        userInfo:{
            name:jsonData.login,
            location:jsonData.url
        }
       })
    }

    componentDidUpdate(){
        console.log(this.props.name+"Child - componentDidUpdate")
    }

    componentWillUnmount(){
        console.log(this.props.name+"Child - componentWillUnmount")
    }

    render(){
        console.log(this.props.name+"Child - render")
        //const {name,location}=this.props
        const {count}=this.state
         const {name,location}=this.state.userInfo
        return(
             <div className="user-card">
             <button onClick={()=>{this.setState({count:this.state.count+1})}} >Count = {count}</button>
            <h2>Name:{name}</h2>
            <h3>Location:{location}</h3>
            <h4>Contact:h8987373</h4>
            </div>
        )
    }
}

export default User1;

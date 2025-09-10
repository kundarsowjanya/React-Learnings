import React from "react";
import ReactDOM from "react-dom/client";

const Header=()=>{
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" alt="food-app-logo"></img>
            </div>
            <div className="nav-items">
                  <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                  </ul>
            </div>
        </div>
    )
}

const RestroCard=(props)=>{
    const {resData}=props;
    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo,deliveryTime}=resData?.data
    return(
        <div className="restro-card" style={{background:"#f0f0f0"}}>
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/"+cloudinaryImageId} alt="res-logo" className="res-logo"></img>
            <h3>{name}</h3>
            <h4>{cuisines.join(',')}</h4>
            <h4>{avgRating} stars</h4>
             <h4>{costForTwo/100}</h4>
            <h4>{deliveryTime} min</h4>
        </div>
    )
}

const resList=[{
   type:"restaurant",
   data:{
    id:"12345",
    name:"Meghana Foods",
    cuisines:["Biryani","Andhra"],
    avgRating:4.4,
    deliveryTime:38,
    costForTwo:40000,
    cloudinaryImageId:"xqwpuhgnsaf18te7zvtv"
   }
},
{
   type:"hotel",
   data:{
    id:"1",
    name:"Udupi Grand",
    cuisines:["Dosa","South Indian"],
    avgRating:4.5,
    deliveryTime:30,
    costForTwo:10000,
    cloudinaryImageId:"74914b1ea91d2c6b1ddce5db6ce8759f"
   }
},

]

const Body=()=>{
    return(
        <div className="body">
          <div className="search">
            Search
          </div>
          <div className="restro-container">
            {
               resList.map((resObj)=>  <RestroCard key={resObj?.data?.id} resData={resObj}/>)
            }
           
          </div>
        </div>
    )
}

const AppLayout=()=>{
    return(
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}

const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>)
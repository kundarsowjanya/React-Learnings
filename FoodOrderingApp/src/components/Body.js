import RestroCard,{withPromotedLabel} from "./RestroCard";
import { resList } from "../utils/mockData";
import  {useContext, useEffect, useState} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";


const Body=()=>{
  
    const [listOfRestaurant,setListOfRestaurant]=useState([])
    const [filteredRestaurant,setFilteredOfRestaurant]=useState([])
    const [searchText,setSearchText]=useState("")

    const RestaurantCardWithPromotedLabel=withPromotedLabel(RestroCard);
    const {setUserName,loggedInUser}=useContext(UserContext);

    useEffect(()=>{
      console.log("useEffect called")
      fetchData();
    },[])

    const fetchData=async()=>{
      const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9698196&lng=77.7499721&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
      const jsonData=await data.json();
      console.log(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setListOfRestaurant(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      setFilteredOfRestaurant(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    console.log("Body Rendered",listOfRestaurant)

    const onlineStatus=useOnlineStatus();

    if(onlineStatus===false){
      return <h1>🔴 Offline, Please check your internet connection!!</h1>
    }

 
    return(
      <>
        {
          listOfRestaurant?.length===0?<Shimmer/>:
          <div className="body">
          <div className="filter flex">
             
             <div className="search m-4 p-4">
               <input type="text" className=" border border-solid border-black" placeholder="Search" value={searchText} onChange={(e)=>setSearchText(e.target.value)}></input>
               <button className="search-btn px-4 py-2 bg-blue-100 m-4 rounded-lg"
               onClick={()=>{
                  console.log(searchText)
                  const filteredList=listOfRestaurant.filter((res)=>res?.info?.name?.toLowerCase().includes(searchText.toLocaleLowerCase()))
                  setFilteredOfRestaurant(filteredList)
               }}>Search</button>
             </div>
            
            <div className="m-4 p-4 flex items-center">
            <button className="px-4 py-2 bg-gray-100 rounded-lg" onClick={()=>{
                const filteredList=listOfRestaurant.filter(res=>res?.info?.avgRating>4)
                setFilteredOfRestaurant(filteredList)
            }}>Top Rated Restaurant</button>
            </div>

          <div className="m-4 p-4 flex items-center">
            <label>User Name</label>
            <input  className="border border-black p-2"  value={loggedInUser} onChange={(e)=>setUserName(e.target.value)} />
            </div>

          </div>
          <div className="flex flex-wrap">
            {
               filteredRestaurant?.map((resObj)=> <Link key={resObj?.info?.id} to={`/restaurants/${resObj?.info?.id}`}>
               {resObj?.info?.veg?<RestaurantCardWithPromotedLabel  resData={resObj}/>:<RestroCard  resData={resObj}/>}
              
                </Link>)
            }
           
          </div>
        </div>
      }
      </>
    )
}

export default Body;
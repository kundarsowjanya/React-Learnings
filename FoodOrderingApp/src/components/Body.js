import RestroCard from "./RestroCard";
import { resList } from "../utils/mockData";
import  {useEffect, useState} from "react";
import Shimmer from "./Shimmer";

const Body=()=>{
  
    const [listOfRestaurant,setListOfRestaurant]=useState([])
    const [filteredRestaurant,setFilteredOfRestaurant]=useState([])
    const [searchText,setSearchText]=useState("")

    useEffect(()=>{
      console.log("useEffect called")
      fetchData();
    },[])

    const fetchData=async()=>{
      const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9615398&lng=79.2961468&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
      const jsonData=await data.json();
      console.log(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setListOfRestaurant(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      setFilteredOfRestaurant(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }


 
    return(
      <>
        {
          listOfRestaurant?.length===0?<Shimmer/>:
          <div className="body">
          <div className="filter">
             
             <div className="search">
               <input type="teext" className="search-box" placeholder="Search" value={searchText} onChange={(e)=>setSearchText(e.target.value)}></input>
               <button className="search-btn"
               onClick={()=>{
                  console.log(searchText)
                  const filteredList=listOfRestaurant.filter((res)=>res?.info?.name?.toLowerCase().includes(searchText.toLocaleLowerCase()))
                  setFilteredOfRestaurant(filteredList)
               }}>Search</button>
             </div>
            
            <button className="filter-btn" onClick={()=>{
                const filteredList=listOfRestaurant.filter(res=>res?.info?.avgRating>4)
                setFilteredOfRestaurant(filteredList)
            }}>Top Rated Restaurant</button>
          </div>
          <div className="restro-container">
            {
               filteredRestaurant?.map((resObj)=>  <RestroCard key={resObj?.info?.id} resData={resObj}/>)
            }
           
          </div>
        </div>
      }
      </>
    )
}

export default Body;
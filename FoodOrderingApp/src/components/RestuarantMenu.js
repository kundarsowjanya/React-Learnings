import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom"
import useRestaurantMenu from "../utils/useRestaurantMenu"
import RestaurantCategory from "./RestaurantCategory"
import { useState } from "react"


export default function RestuarantMenu() {


    const {resId}=useParams()

    const resInfo=useRestaurantMenu(resId)

    const [showIndex,setShowIndex]=useState(0)

    // useEffect(()=>{
    //    fetchMenu()
    // },[])

//    const fetchMenu=async()=>{
//         const data = await fetch(`${MENU_URL}${resId}&catalog_qa=undefined&submitAction=ENTER`)
//       //  const json =await data.json();
//         console.log(data);
//         setResInfo(menuList.data)
//     }

    if(resInfo===null) return <Shimmer/>

    const {name,cuisines,costForTwoMessage}=resInfo?.cards[2].card.card.info

    const {itemCards}= resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card.card

    var Rec=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    var Categories=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory")
    console.log(Categories)
    
    return (
    <div className='text-center'>
        <h1 className="font-bold my-5 text-2xl">{name}</h1>
        <h3 className="font-bold text-lg">{cuisines.join(",")} - {costForTwoMessage}</h3>
        {Categories.map((category,index)=>
        <RestaurantCategory key="index" data={category?.card?.card?.categories[0]} showItem={index===showIndex&&true} setShowIndex={()=>setShowIndex(index)}/>
        )}
      
    </div>
  )
}

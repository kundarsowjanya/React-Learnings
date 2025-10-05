import { useEffect, useState } from "react"
import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom"
import { MENU_URL } from "../utils/constants"

export default function RestuarantMenu() {

    const [resInfo,setResInfo]=useState(null)
    const {resId}=useParams()

    useEffect(()=>{
       fetchMenu()
    },[])

   const fetchMenu=async()=>{
        const data = await fetch(`${MENU_URL}${resId}&catalog_qa=undefined&submitAction=ENTER`)
        const json =await data.json();
        console.log(json);
        setResInfo(json.data)
    }

    if(resInfo===null) return <Shimmer/>

    const {name,cuisines,costForTwoMessage}=resInfo?.cards[2].card.card.info

    const {itemCards}= resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
    console.log(itemCards)
 
    return (
    <div className='menu'>
        <h1>{name}</h1>
        <h3>{cuisines.join(",")} - {costForTwoMessage}</h3>
        <ul>
            {
                itemCards?.map((item)=><li key={item.card?.info?.id}>{item.card?.info?.name} - Rs. {item?.card?.info?.defaultPrice/100 || item?.card?.info?.price/100 }</li>)
            }
        </ul>
    </div>
  )
}

import { useEffect ,useState} from "react";
import { MENU_URL } from "../utils/constants";
import {menuList} from "../utils/mockByFood"

const useRestaurantMenu=(resId)=>{
   const [resInfo,setResInfo]=useState(null)

   useEffect(()=>{
      fetchMenu()
   },[])

   const fetchMenu=async()=>{
      const data= await(`${MENU_URL}${resId}&catalog_qa=undefined&submitAction=ENTER`)
      console.log(data);
      setResInfo(menuList.data)
   }

   return resInfo;
}

export default useRestaurantMenu;
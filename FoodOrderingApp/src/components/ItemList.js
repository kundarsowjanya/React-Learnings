import { useDispatch } from "react-redux"
import {IMG_URL} from "../utils/constants"
import { addItem } from "../utils/cartSlice";

const ItemList=({items})=>{

  const dispatch=useDispatch();

  const handleAddItem=(item)=>{
     dispatch(addItem(item))
  }

 
   return(
    <div>
        <div>
            {items.map((item)=>
            <div key={item.card.info.id} className="p-2 m-2 border-b-1 border-black text-left flex justify-between">
                
                  <div className="w-9/12">
                  <div className="py-2">
                    <span className="">{item.card.info.name}</span>
                    <span> - Rs {item?.card.info.price/100}</span>
                 </div>
                 <p className="text-xs">{item.card.info.description}</p>
                 </div>
                   <div className="w-3/12 p-4">
                   <div className="">
                   <button className="p-2 bg-white shadow-lg  m-auto" onClick={()=>handleAddItem(item)}>Add+</button>
                   <img src={IMG_URL+item.card.info.imageId} className="w-full" />
                   </div>
                   </div>
            </div>
        )}
        </div>
    </div>
   )
}

export default ItemList;
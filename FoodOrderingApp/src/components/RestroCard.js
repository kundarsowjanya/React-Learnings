import {IMG_URL} from "../utils/constants"

const RestroCard=(props)=>{
    const {resData}=props;
    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo,sla}=resData?.info
    
    return(
        <div className="m-4 p-4 w-[250px] rounded-lg hover:bg-gray-200 bg-gray-100">
            <img src={IMG_URL+cloudinaryImageId} alt="res-logo" className="rounded-lg"></img>
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.join(',')}</h4>
            <h4>{avgRating} stars</h4>
             <h4>{costForTwo}</h4>
            <h4>{sla?.slaString}</h4> 
        </div>
    )
}

export const withPromotedLabel=(RestroCard)=>{
    return(props)=>{
            return(
                <div>
                    <label className="absolute bg-black text-white m-1 p-2 py-1 rounded-lg">Promoted</label>
                    <RestroCard {...props}/>
                </div>
            )
    }
}

export default RestroCard;
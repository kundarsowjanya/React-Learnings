import {IMG_URL} from "../utils/constants"

const RestroCard=(props)=>{
    const {resData}=props;
    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo,sla}=resData?.info
    
    return(
        <div className="restro-card" style={{background:"#f0f0f0"}}>
            <img src={IMG_URL+cloudinaryImageId} alt="res-logo" className="res-logo"></img>
            <h3>{name}</h3>
            <h4>{cuisines.join(',')}</h4>
            <h4>{avgRating} stars</h4>
             <h4>{costForTwo}</h4>
            <h4>{sla?.slaString}</h4> 
        </div>
    )
}

export default RestroCard;
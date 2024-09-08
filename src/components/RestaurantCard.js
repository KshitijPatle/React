import { Link } from "react-router-dom";
import React from "react";



const RestaurantCard = (props) => {
    //destructuring
    const { resData } = props;
    const { name, rating, cuisines, time, price, img } = resData?.data

    // if here we have data inside time and we want to use that so in below code we have to write time.minute like that 


    return (
        //  <div className="res-card" style={styleCard}>
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
            {/* <img className='res-logo' src="https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png" alt="res-logo" /> */}
            <img className='res-logo' src={img} alt="res-logo" />
            <h2>{name}</h2>
            <h4>{cuisines}</h4>
            {/* <h5>{rating} stars ------  {time} minutes</h5> */}
            <h5 style={{ color: rating>=4.0? "green" :"red" }}>{rating} stars ------  {time} minutes</h5>
            <h3 style={{ color: "blue"}}>{price / 100} Rs.</h3>
        </div>
    )
}


export default RestaurantCard;  



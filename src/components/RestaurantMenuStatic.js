  import React, { useEffect , useState } from 'react'
  import { detailedResList } from '../utils/mockData'
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';

  const RestaurantMenuStatic = () => {

    const[resInfo , setResInfo] = useState(null);
    console.log(detailedResList)

    const{resId} = useParams();



    useEffect(() => {
      // Convert resId to an integer and find the restaurant by its ID
      const restaurant = detailedResList.find((res) => res.id === parseInt(resId));
  
      // Update state with the found restaurant details
      setResInfo(restaurant);
    }, [resId]); // Dependency array includes resId to update whenever it changes

    // useEffect((i)={
    //   fetchMenu()
    // },[])
 

    // const fetchMenu = async ()=>{
    //   const data = await fetch();
    //   const json = await data.json();
    //   console.log(json)
    // }

    if(resInfo===null) return <Shimmer />

    const{name,cuisines,id,menu} = resInfo;

    return (
    <div>
      <h1>{name}</h1>
      <h2>{cuisines}</h2>
      <h2>Menu</h2>
      <ul>
      {menu.map((itm)=>(
        <li key = {id}>{itm.item}  - {itm.price/100 || itm.defaultPrice/100  } Rs.</li>
      ))}
        {/* <li>{menu[0].item}</li>
        <li>{menu[1].item}</li>
        <li>{menu[2].item}</li>
        <li>{menu[3].item}</li> */}
      </ul>
    </div>
    )
  }

  export default RestaurantMenuStatic;

import { LOGO_URL } from "../utils/constants";
import { useState , useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Header = ()=>{

  const onlineStatus = useOnlineStatus();

    let btnName = 'Login' // this will not work 
    const[btnNameReact,setBtnNameReact] = useState("Login");


    useEffect(()=>{
        console.log("Effect effect effect")
    }, [btnNameReact])
    return(
        <div className="header">
            <div className="logo-container">
               {/* <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"/> */}
               <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                <li>Online Status : {onlineStatus ? "🟢" :"🔴"}</li>
                    <li> <Link to="/">Home</Link></li>
                    <li> <Link to="/about">About Us</Link></li>
                    <li> <Link to="/contact">Contact Us</Link></li>
                    <li> <Link to="/grocery">Grocery</Link></li>
                    <li>Cart</li>
                    <button className="login" style={{height:"40px" }} onClick={()=>{btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login") }}> <b>{btnNameReact}</b></button>
                </ul>
            </div>
        </div>
    ) 
}

export default Header;
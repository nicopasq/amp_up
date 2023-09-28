import React from "react";
import { NavLink } from "react-router-dom"

function Header(){

    return (
        <div style={{backgroundColor: "Grey", position: "relative", right: "0.5vw", height: "7vh", width: "100vw"}}>
            <NavLink to = '/my_home'>Click Me!</NavLink>
        </div>
    )
}

export default Header;
import React from "react";
import {NavLink} from "react-router-dom";
import "./NavBar.css"

function NavBar(){
    return (
    <div className="Navbar">
        <h1 id="okumu_home">Okumu Homes</h1>
        <div className="linkStyling">
        <NavLink to="/">
            About
        </NavLink>
        <NavLink to="/registerhouse">
            Register House
        </NavLink>
        <NavLink to="/viewhouse">
            View House
        </NavLink>
        
        </div>
    </div>
)
}
export default NavBar;
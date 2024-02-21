
import React, { useState } from "react"
import {Link, NavLink} from 'react-router-dom'
import "./NavBar.css"

export default function NavBar()
{
    const [menuOpen, setMenuOpen] = useState(false);
     return (
         <>
         <nav>
            <div className="menu" onClick={()=>{
                console.log('working');
                setMenuOpen(!menuOpen);
                }}>
                 <span></span>
                 <span></span>
                 <span></span>
            </div>
            <NavLink to ="/" className="title"><span className="heading">RACON</span><br/><span className="subHeading">THE CAREER NAVIGATOR</span></NavLink>
            <ul className = {menuOpen ? "open": ""}>
            <li>
                <NavLink to="/Clients">Client & Partners</NavLink>
                </li>
                <li>
                <NavLink to="/Services">Services</NavLink>
                </li>
                <li>
                <NavLink to="/About">About</NavLink>
                </li>
                <li>
                <NavLink to="/Contact">Contact</NavLink>
                </li>
                <li>
                <NavLink to="/Login">Login</NavLink>
                </li>
            </ul>
         </nav>
         </>
     );
}
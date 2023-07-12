import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';
function NavBar(){
    function openNav() {
      document.getElementById("mySidepanel").style.width = "200px";
    }
    function closeNav() {
      document.getElementById("mySidepanel").style.width = "0";
    }
    return(
        <>
        <div id="mySidepanel" class="sidepanel">
            <a class="closebtn" onClick={closeNav}>&times;</a>
            <a href="/contactus">Contact</a>
            <a href="/about">About</a>
            <a >Download</a>
            <a >Help</a>
        </div>

        <ul className="navbar"> 
            <li className="open" onClick={openNav}>&#9776;</li>
            <li className="title">bookMyTrip</li>
            <li className="nav"><Link style={{textDecoration:"none"}} to="/login">Login/Logout</Link></li>
            <li className="nav"><a >My Tickets</a></li>
            <li className="nav"><a href="/">Home</a></li>
        </ul>
      </>
    ); 
}
export default NavBar;
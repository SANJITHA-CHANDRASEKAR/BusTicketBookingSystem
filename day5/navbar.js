import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';
import { connect } from 'react-redux';
function NavBar({username}){
  
    function openNav() {
      document.getElementById("mySidepanel").style.width = "200px";
    }
    function closeNav() {
      document.getElementById("mySidepanel").style.width = "0";
    }
    return(
        <>
        <div id="mySidepanel" class="sidepanel">
            <li class="closebtn" onClick={closeNav}>&times;</li>
            <li className="nav"><Link style={{textDecoration:"none"}} to="/contactus">Contact</Link></li>
            <li className="nav"><Link style={{textDecoration:"none"}} to="/about">About</Link></li>
            <li className="nav"><Link style={{textDecoration:"none"}} to="/download">Download</Link></li>
            <li className="nav"><Link style={{textDecoration:"none"}} to="/help">Help</Link></li>

        </div>

        <ul className="navbar"> 
            <li className="open" onClick={openNav}>&#9776;</li>
            <li className="title">bookMyTrip</li>
            <li style={{color:"white",margin:"15px"}}>{username}</li>
            <li className="nav"><Link style={{textDecoration:"none"}} to="/login">Login/Logout</Link></li>
            <li className="nav"><a href='myticket'>My Tickets</a></li>
            <li className="nav"><Link style={{textDecoration:"none"}} to="/">Home</Link></li>
        </ul>
      </>
    ); 
}
// export default NavBar;
const mapStateToProps = (state) => ({
  username: state.username,
  
});



export default connect(mapStateToProps)(NavBar);
import React from "react";
import './Navbar.css';
 const Navbar =()=>{
     return <div className="nav-container">
         <div className="main-heading">
             <h1>PULSE PTT MANAGEMENT CONSOLE</h1>
         </div>
         <div className="side-nav-div">
         <div className="agent-display-name">
             <p><i class="fas fa-user-circle"></i>  John Doe</p>
         </div>
         <div className="nav-buttons">
             <button style={{'color':'blue'}}>Lang<i class="fas fa-language"></i></button>
             <button>Logout<i class="fas fa-sign-out-alt"></i></button>
         </div>
         </div>
     </div>
 }

 export default Navbar;
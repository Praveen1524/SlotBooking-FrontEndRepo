import React from 'react';
import { Link } from 'react-router-dom';
import "./home.css";
import "./Booking.css";
function Menu() {
  return (
    <>
    <body>
    <div class="home">
    <div className='navi'>
    <ul class="navigation">
    <li><Link to="/" className='nav'>Home</Link></li>
    <li><Link to="/" className='nav'>Booking</Link></li>
    <li><Link to="/" className='nav'>About</Link></li>
    <li><Link to="/" className='nav'>Contact</Link></li>
    </ul>
    </div>
    <h2>Menu</h2>
    <div class="change">
        <button class="edit" onClick={()=>{document.getElementById("option").style.display="block"}}>Edit Menu</button>
        <div id="option">
        <ul>
           <li><Link to="/Add" className='options'>Add Menu</Link></li>
           <li><Link to="/" className='options'>Update Menu</Link></li>
           <li><Link to="/" className='options'>Delete Menu</Link></li>
        </ul>
        </div>
        </div>
        <img src="idli.jfif" alt="idli"/>
        </div>
        </body>
        </>
  )
}

export default Menu
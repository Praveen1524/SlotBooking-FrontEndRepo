import React from 'react'
import { Link } from 'react-router-dom';
import "./form.css";
import Form1 from '../form1';
function Form() {
  return (
    <>
    <body>
    <div class="home">
    <div className='navi'>
    <ul class="navigation">
    <li><Link to="/" className='nav'>Home</Link></li>
    <li><Link to="/Booking" className='nav'>Booking</Link></li>
    <li><Link to="/" className='nav'>Gallery</Link></li>
    <li><Link to="/" className='nav'>Contact</Link></li>
    <li><Link to="/" className='nav'>LOGIN</Link></li>
    </ul>
    </div>
    
    <Form1/>
    </div>
    </body>
    </>
  )
}

export default Form;
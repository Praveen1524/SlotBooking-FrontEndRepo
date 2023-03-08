import React from 'react'
import { Link } from 'react-router-dom';
import Form1 from './form1';
function Login() {
  return (
    <>
    <body>
    <div class="home">
    <div className='navi'>
    <ul class="navigation">
    <li><Link to="/" className='nav'>Home</Link></li>
    <li><Link to="/PostForm" className='nav'>Create</Link></li>
    <li><Link to="/" className='nav'>Read</Link></li>
    <li><Link to="/" className='nav'>Update</Link></li>
    <li><Link to="/" className='nav'>Delete</Link></li>
    <li><Link to="/login" className='nav'>LOGIN</Link></li>
    </ul>
    </div>
    <h1>Seize your Moment - Book your Slot</h1>
    <Link to="/form" className='nav'><button type="submit" className='book'>Book Now</button></Link>
    <Form1/>
    
    </div>
    </body>
    </>
  )
}

export default Login;
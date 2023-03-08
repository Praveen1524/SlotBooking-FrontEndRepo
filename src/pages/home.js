import React from 'react'
import { Link } from 'react-router-dom';

import './home.css';
function Home() {
  return (
    <>
    <body>
    <div class="home">
    <div className='navi'>
    <ul class="navigation">
    <li><Link to="/" className='nav'>Home</Link></li>
    <li><Link to="/Add" className='nav'>Create</Link></li>
    <li><Link to="/show" className='nav'>Read</Link></li>
    <li><Link to="/update" className='nav'>Update</Link></li>
    <li><Link to="/delete" className='nav'>Delete</Link></li>
    <li><Link to="/login" className='nav'>LOGIN</Link></li>
    </ul>
    </div>
    
    <h1>Seize your Moment - Book your Slot</h1>
    <Link to="/" className='nav'><button type="submit" className='book'>Book Now</button></Link>
    
    </div>
    </body>
    </>
  )
}

export default Home;
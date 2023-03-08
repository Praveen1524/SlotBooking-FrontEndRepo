import React from 'react'
import { Link } from 'react-router-dom';
import Create1 from './create1';
function Create() {
  return (
    <>
    <body>
    <div class="home">
    <div className='navi'>
    <ul class="navigation">
    <li><Link to="/" className='nav'>Home</Link></li>
    <li><Link to="/Create" className='nav'>Create</Link></li>
    <li><Link to="/" className='nav'>Read</Link></li>
    <li><Link to="/" className='nav'>Update</Link></li>
    <li><Link to="/" className='nav'>Delete</Link></li>
    <li><Link to="/login" className='nav'>LOGIN</Link></li>
    </ul>
    </div>
    <h1>Seize your Moment - Book your Slot</h1>
    <Link to="/form" className='nav'><button type="submit" className='book'>Book Now</button></Link>
    <Create1/>
    
    </div>
    </body>
    </>
  )
}

export default Create;
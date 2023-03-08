import axios from 'axios';
import React, { useState } from 'react'

function Delete() {
    const[Sno,setsno]=useState(0);
    const handleSubmit =(e)=>{
        e.preventDefault();
        const data={
            sno:Sno,
        }
        console.log(data)
        axios.delete(`http://127.0.0.1:5000/deleteDetails/${Sno}`)
        .then(res => console.log(res.data))
        .catch(err => console.log(err));
    }


  return (
    <>
    <div>
    <form onSubmit={handleSubmit}>
    <label>Sno</label>
    <input type="tel" placeholder='Sno' onChange={e => setsno(e.target.value)}/>
    <button type="submit"> submit</button>
    </form>
    </div>
    </>
  )
}

export default Delete;
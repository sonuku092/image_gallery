import React from 'react'
import "./Navbar.css";

const Skeleton = ({ item }) => {
  return [...Array(item).keys()].map(()=>(
    <div className='col justify-content-center'>
        <div className=' skl image card rounded shadow-sm'></div>
    </div>
  ))
}

export default Skeleton

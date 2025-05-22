import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from'react-router-dom'

function User() {
  return (
    <>
     <div className='m-10 text-3xl '>Users</div>
     
     <div className="links flex gap-4 m-6 flex-col font-semibold text-blue-900">
    <Link to="/user/vivek">Vivek</Link>
     <Link to="/user/siya">Siya</Link>
     <Link to="/user/shruti">Shruti</Link>
     </div>
     
    <Outlet/>
    </>
   
  )
}

export default User
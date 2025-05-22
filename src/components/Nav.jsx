import React from 'react'
import { NavLink} from 'react-router-dom'

function Nav() {
  return (
    <nav className=' nav w-full bg-zinc-500 p-2 flex justify-center gap-3 text-zinc-100'>
     
        <NavLink style={e=>({color:e.isActive?"orange":""})} to="/">Home</NavLink>
        <NavLink style={e=>({color:e.isActive?"orange":""})} to="/about">About</NavLink>
        <NavLink style={e=>({color:e.isActive?"orange":""})} to="/user">User</NavLink>
    </nav>
  )
}

export default Nav
import React from 'react'
import Add from '../img/Niran.jpg'

const NavBar = () => {
  return (
    <div className='navbar'>
      <span className="logo">Web Chat</span>
      <div className="user">
        <img src={Add} alt="" />
        <span>Niran</span>
        <button>logout</button>
      </div>
    </div>
  )
}

export default NavBar
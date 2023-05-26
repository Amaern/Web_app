import React from 'react'
import NavBar from './NavBar'
import Search from './Search'
import ChatsSide from './ChatsSide'

const SideBar = () => {
  return (
    <div className='sidebar'>
        <NavBar/>
        <Search/>
        <ChatsSide/>
    </div>
  )
}

export default SideBar
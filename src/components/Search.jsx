import React from 'react'
import Add from '../img/Niran.jpg'

const Search = () => {
  return (
    <div  className='search'>
      <div className="searchForm">
        <input type="text" placeholder='Find a user'/>
      </div>
      <div className="userChat">
        <img src={Add} alt="" />
        <div className="userChatInfo">
          <span>Niran</span>
        </div>
      </div>
    </div>
  )
}

export default Search 
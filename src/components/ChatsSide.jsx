import React from 'react'
import Add from '../img/Niran.jpg'

const ChatsSide = () => {
  return (
    <div className='chats'>
      <div className="userChat">
        <img src={Add} alt="" />
        <div className="userChatInfo">
          <span>Niran</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="userChat">
        <img src={Add} alt="" />
        <div className="userChatInfo">
          <span>Niran</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="userChat">
        <img src={Add} alt="" />
        <div className="userChatInfo">
          <span>Niran</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="userChat">
        <img src={Add} alt="" />
        <div className="userChatInfo">
          <span>Niran</span>
          <p>Hello</p>
        </div>
      </div>
    </div>
  )
}

export default ChatsSide
import React, { Component } from 'react'
import $ from 'jquery'
import ChatRoomList from './ChatRoomList.jsx'


const ChatRoom = ({ chatRooms }) => {
  return (
    <ul>
      {
        chatRooms.map(chatRoom => {
          return <ChatRoomList room={chatRoom}/>
        })
      }
    </ul>
  )
}

export default ChatRoom
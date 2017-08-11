import React from 'react'
import ChatRoomListEntry from './ChatRoomListEntry.jsx'

const ChatRoomList = ({ chatRooms, closeRoom, user }) => {
  //each room will contain the user socket and the friend username
  return (
    <div className="chatroom-list-container">
      {
        chatRooms.map(chatRoom => {
          return <ChatRoomListEntry room={chatRoom} closeRoom={closeRoom} user={user} />
        })
      }
    </div>
  )
}

export default ChatRoomList
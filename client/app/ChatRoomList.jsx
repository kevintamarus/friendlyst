import React from 'react'
import ChatRoomListEntry from './ChatRoomListEntry.jsx'

const ChatRoomList = ({ chatRooms, closeRoom, userId }) => {
  //each room will contain the user socket and the friend username
  console.log('this is the userid',userId)
  return (
    <div className="chatroom-list-container">
      {
        chatRooms.map(chatRoom => {
          return <ChatRoomListEntry room={chatRoom} closeRoom={closeRoom} userId={userId} />
        })
      }
    </div>
  )
}

export default ChatRoomList
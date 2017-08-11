import React from 'react'
import ChatRoomListEntry from './ChatRoomListEntry.jsx'

const ChatRoomList = ({ chatRooms, closeRoom, mainUserId }) => {
  //each room will contain the mainUser socket and the friend username
  return (
    <div className="chatroom-list-container">
      {
        chatRooms.map(chatRoom => {
          return <ChatRoomListEntry room={chatRoom} closeRoom={closeRoom} mainUserId={mainUserId} />
        })
      }
    </div>
  )
}

export default ChatRoomList
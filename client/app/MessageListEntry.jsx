import React from 'react'

const MessageListEntry = ({ message, friend, mainUser }) => {

  if (message.from === friend) {
    return (
      <div className="message-entry-fromOthers">
        <span>{message.from}:{message.message}</span>
      </div>
    )
  } else if (message.to === friend && message.from === mainUser.nickname) {
    return (
      <div className="message-entry">
        <span>{message.from}:{message.message}</span>
      </div>
    )
  }
  return (
      <div>
        
      </div>
    )
}

export default MessageListEntry
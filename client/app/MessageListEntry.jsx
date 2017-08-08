import React, { Component } from 'react'


const MessageListEntry = ({ message, friend }) => {

  if (message.from === friend) {
    return (
      <div>
        {message.from}:{message.msg}
      </div>
    )
  }
  return (
      <div>
        
      </div>
    )
}

export default MessageListEntry
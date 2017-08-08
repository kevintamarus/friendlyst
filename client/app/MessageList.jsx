import React from 'react'
import MessageListEntry from './MessageListEntry.jsx'


const MessageList = ({ messages, friend, mainUser }) => {

  return (
    <ul className="message-list">
      {
        messages.map(message => <MessageListEntry message={message} friend={friend} mainUser={mainUser}/>)
      }
    </ul>
  )
}

export default MessageList
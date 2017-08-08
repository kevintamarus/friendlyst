import React from 'react'
import MessageListEntry from './MessageListEntry.jsx'


const MessageList = ({ messages, friend, mainUser }) => {

  return (
    <ul>
      {
        messages.map(message => <MessageListEntry message={message} friend={friend} mainUser={mainUser}/>)
      }
    </ul>
  )
}

export default MessageList
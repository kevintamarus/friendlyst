import React, { Component } from 'react'
import MessageListEntry from './MessageListEntry.jsx'


const MessageList = ({ messages, friend }) => {


  return (
    <ul>
      {
        messages.map(message => <MessageListEntry message={message} friend={friend}/>)
      }
    </ul>
  )
}

export default MessageList
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import MessageList from './MessageList.jsx'
import axios from 'axios'

class ChatRoomListEntry extends Component {
  constructor() {
    super()
    this.state = {
      value: '',
      messages: [],
      displayStatus: 'block',
      displayStatusForMinimized: 'none'
    }
  }

  componentWillMount() {

  }


  componentDidMount() {
    this.props.room.user.on('private message received', msg => {
      this.setState({
        messages: [...this.state.messages, msg]
      })
    })

    axios.get('/api/message/getAllMessage', {
      params: {
        friendEmail: `${this.props.room.friend}@gmail.com`,
        userEmail: `${this.props.room.user.nickname}@gmail.com`,
      }
    })
      .then(({ data }) => {
        this.setState({
          messages: data
        })
      })
  }

  sendPrivateMessage(text) {
    let msg = {
      message: text,
      to: this.props.room.friend,
      from: this.props.room.user.nickname,
      friendEmail: `${this.props.room.friend}@gmail.com`,
      userId: this.props.userId
    }

    axios.post('/api/message/postMessage', msg)

    this.props.room.user.emit('private message', msg)

    if (msg.to === msg.from) {
      return
    }

    this.setState({
      messages: [...this.state.messages, msg]
    })
  }

  closeCurrentRoom() {
    let room = {
      friend: this.props.room.friend,
      user: this.props.room.user
    }

    this.props.closeRoom(room)
  }

  handleEnter(e) {
    if (e.target.value.length < 1) {
      return
    }
    if (e.key === 'Enter') {
      this.sendPrivateMessage(e.target.value)
      e.target.value = ''
    }
  }

  render() {
    return (
      <div className="chatroom">
        <div className="chatroom-header">
          <div className="chatroom-header-name">{this.props.room.friend}</div><div onClick={this.closeCurrentRoom.bind(this)} className="chatroom-header-button">x</div>
        </div>

        <div className="private-message-area">
          <MessageList messages={this.state.messages} friend={this.props.room.friend} user={this.props.room.user} />
        </div>

        <div className="chatroom-inputs">
          <input onKeyPress={this.handleEnter.bind(this)} placeholder="Type a message..." />
        </div>
      </div>
    )
  }
}

export default ChatRoomListEntry
import React, { Component } from 'react'
import $ from 'jquery'


class ChatRoomList extends Component {
  constructor() {
    super()
    this.state = {
      value: ''
    }
  }


  componentDidMount() {
    this.props.room.mainUser.on()
  }

  sendPrivateMessage() {
    // grab only the friend username and user this.props.socket to emit message (?)

    let body = {
      msg: this.state.value,
      to: this.props.room.friend,
      from: this.props.room.mainUser.nickname
    }
    
    // this.props.room.mainUser.emit('test', body)
    this.props.room.mainUser.emit('private message', body)
    
  }

  setVal(val) {
    this.setState({
      value: val
    })
  }


  render() {
    return (
    <div className="chatrooms">
        <p>Chat with {this.props.room.friend}</p>
        

        <div className="private-message-area">
          <input type="text" onChange={(e) => this.setVal(e.target.value)}/>
          <button onClick={this.sendPrivateMessage.bind(this)}>Send</button>
        </div>
      </div>
    )
  }
}

export default ChatRoomList
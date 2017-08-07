import React, { Component } from 'react'
import $ from 'jquery'
import ChatRoom from './ChatRoom.jsx'
import { connect } from 'react-redux'

class FriendListEntry extends Component {
  //each entry should store username so that when clicked, it can grab info from db and open socket

  openChatRoom() {
    let mainUser = this.props.socket
    let friend = this.props.friend

    let chatRoomBetween = {
      mainUser,
      friend
    }
    //chatRoom object that is being passed down will contain info about mainUser socket
    this.props.appendRoom(chatRoomBetween)
  }
  
  render() {
    return (
      <div>
        <div className="friends-container">
          <li onClick={this.openChatRoom.bind(this)} className="each-friend">
            {this.props.friend}
          </li>
        </div>
      </div>
    )
  }
} 

export default FriendListEntry
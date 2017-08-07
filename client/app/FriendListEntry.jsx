import React, { Component } from 'react'
import $ from 'jquery'
import { connect } from 'react-redux'

class FriendListEntry extends Component {
  //each entry should store username so that when clicked, it can grab info from db and open socket

  openChatRoom() {
    //calling appendChatRoom in the App component
    let room = {
      mainUser: this.props.mainUser,
      friend: this.props.friend
    }
    this.props.appendChatRoom(room)
  }
  
  render() {
    return (
        <div className="friends-container">
          <li className="each-friend" onClick={this.openChatRoom.bind(this)}>
            {this.props.friend}
          </li>
        </div>
    )
  }
} 

export default FriendListEntry
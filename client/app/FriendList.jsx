import React, { Component } from 'react'
import FriendListEntry from './FriendListEntry.jsx'
import { connect } from 'react-redux'
import $ from 'jquery'
import io from 'socket.io-client'

class FriendList extends Component {
  componentDidMount() {
  }

  render() {

    return(
      <ul className="friend-list">
        {
          this.props.friends.map((friend) => {
            return <FriendListEntry friend={friend} appendChatRoom={this.props.appendChatRoom} mainUser={this.props.mainUser}/>
          })
        }
      </ul>
    )
  }
}

export default FriendList

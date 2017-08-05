import React, { Component } from 'react'
import FriendListEntry from './FriendListEntry.jsx'
import { connect } from 'react-redux'
import $ from 'jquery'
import io from 'socket.io-client'


class FriendList extends Component {
  constructor(props) {
    super()
  
  }

  componentWillMount() {
    this.socket = io()
    let user = prompt('enter username')
    this.socket.emit('new user', {user})
  }

  componentDidMount() {
    this.socket.on('user created', data => {
      console.log(data)
      this.props.newFriend(data)
    })
  }

  render() {
    
    return(
      <ul className="friend-list">
        {
          this.props.friends.map((friend) => {
            return <FriendListEntry friend={friend} />
          })
        }
      </ul>
    )
  }
}


export default FriendList

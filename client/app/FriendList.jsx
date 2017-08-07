import React, { Component } from 'react'
import FriendListEntry from './FriendListEntry.jsx'
import { connect } from 'react-redux'
import $ from 'jquery'
import io from 'socket.io-client'


const mapStateToProps = (state) => {
		//state.SOMETHING is the reducer
			//so you need another . to access its properties
    return {
        friends: state.friendsReducer.friends
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        newFriend(friend) {
            dispatch({
                type: 'ADD_FRIEND',
                payload: friend
            })
        },
        friendOffline(friendList) {
          dispatch({
            type: 'FRIEND_OFFLINE',
            payload: friendList
          })
        },
        appendChatRoom(room) {
          dispatch({
            type: 'ADD_ROOM',
            payload: room
          })
        }
    }
}

class FriendList extends Component {
  
  componentDidMount() {
    this.socket = io('/')
    
    let username = prompt('enter username')
    this.socket.nickname = username
    
    this.socket.emit('new user', username)
    
    //add one person to the list (receives socket back from server)
    this.socket.on('user created', usernames => {
      this.props.newFriend(usernames)
    })

    //taking user off from current list
    this.socket.on('user disconnected', usernames => {
      this.props.friendOffline(usernames)
    })

    this.socket.on('private message received', (msg) => {
      console.log(msg.from + ':', msg.msg)
    })
  }

  render() {

    return(
      <ul className="friend-list">
        {
          this.props.friends.map((friend) => {
            return <FriendListEntry friend={friend} socket={this.socket} appendRoom={this.props.appendChatRoom}/>
          })
        }
      </ul>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FriendList)

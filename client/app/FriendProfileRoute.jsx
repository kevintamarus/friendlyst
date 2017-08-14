import React, { Component } from 'react';
import Nav from './Nav.jsx';
import $ from 'jquery';
import { connect } from 'react-redux';
import FriendProfile from './FriendProfile.jsx';
import NotUserProfile from './NotUserProfile.jsx';
import NotFriendProfile from './NotFriendProfile.jsx';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import { Redirect } from 'react-router'

const mapStateToProps = (state) => {
  return {
    friendinfo: state.friendinfoReducer.friendinfo,
		posts: state.postsReducer.posts,
		friends: state.friendsReducer.friends,
		chatRooms: state.chatRoomReducer.chatRooms,
		user: state.userReducer.user,
		friend: state.friendReducer.friend
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    newFriendInfo(friendinfo) {
      dispatch({
        type: 'NEW_FRIENDINFO',
				payload: friendinfo
			})
		}
	}
}

class FriendProfileRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      areFriends: true,
      notUser: false,
      loading: true,
      friendObj: {}
    }
  }

  componentDidMount() {

    let self = this;
    setTimeout(() => {
      self.setState({ loading: false })
    }, 1000)

    axios.get(`api/user/getUserFriend?nickname=${this.props.friend}`)
      .then(({ data }) => {
        if (!data) {
          this.setState({ notUser: true });
          console.log('User not found!');
        } else {
          this.setState({ friendObj: data })
          axios.get(`/api/friend/getAllFriend?userId=${this.props.user.id}`)
            .then(({ data }) => {
              this.props.newFriendInfo(this.state.friendObj)                        
              let result = data.filter((friend) => friend.buddyId === this.state.friendObj.id);
              if (result.length) {
                console.log('They are your friend!')
              } else {
                this.setState({ areFriends: false })
                console.log('Not friends!')
              }
            })
        }
      })
      .catch(err => {
        console.log(`Error finding user! ${err}`);
      })
  }

  render() {
    return (
      <div className="profile-container">
        { this.state.loading ? null : this.state.notUser ? <Redirect to='/notuser' /> : this.state.areFriends ?
        <Redirect to='/friendprofile' /> : <Redirect to='/notfriend' /> }
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FriendProfileRoute);
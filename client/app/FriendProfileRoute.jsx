import React, { Component } from 'react'
import Nav from './Nav.jsx'
import { connect } from 'react-redux';
import FriendProfile from './FriendProfile.jsx';
import NotUserProfile from './NotUserProfile.jsx';
import App from './App.jsx';
// import NotFriendProfile from './NotFriendProfile.jsx';

const mapStateToProps = (state) => {
  return {
    posts: state.postsReducer.posts,
    friend: state.userReducer.friend
  }
}

class FriendProfileRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      areFriends: false,
      notFriends: false,
      notUser: false
    }
  }
//call axios.get to see if this.props.friend is even a real user - if not, change notUser to true which will reroute to notuser page
//call axios.get to see if this.props.friend is in our friend db - if success, change state to true, if error, change notFriend state to true

  render() {
    return (
      <div className="profile-container">
        Hello World
        {/* {this.state.notUser ? <NotUserProfile/> : null} 
        {this.state.areFriends ? <FriendProfile/> : null} */}
        {/* {this.state.notFriends ? <NotFriendProfile/> : null}  */}
      </div>
    )
  }
}

export default connect(mapStateToProps)(FriendProfileRoute);
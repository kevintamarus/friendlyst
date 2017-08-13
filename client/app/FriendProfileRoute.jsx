import React, { Component } from 'react';
import Nav from './Nav.jsx';
import $ from 'jquery';
import { connect } from 'react-redux';
import FriendProfile from './FriendProfile.jsx';
import NotUserProfile from './NotUserProfile.jsx';
// import NotFriendProfile from './NotFriendProfile.jsx';
import axios from 'axios';

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

  componentDidMount() {
    let name = this.props.friend
    axios.get(`api/user/getUserFriend?nickname=${name}`)
      .then((data) => {
        console.log(data, 'this is a valid user')
      })
      .catch(err => {
        this.setState({ notUser: true });
        console.log(err, 'this is not a valid user');
      })

    //call axios.get to see if this.props.friend is in our friend db - if success, change state to true, if error, change notFriend state to true

  }

  render() {
    return (
      <div className="profile-container">
        Hello World
        {this.state.notUser ? <NotUserProfile /> : null}
        {/* {this.state.areFriends ? <FriendProfile/> : null} */}
        {/* {this.state.notFriends ? <NotFriendProfile/> : null}  */}
      </div>
    )
  }
}

export default connect(mapStateToProps)(FriendProfileRoute);
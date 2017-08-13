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
    friend: state.friendReducer.friend,
    user: state.userReducer.user
  }
}

class FriendProfileRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      areFriends: false,
      notUser: false
    }
  }

  componentDidMount() {
    let name = this.props.friend
    axios.get(`api/user/getUserFriend?nickname=${name}`)
      .then(({ data }) => {
        console.log(data);
        if (!data) {
          console.log('User not found!');
          this.setState({ notUser: true });
        } else {
          console.log(data, 'this is a valid user')
          axios.get(`/api/friend/getAllFriend?userId=${data.id}`)
            .then(({ data }) => {
              console.log(data, 'FRIENDS HEREEEEEEEEEEEEEEEEEEE');
              let result = data.filter((friend) => this.props.user === friend.buddyId);
              if (result.length) {
                console.log('They are your friend!')
                this.setState({ areFriends: true })
              } else {
                console.log('Not friends!')
              }
            })
        }
      })
      .catch(err => {
        console.log(`Error finding user! ${err}`);
      })

    //call axios.get to see if this.props.friend is in our friend db - if success, change state to true, if error, change notFriend state to true

  }

  render() {
    return (
      <div className="profile-container">
        Hello World
        {this.state.notUser ? <NotUserProfile /> : this.state.areFriends ? <FriendProfile /> : <NotFriendProfile /> }
      </div>
    )
  }
}

export default connect(mapStateToProps)(FriendProfileRoute);
import React, { Component } from 'react';
import Nav from './Nav.jsx';
import $ from 'jquery';
import { connect } from 'react-redux';
import FriendProfile from './FriendProfile.jsx';
import NotUserProfile from './NotUserProfile.jsx';
import NotFriendProfile from './NotFriendProfile.jsx';
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
      areFriends: true,
      notUser: false,
      friendObj: {}
    }
  }

  componentDidMount() {
    
    this.setState({areFriends: true, notUser: false})

    axios.get(`api/user/getUserFriend?nickname=${this.props.friend}`)
      .then(({ data }) => {
        if (!data) {
          this.setState({ notUser: true });
          console.log('User not found!');
        } else {
          this.setState({ friendObj: data })
          axios.get(`/api/friend/getAllFriend?userId=${this.props.user.id}`)
            .then(({ data }) => {
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
        {this.state.notUser ? <NotUserProfile /> : this.state.areFriends ?
        <FriendProfile friendObj={this.state.friendObj}/> : <NotFriendProfile friendObj={this.state.friendObj}/> }
      </div>
    )
  }
}

export default connect(mapStateToProps)(FriendProfileRoute);
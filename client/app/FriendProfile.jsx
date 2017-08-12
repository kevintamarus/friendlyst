import React, { Component } from 'react'
import Nav from './Nav.jsx'
import { connect } from 'react-redux';
import FriendProfileFeedListEntry from './FriendProfileFeedListEntry.jsx'

const mapStateToProps = (state) => {
  return {
    posts: state.postsReducer.posts,
    friend: state.userReducer.friend
  }
}

class FriendProfile extends Component {

  render() {
    return (
      <div className="profile-container">
        <div className="navcopy">
          <Nav />
        </div>
        <div>
          <img src={this.props.friend.profilePicture} />
        </div>
        <div>
          Username: {this.props.friend.nickname}
        </div>
        <div>
          Email: {this.props.friend.email}
        </div>
         <div>
          {this.props.posts.map((post, key) => <FriendProfileFeedListEntry post={post} key={post.id} friend={this.props.friend} />)}
        </div> 
      </div>
    )
  }
}

export default connect(mapStateToProps)(FriendProfile);
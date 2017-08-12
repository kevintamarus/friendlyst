import React, { Component } from 'react'
import Nav from './Nav.jsx'
import { connect } from 'react-redux';
import ProfileFeedListEntry from './ProfileFeedListEntry.jsx'

const mapStateToProps = (state) => {
  return {
    posts: state.postsReducer.posts,
    user: state.userReducer.user
  }
}

class Profile extends Component {

  render() {
    return (
      <div className="profile-container">
        <div className="navcopy">
          <Nav />
        </div>
        <div>
          <img src={this.props.user.profilePicture} />
        </div>
        <div>
          Username: {this.props.user.nickname}
        </div>
        <div>
          Email: {this.props.user.email}
        </div>
         <div>
          {this.props.posts.map((post, key) => <ProfileFeedListEntry post={post} key={post.id} user={this.props.user} />)}
        </div> 
      </div>
    )
  }
}

export default connect(mapStateToProps)(Profile);
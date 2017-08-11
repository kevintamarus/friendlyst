import React, { Component } from 'react'
import Nav from './Nav.jsx'
import { connect } from 'react-redux';
// import ProfileFeedListEntry from './ProfileFeedListEntry.jsx'

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user
  }
}

class Profile extends Component {

  render() {
    return (
      <div className="profile-container">
        {/* <div className="home-page-container" onClick={() => console.log(this.props.user)}> */}
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
        {/* <div>
          {posts.map((post, key) => <ProfileFeedListEntry post={post} key={post.id} user={user} />)}
        </div> */}
      </div>
    )
  }
}

export default connect(mapStateToProps)(Profile);
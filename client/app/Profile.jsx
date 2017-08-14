import React, { Component } from 'react'
import Nav from './Nav.jsx'
import { connect } from 'react-redux';
import ProfileFeedListEntry from './ProfileFeedListEntry.jsx';
import FeedListEntry from './FeedListEntry.jsx';

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
           {console.log(this.props.posts)}
           {
             this.props.posts
              .filter(post => post.userId === this.props.user.id)
              .sort((a, b) => b.id - a.id)
              .map(post => {
                return <FeedListEntry key={post.id} post={post} user={this.props.user}/>
              })
           }
        </div> 
      </div>
    )
  }
}

export default connect(mapStateToProps)(Profile);
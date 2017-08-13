import React, { Component } from 'react'
import Nav from './Nav.jsx'
import { connect } from 'react-redux';
// import FriendProfileFeedListEntry from './FriendProfileFeedListEntry.jsx'

const mapStateToProps = (state) => {
  return {
    posts: state.postsReducer.posts,
    friend: state.userReducer.friend
  }
}

class FriendProfile extends Component {

//we can have some kind of state that is changed - call axios.get to see if the friend exists in our database - if success, change state to true
//add some kind of ternary in the render where if the state is true, display all their info
//if not, simply display their profile picture and username with a button below that says 'You're not friends, click to request!'

  render() {
    {console.log(this.props.posts)}
    return (
      <div className="profile-container">
        <div className="navcopy">
          <Nav />
        </div>
        <div>
          <img src={this.props.friendObj.profilePicture} />
        </div>
        <div>
          Username: {this.props.friendObj.nickname}
        </div>
        <div>
          Email: {this.props.friendObj.email}
        </div>
        <div>
          {
            this.props.posts
              .filter(post => this.props.friendObj.id === post.userId)
              .map(post => {
                return <div>
                    {post.message}
                  </div>
              })
          }
        </div> 
      </div>
    )
  }
}

export default connect(mapStateToProps)(FriendProfile);
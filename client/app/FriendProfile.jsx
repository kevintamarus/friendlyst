import React, { Component } from 'react'
import Nav from './Nav.jsx'
import { connect } from 'react-redux';
import FeedListEntry from './FeedListEntry.jsx';
// import FriendProfileFeedListEntry from './FriendProfileFeedListEntry.jsx'

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
          <img src={this.props.friendinfo.profilePicture} />
        </div>
        <div>
          Username: {this.props.friendinfo.nickname}
        </div>
        <div>
          Email: {this.props.friendinfo.email}
        </div>
        <div>
          {
            this.props.posts
              .filter(post => this.props.friendinfo.id === post.userId)
              .map(post => {
                return <FeedListEntry key={post.id} post={post} user={this.props.user}/>
              })
          }
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(FriendProfile);
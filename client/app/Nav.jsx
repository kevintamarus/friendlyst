import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Notification from './Notification.jsx'
import Auth from '../Auth/Auth';
import { connect } from 'react-redux';

const auth = new Auth();

const mapStateToProps = (state) => {
	//state.SOMETHING is the reducer
	//so you need another . to access its properties
	return {
		posts: state.postsReducer.posts,
		friends: state.friendsReducer.friends,
		chatRooms: state.chatRoomReducer.chatRooms,
		user: state.userReducer.user,
		friend: state.friendReducer.friend
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		newFriend(friend) {
			dispatch({
				type: 'NEW_FRIEND',
				payload: friend
			})
		}
	}
}

class Nav extends Component {
  constructor(props) {
    super(props);
  }

  handleChange(event) {
    newFriend(event.target.value);
    console.log(this.props.friend)
  }

  render() {
    return (
    <div id="nav-bar">
      <Link to="/home"><button>Home</button></Link>
      <Link to="/profile"><button>Profile</button></Link>
      <Notification />
      <button onClick={() => auth.logout()}>Logout</button>
      <form className="search">
        <input type="text" onChange={this.handleChange}/>
        <Link to={"/" + this.props.friend}><input type="submit" value="Search"></input></Link>
      </form>
    </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)
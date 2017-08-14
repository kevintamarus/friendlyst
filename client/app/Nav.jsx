import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Auth from '../Auth/Auth';
import { connect } from 'react-redux';

const auth = new Auth();

const mapStateToProps = (state) => {
	//state.SOMETHING is the reducer
	//so you need another . to access its properties
	return {
		posts: state.postsReducer.posts,
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
    this.props.newFriend(event.target.value);
    console.log(this.props.friend)
  }

  render() {
    return (
    <div id="nav-bar">
      <Link to="/home"><img className="resize2" src="friendlystlogo.jpg" /></Link>
      <Link to="/profile"><button className="buttons">Profile</button></Link>
      <button className="buttons" onClick={() => auth.logout()}>Logout</button>
      <form>
        <input type="text" onChange={this.handleChange.bind(this)}/>
        <Link to={"/" + this.props.friend}><input className="search" type="submit" value="Search"></input></Link>
      </form>
    </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)
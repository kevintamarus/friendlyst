import React, { Component } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';
import axios from 'axios';
import Nav from './Nav.jsx';
import FeedList from './FeedList.jsx';
import Auth from '../Auth/Auth';
import FriendList from './FriendList.jsx';
import FriendProfile from './FriendProfile.jsx';
import ChatRoomList from './ChatRoomList.jsx';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

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
		newPost(post) {
			dispatch({
				type: 'NEW_POST',
				payload: post
			})
		},
		appendChatRoom(room) {
			dispatch({
				type: 'ADD_ROOM',
				payload: room
			})
		},
		newFriend(friend) {
			dispatch({
				type: 'ADD_FRIEND',
				payload: friend
			})
		},
		friendOffline(friendList) {
			dispatch({
				type: 'FRIEND_OFFLINE',
				payload: friendList
			})
		},
		closeRoom(room) {
			dispatch({
				type: 'CLOSE_ROOM',
				payload: room
			})
		},
		newUser(userInfo) {
			dispatch({
				type: 'NEW_USER',
				payload: userInfo
			})
		},
		newNotification() {
			dispatch({
				type: 'NEW_NOTIFICATION'
			})
		}
	}
}

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			previousPosts: []
		}
	}

	componentDidMount() {
		auth.handleAuthentication(this.props.newUser);


		//get all previous posts from database
		let email = 'kevin@hack.com'
		//let email = this.props.user.email;
		axios.get(`api/post/getAllUserPost?email=${email}`)
		.then( (data) => {
			let dataArray = data.data;
			this.setState({previousPosts: dataArray});
		})
		.catch(err => {
			console.log(err, 'could not get data');
		})

		//get all the friends posts and sort everything by updatedAt
		axios.get(`api/post/getAllFriendPost/?email=${email}`)
		.then( (data) => {
			let dataArray = data.data;
			this.setState({previousPosts: this.state.previousPosts.concat(dataArray).sort( (a,b) => {
				a = a.updatedAt;
				b = b.updatedAt;
				return a > b ? -1 : a < b ? 1 : 0;
			})});
		})
		.catch(err => {
			console.log(err, 'could not get data');
		})
	}

	manageChat() {

		this.socket = io('/');

		let username = this.props.user.nickname
		this.socket.nickname = username

		this.socket.emit('new user', username)

		//add one person to the list (receives socket back from server)
		this.socket.on('user created', usernames => {
			this.props.newFriend(usernames)
		})

		this.socket.on('private message received', () => {
			this.props.newNotification()
		})
		//taking user off from current list
		this.socket.on('user disconnected', usernames => {
			this.props.friendOffline(usernames)
		})
	}

	submitPost() {
		axios.post('api/post/postPost', {
			email: this.props.user.email,
			message: $('#post-area').val()
		})
			.then(({ data }) => {
				console.log(data);
				this.props.newPost(data);
			})
			.catch(err => {
				console.log(err);
			})
	}

	render() {
		return (
			<div>
				<BrowserRouter>
					<Switch>
						<Route exact path={"/" + this.props.friend} component={FriendProfile} />
					</Switch>
				</BrowserRouter>
				<Nav />
				<div className="home-page-container" onClick={this.manageChat.bind(this)}>
					<textarea id="post-area" placeholder="What's on your mind?"></textarea>
					{/* <div contentEditable='true' id="post-area" data-text="What's on your mind?"></div> */}
					<button onClick={this.submitPost.bind(this)}>Post</button>
					<input type="text" id="i" />
					<FeedList posts={this.props.posts} previousPosts={this.state.previousPosts} user={this.props.user} />
				</div>
				<FriendList friends={this.props.friends} appendChatRoom={this.props.appendChatRoom} user={this.socket} />
				<ChatRoomList chatRooms={this.props.chatRooms} closeRoom={this.props.closeRoom} userId={this.props.user.id} />
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
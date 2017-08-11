import React, { Component } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';
import axios from 'axios';
import Nav from './Nav.jsx';
import FeedList from './FeedList.jsx';
import Auth from '../Auth/Auth';
import FriendList from './FriendList.jsx';
import ChatRoomList from './ChatRoomList.jsx';

const auth = new Auth();

const mapStateToProps = (state) => {
  //state.SOMETHING is the reducer
  //so you need another . to access its properties
  return {
    posts: state.postsReducer.posts,
    friends: state.friendsReducer.friends,
		chatRooms: state.chatRoomReducer.chatRooms,
		user: state.userReducer.user
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
				}
    }
}


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			previousPosts : []
		}
	}
    
	componentDidMount() {
		this.socket = io('/')

		let username = prompt('enter username')
		this.socket.nickname = username
		
		this.socket.emit('new user', username)
		
		//add one person to the list (receives socket back from server)
		this.socket.on('user created', usernames => {
			this.props.newFriend(usernames)
		})

		//taking user off from current list
		this.socket.on('user disconnected', usernames => {
			this.props.friendOffline(usernames)
		})

		this.socket.on('private message received', msg => {
			console.log(msg)
		})

		//get all previous posts from database
		let email = 'kevin'
		axios.get(`api/post/getAllUserPost?email=${email}`)
		.then( (data) => {
			let dataArray = data.data;
			this.setState({previousPosts: dataArray});
		})
		.catch(err => {
			console.log(err, 'could not get data');
		})
	}

	authlogin(email, password, callback) {
			var conString = "postgres://worejegx:sg-68kIGZY0dCwlgu4qBE7WUi8zHusrK@babar.elephantsql.com:5432/worejegx";
			postgres(conString, function (err, client, done) {
					if (err) {
					console.log('could not connect to postgres db', err);
					return callback(err);
					}
											
					var query = 'SELECT id, nickname, email, password ' +
					'FROM users WHERE email = $1';

					client.query(query, [email], function (err, result) {
					// NOTE: always call `done()` here to close
					// the connection to the database
					done();

					if (err) {
							console.log('error executing query', err);
							return callback(err);
					}

					if (result.rows.length === 0) {
							return callback(new WrongUsernameOrPasswordError(email));
					}

					var user = result.rows[0];

					bcrypt.compare(password, user.password, function (err, isValid) {
							if (err) {
							callback(err);
							} else if (!isValid) {
							callback(new WrongUsernameOrPasswordError(email));
							} else {
							callback(null, {
											id: user.id,
											nickname: user.nickname,
											email: user.email
							});
							}
					});
					});
			});
	}

	authcreate(user, callback) {
			var conString = "postgres://worejegx:sg-68kIGZY0dCwlgu4qBE7WUi8zHusrK@babar.elephantsql.com:5432/worejegx";
			postgres(conString, function (err, client, done) {
					if (err) {
					console.log('could not connect to postgres db', err);
					return callback(err);
							}
					bcrypt.hash(user.password, 10, function (err, hashedPassword) {
					var query = 'INSERT INTO users(email, password) VALUES ($1, $2)';
					client.query(query, [user.email, hashedPassword], function (err, result) {
					// NOTE: always call `done()` here to close
					// the connection to the database
					done();
					if (err) {
					console.log('error executing query', err);
					return callback(err);
					}
					if (result.rows.length === 0) {
					return callback();
					}
					callback(null);
					});
					});
			});
	}

	submitPost() {
	//send username along with post
		let post = {
			content:$('#post-area').text(),
			timeStamp: new Date().toLocaleString()
		}
		//should send post request to server
		let email = 'kevin'
		axios.post('api/post/postPost', {
			email: email,
			message: post.content
		})
		.then(data => {
			console.log(data);
		})
		.catch(err => {
			console.log(err);
		})

		// this.props.newPost(post);
		// console.log(post)
	}
    
    logout() {
		auth.logout();
	}

	render() {
		return (
				<div> 
						<Nav />
						<div className="home-page-container">
							<div contentEditable='true' id="post-area" data-text="What's on your mind?"></div>
							<button onClick={this.submitPost.bind(this)}>Post</button>
							<div>
								<input type="text" id="i"/>
								<button onClick={this.login}>Y</button>
							</div>
							<FeedList previousPosts={this.state.previousPosts} posts={this.props.posts} previousPosts={this.state.previousPosts} mainUser={this.socket}/>
						</div>
						<FriendList friends={this.props.friends} appendChatRoom={this.props.appendChatRoom} mainUser={this.socket}/>
						<ChatRoomList chatRooms={this.props.chatRooms} closeRoom={this.props.closeRoom}/>
				</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
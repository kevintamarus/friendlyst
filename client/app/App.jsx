import React, { Component } from 'react'
import { connect } from 'react-redux'
import $ from 'jquery'
import axios from 'axios'
import Nav from './Nav.jsx'
import FeedList from './FeedList.jsx'
import Auth from '../Auth/Auth';
import FriendList from './FriendList.jsx'
import ChatRoomList from './ChatRoomList.jsx'

const auth = new Auth();

const mapStateToProps = (state) => {
		//state.SOMETHING is the reducer
			//so you need another . to access its properties
    return {
        posts: state.postsReducer.posts,
        friends: state.friendsReducer.friends,
        chatRooms: state.chatRoomReducer.chatRooms
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
        }
    }
}

class App extends Component {

    submitPost() {
	    //send username along with post
        let post = $('#post-area').val()
        //should send post request to server
        this.props.newPost(post)
    }

    login() {
        auth.login();
        //on login, give user the token
    }

    changeName() {
        let name = document.getElementById('i').value 
        document.getElementById('i').value = ''
        this.props.name(name)
    }

    render() {
        console.log(this.props.chatRooms)
        return (
            <div> 
                <Nav login={this.login}/>
                <FeedList posts={this.props.posts}/>
                <input type="text" id="post-area"/>
                <button onClick={this.submitPost.bind(this)}>Post</button>
                <input type="text" id="i"/>
                <button onClick={this.login}>Y</button>
                <button onClick={this.changeName.bind(this)}>X</button>
                <button onClick={this.props.dispatch}>X</button>
                <FeedList posts={this.props.posts}/>
				<FriendList friends={this.props.friends}/>
                <ChatRoomList chatRooms={this.props.chatRooms}/>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
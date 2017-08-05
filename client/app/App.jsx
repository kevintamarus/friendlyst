import React, { Component } from 'react'
import { connect } from 'react-redux'
import $ from 'jquery'
import axios from 'axios'
import Nav from './Nav.jsx'
import FeedList from './FeedList.jsx'
import Auth from '../Auth/Auth';
const auth = new Auth();
import FriendList from './FriendList.jsx'

const mapStateToProps = (state) => {
		//state.SOMETHING is the reducer
			//so you need another . to access its properties
    return {
				posts: state.postsReducer.posts,
				friends: state.friendsReducer.friends
    }
}

const mapDispathToProps = (dispatch) => {
    return {
        newPost(post) {
            dispatch({
                type: 'NEW_POST',
                payload: post
            })
				},
				newFriend(friend) {
					dispatch({
						type: 'ADD_FRIEND',
						payload: friend
					})
				}
    }
}

class App extends Component {

    submitPost() {
				//send username along with post
        let post = $('#post-area').val()
        this.props.newPost(post)
    }

    login() {
        auth.login();
    }

    changeName() {
        let name = document.getElementById('i').value 
        document.getElementById('i').value = ''
        this.props.name(name)
    }

    render() {
        return (
            <div> 
                <Nav login={this.login}/>
                <FeedList posts={this.props.posts}/>
                <input type="text" id="post-area"/>
                <button onClick={this.submitPost.bind(this)}>Submit</button>
                <input type="text" id="i"/>
                <button onClick={this.login}>Y</button>
                <button onClick={this.changeName.bind(this)}>X</button>
                <button onClick={this.props.dispatch}>X</button>
				<FriendList friends={this.props.friends} newFriend={this.props.newFriend}/>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispathToProps)(App)
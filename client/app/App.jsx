import React, { Component } from 'react'
import { connect } from 'react-redux'
import $ from 'jquery'
import Nav from './Nav.jsx'
import FeedList from './FeedList.jsx'
import Auth from '../Auth/Auth';
const auth = new Auth();

class App extends Component {

    
    submitPost() {
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
                <Nav />
                <FeedList posts={this.props.newsFeed}/>
                <input type="text" id="post-area"/>
                <button onClick={this.submitPost.bind(this)}>Submit</button>
                <input type="text" id="i"/>
                <button onClick={this.login}>Y</button>
                <button onClick={this.changeName.bind(this)}>X</button>
                <button onClick={this.props.dispatch}>X</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        newsFeed: state.newsFeed
    }
}

const mapDispathToProps = (dispatch) => {
    return {
        newPost(post) {
            dispatch({
                type: 'NEW_POST',
                payload: post
            })
        }
    }
}

export default connect(mapStateToProps, mapDispathToProps)(App)
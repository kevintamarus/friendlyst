import React, { Component } from 'react'
import { connect } from 'react-redux'
import $ from 'jquery'
import Nav from './Nav.jsx'

class App extends Component {

    
    submitPost() {
        let post = $('#post-area').val()
        this.props.newPost(post)
    }

    render() {
        return (
            <div>
                <Nav />
                {this.props.newsFeed}
                <input type="text" id="post-area"/>
                <button onClick={this.submitPost.bind(this)}>Submit</button>
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
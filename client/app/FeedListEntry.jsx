import React, { Component } from 'react'
import PostLikes from './PostLikes.jsx'
import { Button, Comment, Form, Header } from 'semantic-ui-react'

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

class FeedListEntry extends Component {
	render() {
		return (
			<div>
				<h2>this is a post</h2>
				<Comment>
					<img src="https://scontent-mia3-1.xx.fbcdn.net/v/t1.0-9/19366468_10100764456410460_270583895771912490_n.jpg?oh=20a818a4fa156b1a4e7b4424589ff832&oe=59F19DE8" height="50" width="50"/>
					<Comment.Content>
						<Comment.Author as='a'>Kevin</Comment.Author>
						<Comment.Metadata>
							<div>Today at 9:00AM</div>
						</Comment.Metadata>
						<Comment.Text>{this.props.post}</Comment.Text>
					</Comment.Content>
				</Comment>
				{/* //username
				//user message */}
				<div>
					 <PostLikes/> 
				</div>
				<ul>
					{/* <PostComments/> */}
					{/* {props.comments.map((comment, key) =>
						<PostComments comment={comment} key={key} />
					)} */}
				</ul>
				<div>
					{/* {this.state.comment} */}
				</div>
				<div>
					<Form reply>
						<Form.TextArea onChange={(input) => this.handleCommentInput(input)} />
						<Button content='Comment' labelPosition='left' icon='edit' primary />
					</Form>
				</div>
			</div>
		)
	}
}

export default FeedListEntry
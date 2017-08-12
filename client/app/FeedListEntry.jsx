import React, { Component } from 'react';
import { connect } from 'react-redux';
import FeedListEntryLikes from './FeedListEntryLikes.jsx';
import FeedListEntryComments from './FeedListEntryComments.jsx';
import Time from 'react-time';
import axios from 'axios';

const mapStateToProps = (state) => {
	//state.SOMETHING is the reducer
		//so you need another . to access its properties
	return {
		comments: state.postReducer.comments
	}
}

const mapDispathToProps = (dispatch) => {
	return {
		newComment(comment) {
			dispatch({
				type: 'NEW_COMMENT',
				payload: comment
			})
		}
	}
}

class FeedListEntry extends Component {
	constructor(props) {
		super(props);
		this.state = {
			comments: [],
			commentText: '',
			name: '',
			imageLink: ''
		}
		this.handleCommentInput = this.handleCommentInput.bind(this);
		this.submitComment = this.submitComment.bind(this);
	}

	componentWillMount() {
		//get name and image links
		let id = this.props.post.userId;
		axios.get(`api/user/getUserById?id=${id}`)
		.then( (data) => {
			this.setState({name: data.data.email});
			this.setState({imageLink: data.data.profilePicture});
		})
		.catch(err => {
			console.log(err, 'could not get data');
		})
	}

	handleCommentInput(input) {
		let text = input.target.value;
		this.setState({commentText: text});
	}

	submitComment() {
		let email = 'kevin'
		//send postID along with post
		let comment = {
			content: this.state.commentText,
			timeStamp: new Date().toLocaleString()
		}
		//should send post request to server
		let ID = this.props.postId;
		axios.post('api/usercomment/postComment', {
			email: email,
			postId: ID,
			message: comment.content
		})
		.then(data => {
			console.log(data);
		})
		.catch(err => {
			console.log('comment did not go through');
		})
	}

	render() {
		console.log(this.props.post.userId, 'user ID')
		return (
			<div className="feed-entry">
				<div id="post-container">
					<div className="userinfo">
						<img src={this.state.imageLink} height="50" width="50"/>
							<span className="username">{this.state.name}</span>
					</div>
				</div>

				<div className="post-time">
					<div>{this.props.post.updatedAt}</div>
					<div className="post">{this.props.post.message}</div>
				</div>

				<div>
					<FeedListEntryLikes/>
				</div>

				<ul>
					 {/* {this.comments.map((comment, key) =>
						<FeedListEntryComments comment={comment} key={key}/>)}  */}
				</ul>

				<div>
					<form>
						<textarea onChange={(input) => this.handleCommentInput(input)} cols="50" rows="4" name="comment"></textarea>
						<div>
							<button type="button" onClick={this.submitComment}>Comment</button>
						</div>
					</form>
				</div>
			</div>
		)
	}
}

export default FeedListEntry;
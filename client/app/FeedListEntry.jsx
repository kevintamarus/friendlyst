import React, { Component } from 'react';
import { connect } from 'react-redux';
import FeedListEntryLikes from './FeedListEntryLikes.jsx';
import FeedListEntryComments from './FeedListEntryComments.jsx';
import Time from 'react-time';

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
			commentText: ''
		}
		this.handleCommentInput = this.handleCommentInput.bind(this);
		this.submitComment = this.submitComment.bind(this);
	}

	handleCommentInput(input) {
		let text = input.target.value;
		this.setState({commentText: text});
	}

	submitComment() {
		let text = this.state.commentText;
		//this.props.newComment(text);
	}

	render() {
	let currentTime = new Date();
		return (
			<div className="feed-entry">
				<div id="post-container">
					<div className="userinfo">
						<img src="https://scontent-mia3-1.xx.fbcdn.net/v/t1.0-9/19366468_10100764456410460_270583895771912490_n.jpg?oh=20a818a4fa156b1a4e7b4424589ff832&oe=59F19DE8" height="50" width="50"/>
							<span className="username">{this.props.mainUser.nickname}</span>
					</div>
				</div>

				<div className="post-time">
					<div>{this.props.post.timeStamp}</div>
					<div className="post">{this.props.post.content}</div>
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
						<textarea onChange={(input) => this.submitComment(input)} cols="50" rows="4" name="comment"></textarea>
						<div>
							<button type="button">Comment</button>
						</div>
					</form>
				</div>
			</div>
		)
	}
}

export default FeedListEntry;
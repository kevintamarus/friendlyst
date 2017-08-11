import React, { Component } from 'react';
import FeedListEntryLikes from './FeedListEntryLikes.jsx';

const mapStateToProps = (state) => {
	return {
		posts: state.postsReducer.comments,
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

class FeedListEntryComments extends Component {
	render() {
		return (
			<div>
				<div id="post-container">
					<div className="userinfo">
						<img src="https://scontent-mia3-1.xx.fbcdn.net/v/t1.0-9/19366468_10100764456410460_270583895771912490_n.jpg?oh=20a818a4fa156b1a4e7b4424589ff832&oe=59F19DE8" height="50" width="50" />
						<span className="username">Kevin</span>
					</div>
					<div className="post-time">
						<div>Today at 10:00AM</div>
						<div className="post">{this.props.comment}</div>
					</div>
				</div>
			</div>
		)
	}
}

export default FeedListEntryComments;